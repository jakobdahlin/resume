"use client"

import * as React from "react"
import {
  Bot,
  ChevronRight,
  Code2,
  Database,
  Frame,
  GalleryVerticalEnd,
  GitBranch,
  LifeBuoy,
  Map,
  PieChart,
  Search,
  Send,
  Settings2,
  Sparkles,
  SquareTerminal,
  Zap,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// Sample data for the sidebar
const data = {
  user: {
    name: "Jakob Dahlin",
    email: "jakob.dahlin@gmail.com",
    avatar: "/JDPortrait.jpg",
  },
  teams: [
    {
      name: "Orbit",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "DevTeam Alpha",
      logo: Bot,
      plan: "Startup",
    },
    {
      name: "Innovation Lab",
      logo: Sparkles,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
          badge: "New",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Web Applications",
          url: "#",
          badge: "12",
        },
        {
          title: "Mobile Apps",
          url: "#",
          badge: "3",
        },
        {
          title: "APIs & Services",
          url: "#",
          badge: "8",
        },
        {
          title: "Templates",
          url: "#",
        },
      ],
    },
    {
      title: "Development",
      url: "#",
      icon: Code2,
      items: [
        {
          title: "Code Editor",
          url: "#",
        },
        {
          title: "Version Control",
          url: "#",
          icon: GitBranch,
        },
        {
          title: "CI/CD Pipeline",
          url: "#",
          badge: "Running",
        },
        {
          title: "Testing Suite",
          url: "#",
        },
      ],
    },
    {
      title: "Infrastructure",
      url: "#",
      icon: Database,
      items: [
        {
          title: "Servers",
          url: "#",
          badge: "24",
        },
        {
          title: "Databases",
          url: "#",
          badge: "6",
        },
        {
          title: "Monitoring",
          url: "#",
        },
        {
          title: "Logs",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      url: "#",
      icon: Frame,
      status: "active",
    },
    {
      name: "Mobile Banking App",
      url: "#",
      icon: PieChart,
      status: "development",
    },
    {
      name: "Analytics Dashboard",
      url: "#",
      icon: Map,
      status: "planning",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeTeam, setActiveTeam] = React.useState(data.teams[0])

  return (
    <div className="bg-black/30 backdrop-blur-md h-[700px] w-full border border-white/50 rounded-xl justify-center items-center mx-auto p-2">
<SidebarHeader>
        <SidebarMenu>
        <SidebarMenuItem className="!mt-0 !pt-0 !mb-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <activeTeam.logo className="size-5" />
                  </div>
                  <div className="grid flex-1 text-left text-lg leading-tight">
                    <span className="truncate font-semibold text-md">{activeTeam.name}</span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              
            </DropdownMenu>
        </SidebarMenuItem>
        </SidebarMenu>

        <form>
            <SidebarGroup className="py-0">
                <SidebarGroupContent className="relative">
                    <Label htmlFor="search" className="sr-only">
                    Search
                    </Label>
                <SidebarInput id="search"
                placeholder="Search projects, files..."
                className="pl-8 bg-transparent border border-white/50 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg"
                />
            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none text-white opacity-50" />
                 </SidebarGroupContent>
            </SidebarGroup>
        </form>
</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md">Platform</SidebarGroupLabel>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                <SidebarMenuItem className="text-white/50 hover:text-white transform duration-200">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title} className="text-white/50 hover:text-white transform duration-200">
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              {subItem.icon && <subItem.icon />}
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>

                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarGroupLabel className="text-md">Recent Projects</SidebarGroupLabel>
          <SidebarMenu>
            {data.projects.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild className="text-white/50 hover:text-white transition duration-200">
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction showOnHover>
                      <div
                        className={`size-2 rounded-full ${
                          item.status === "active"
                            ? "bg-green-500"
                            : item.status === "development"
                              ? "bg-yellow-500"
                              : "bg-gray-400"
                        }`}
                      />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 rounded-lg" side="bottom" align="end">
                    <DropdownMenuItem>
                      <Zap className="text-muted-foreground" />
                      <span>Quick Deploy</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <GitBranch className="text-muted-foreground" />
                      <span>View Repository</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings2 className="text-muted-foreground" />
                      <span>Project Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="sm">
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      

<SidebarMenuButton
size="lg"
className="data-[state=open]:bg-sidebar-accent 
data-[state=open]:text-sidebar-accent-foreground"
>
    <Avatar className="h-8 w-8 rounded-full">
        <AvatarImage src={data.user.avatar || "/placeholder.svg"} alt={data.user.name} />
        <AvatarFallback className="rounded-full text-black">AC</AvatarFallback>
    </Avatar>
    <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{data.user.name}</span>
        <span className="truncate text-xs">{data.user.email}</span>
    </div>
</SidebarMenuButton>

    </div>
  )
}
