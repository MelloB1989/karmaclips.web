"use client";
import { useDashStore } from "@/app/states/dash";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useEffect } from "react";
import VideoEditor from "./video-editor";
import ImageEditor from "./image-editor";
import Converter from "./converter";
import ImageGenerator from "./image-gen";
import VideoGenerator from "./video-gen";
import ScriptGenerator from "./script-gen";
import GenerationsPage from "./generations";

export default function Dash({ page }: { page: string }) {
  const { setCurrent } = useDashStore();

  useEffect(() => {
    if (page) {
      setCurrent(page);
    }
  }, []);

  const Features: {
    [key: string]: {
      name: string;
      component: React.FC;
    };
  } = {
    "video-editor": {
      name: "Video Editor",
      component: VideoEditor,
    },
    "image-editor": {
      name: "Image Editor",
      component: ImageEditor,
    },
    converter: {
      name: "Converter",
      component: Converter,
    },
    "image-gen": {
      name: "Image Generator",
      component: ImageGenerator,
    },
    "video-gen": {
      name: "Video Generator",
      component: VideoGenerator,
    },
    "script-gen": {
      name: "Script Generator",
      component: ScriptGenerator,
    },
    generations: {
      name: "Generations",
      component: GenerationsPage,
    },
  };

  const Component = Features[page]?.component;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Playground</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{Features[page]?.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-center min-h-screen bg-gray-950">
            {Component && <Component />}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
