import { GenerationsGrid } from "@/components/dash/generations/generation-grid";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
export default function GenerationsPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white-900 min-h-screen text-gray-950">
      <div className="relative w-full h-100 mb-8 overflow-hidden rounded-lg">
        <Image
          src="/kc2.jpeg"
          width={1200}
          height={100}
          alt="AI Image Generator Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-4xl font-bold mb-2">Karma AI Image Studio</h1>
          <p className="text-lg">
            Create stunning images with AI-powered tools
          </p>
        </div>
        <button className="absolute top-4 right-4 text-sm text-white/80 hover:text-white flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm transition-colors">
          Learn more
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <GenerationsGrid />
    </div>
  );
}
