import { ReactNode } from "react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarSeparator, SidebarInset } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import AppSidebar from "@/components/dashboard/AppSidebar";

export type Role = "patient" | "doctor" | "hospital";

export default function DashboardLayout({ role, title, children }: { role: Role; title: string; children: ReactNode; }) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <AppSidebar role={role} />
        <SidebarInset>
          <header className="h-16 border-b flex items-center gap-3 px-4">
            <SidebarTrigger />
            <h1 className="text-lg font-semibold mr-2">{title}</h1>
            <GlobalSearch />
          </header>
          <main className="p-4 container mx-auto animate-fade-in">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
