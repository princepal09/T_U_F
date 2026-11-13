import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import authConfig from "./auth.config";
import { prisma } from "./lib/db/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    signIn({ user }) {
      return Boolean(user.email);
    },
    async jwt({ token }) {
      if (!token.sub) return null;

      const user = await prisma.user.findUnique({
        where: { id: token.sub },
        select: { name: true, email: true, role: true },
      });

      if (!user) return null;

      token.name = user.name;
      token.email = user.email;
      token.role = user.role;
      return token;
    },
    session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }

      return session;
    },
  },
});
