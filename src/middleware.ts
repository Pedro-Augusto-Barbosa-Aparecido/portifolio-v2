import { withAuth } from "next-auth/middleware";

/*
  For more details https://next-auth.js.org/configuration/nextjs
  Example for validate user by role
  ```ts
    import { withAuth } from "next-auth/middleware"
    export default withAuth(
      // `withAuth` augments your `Request` with the user's token.
      function middleware(req) {
        console.log(req.nextauth.token)
      },
      {
        callbacks: {
          authorized: ({ token }) => token?.role === "admin",
        },
      }
    )
    export const config = { matcher: ["/admin"] }
  ```
*/

export default withAuth({
  callbacks: {
    authorized: async function ({ token }) {
      return !!token;
    },
  },
  pages: {
    signIn: "/signin",
  },
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin", "/admin/(.*)", "/api/admin/(.*)"],
};
