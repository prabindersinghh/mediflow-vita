import { NavLink, useLocation } from "react-router-dom";
import { CalendarDays, ClipboardList, Video, Bell, Pill, FileHeart, Home, Users2, Building2, Stethoscope, LineChart, Layers, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "@/components/common/Logo";
import { Role } from "@/components/layout/DashboardLayout";

const patientItems = [
  { title: "Overview", url: "/dashboard/patient", icon: Home },
  { title: "Virtual Doctor", url: "/dashboard/patient#virtual", icon: Video },
  { title: "History", url: "/dashboard/patient#history", icon: FileHeart },
  { title: "Book Appointment", url: "/dashboard/patient#appointments", icon: CalendarDays },
  { title: "Schemes", url: "/dashboard/patient#schemes", icon: Layers },
  { title: "Notifications", url: "/dashboard/patient#notifications", icon: Bell },
];

const doctorItems = [
  { title: "Overview", url: "/dashboard/doctor", icon: Home },
  { title: "Appointments", url: "/dashboard/doctor#appointments", icon: CalendarDays },
  { title: "Patients", url: "/dashboard/doctor#patients", icon: Users2 },
  { title: "Prescriptions", url: "/dashboard/doctor#prescriptions", icon: Pill },
  { title: "Virtual Consults", url: "/dashboard/doctor#virtual", icon: Video },
  { title: "Earnings", url: "/dashboard/doctor#earnings", icon: LineChart },
];

const hospitalItems = [
  { title: "Overview", url: "/dashboard/hospital", icon: Home },
  { title: "Profile & Services", url: "/dashboard/hospital#profile", icon: Building2 },
  { title: "Schemes & Offers", url: "/dashboard/hospital#schemes", icon: Layers },
  { title: "Appointments", url: "/dashboard/hospital#appointments", icon: CalendarDays },
  { title: "Doctor Roster", url: "/dashboard/hospital#roster", icon: Stethoscope },
  { title: "Reports", url: "/dashboard/hospital#reports", icon: LineChart },
];

function getItems(role: Role) {
  if (role === "doctor") return doctorItems;
  if (role === "hospital") return hospitalItems;
  return patientItems;
}

export default function AppSidebar({ role }: { role: Role }) {
  const location = useLocation();
  const items = getItems(role);

  return (
    <Sidebar className="w-60">
      <SidebarHeader>
        <div className="px-2 py-1"><Logo /></div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{role.charAt(0).toUpperCase() + role.slice(1)} Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={({isActive}) => isActive || location.hash && item.url.endsWith(location.hash) ? "bg-muted text-primary font-medium" : "hover:bg-muted/50"}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
