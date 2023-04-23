import type { AuthOptions } from "next-auth";

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "@/lib/prisma";
import { getUserByEmail } from "@/lib/get-user-by-email";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "auth_credentials",
      credentials: {
        email: { label: "E-mail", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email) return null;

        const user = await getUserByEmail({
          email: credentials.email,
        });

        if (user && user.password === credentials.password) return user;

        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);
