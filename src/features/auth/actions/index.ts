"use server";

import { prisma } from "@/lib/db/prisma";

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        accounts: true,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAccountByUserId = async (id: string) => {
  try {
    const account = await prisma.account.findUnique({
      where: {
        id,
      },
    });
    return account;
  } catch (error) {
    console.log(error);
    return null;
  }
};
