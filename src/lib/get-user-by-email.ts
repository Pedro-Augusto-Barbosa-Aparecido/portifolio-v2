import { prisma } from "./prisma";

type Props = {
  email: string;
};

export async function getUserByEmail({ email }: Props) {
  const user = await prisma.user.findUnique({ where: { email } });

  return user;
}
