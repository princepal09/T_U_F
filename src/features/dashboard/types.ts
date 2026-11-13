import { LucideIcon } from "lucide-react";

 export interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
  }
  
export interface LogoutButtonProps{
  children?:React.ReactNode
}  