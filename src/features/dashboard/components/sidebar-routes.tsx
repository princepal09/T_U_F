"use client";

import { Cable, CircleDollarSign, Home, PencilRuler, User } from "lucide-react";
import SidebarItem from "./sidebar-item";

const SidebarRoutes = () => {
  const routes = [
    {
      icon: Home,
      label: "Home",
      href: "/",
    },
    {
      icon: User,
      label: "User",
      href: "/user-managment",
    },
    {
      icon: PencilRuler,
      label: "Content",
      href: "/content-managment",
    },
    {
      icon: CircleDollarSign,
      label: "Subscriptions",
      href: "/subscription-managment",
    },
    {
      icon: Cable,
      label: "Support & Feedback",
      href: "/support-feedback",
    },
  ];

  return (
    <div className="flex flex-col w-full ">
      {routes.map((route) => (
        <SidebarItem
          key={route.href || route.label}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
