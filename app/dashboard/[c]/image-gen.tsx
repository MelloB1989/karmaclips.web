import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  User,
  SquareIcon as LogoSquare,
  MountainIcon as Mountains,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AiImageGenerator() {
  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-12">
      <div className="relative w-full h-100 mb-8 overflow-hidden rounded-lg">
        <Image
          src="/kc2.jpeg"
          width={1200}
          height={200}
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

      {/* Character Maker Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Character Maker</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {characterStyles.map((style) => (
            <Card
              key={style.name}
              className="group relative overflow-hidden bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Link href={`/dashboard/image-gen/${style.id}`}>
                {" "}
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                  <Image
                    src={style.image}
                    height={400}
                    width={300}
                    alt={style.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
              <div className="p-4 space-y-2">
                <h3 className="font-medium">
                  <Link href={`/dashboard/image-gen/${style.id}`}>
                    {style.name}
                  </Link>
                </h3>
                <div className="flex gap-2">
                  {style.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800 hover:bg-zinc-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Link href={`/dashboard/image-gen/${style.id}`}>
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge className="bg-white/10 backdrop-blur-sm border-white/20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Generate
                  </Badge>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Logo Maker Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <LogoSquare className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Logo Maker</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {logoStyles.map((style) => (
            <Card
              key={style.name}
              className="group relative overflow-hidden bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={style.image}
                  height={400}
                  width={300}
                  alt={style.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-medium">{style.name}</h3>
                <div className="flex gap-2">
                  {style.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800 hover:bg-zinc-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Badge className="bg-white/10 backdrop-blur-sm border-white/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Generate
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Scene Maker Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Mountains className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Scene Maker</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sceneStyles.map((style) => (
            <Card
              key={style.name}
              className="group relative overflow-hidden bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={style.image}
                  height={400}
                  width={300}
                  alt={style.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-medium">{style.name}</h3>
                <div className="flex gap-2">
                  {style.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-zinc-800 hover:bg-zinc-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Badge className="bg-white/10 backdrop-blur-sm border-white/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Generate
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

const characterStyles = [
  {
    name: "Anime Style",
    id: "anime",
    image: "https://img.getimg.ai/generated/img-ycxbJgrLchZstt42CMWWE.jpeg",
    tags: ["Anime", "2D", "Stylized"],
  },
  {
    name: "Realistic Portrait",
    id: "realism",
    image:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/1dbb9693-4e22-48fd-821d-8120b1ac3aca/5f2d5cdd-6fa4-412d-a0a7-04177bf592c9.png",
    tags: ["3D", "Realistic", "Detailed"],
  },
  {
    name: "Cartoon Style",
    id: "cartoon",
    image: "https://chatai.com/wp-content/uploads/2023/12/2150946439.jpg",
    tags: ["Cartoon", "2D", "Colorful"],
  },
  {
    name: "Pixel Art",
    id: "pixel",
    image: "https://cdn.basedlabs.ai/a8625f9b-ca16-45d7-a48e-d49931cf15ca",
    tags: ["Retro", "8-bit", "Gaming"],
  },
];

const logoStyles = [
  {
    name: "Minimalist",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Clean", "Modern", "Simple"],
  },
  {
    name: "3D Metallic",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["3D", "Glossy", "Premium"],
  },
  {
    name: "Neon Style",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Glowing", "Vibrant", "Dark"],
  },
  {
    name: "Vintage",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Retro", "Classic", "Textured"],
  },
];

const sceneStyles = [
  {
    name: "Fantasy World",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Magic", "Medieval", "Epic"],
  },
  {
    name: "Cyberpunk City",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Futuristic", "Neon", "Urban"],
  },
  {
    name: "Natural Landscape",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Nature", "Realistic", "4K"],
  },
  {
    name: "Abstract Space",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Cosmic", "Surreal", "Artistic"],
  },
];
