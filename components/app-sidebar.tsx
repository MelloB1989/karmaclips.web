"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  File,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  Sparkle,
  SquareTerminal,
  Videotape,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Image Editor",
          url: "/dashboard/image-editor",
        },
        {
          title: "Video Editor",
          url: "/dashboard/video-editor",
        },
        {
          title: "Converter",
          url: "/dashboard/converter",
        },
      ],
    },
    {
      title: "AI",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Image Gen",
          url: "/dashboard/image-gen",
        },
        {
          title: "Video Gen",
          url: "/dashboard/video-gen",
        },
        {
          title: "Script Gen",
          url: "/dashboard/script-gen",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
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
      name: "My Projects",
      url: "#",
      icon: Frame,
    },
    {
      name: "My Generations",
      url: "/dashboard/generations",
      icon: Sparkle,
    },
    {
      name: "My Assets",
      url: "/dashboard/assets",
      icon: File,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Videotape className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">KarmaClips</span>
                  <span className="truncate text-xs">By CoffeeCodes</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
