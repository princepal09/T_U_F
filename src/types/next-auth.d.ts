import type { DefaultSession } from "next-auth";
import type { UserRole } from "../generated/prisma/enums";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & { role?: UserRole };
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role?: UserRole;
  }
}
