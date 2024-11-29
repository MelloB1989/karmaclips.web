import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Download, Maximize } from "lucide-react";
import { Generation } from "@/app/states/generations";

interface GenerationCardProps {
  generation: Generation;
}

export function GenerationCard({ generation }: GenerationCardProps) {
  const handleDownload = () => {
    // Implement download logic here
    console.log("Downloading image:", generation.media_uri);
  };

  const handleView = () => {
    // Implement view logic here
    console.log("Viewing image:", generation.media_uri);
  };

  const handleToggleFavorite = () => {
    // Implement toggle favorite logic here
    console.log("Toggling favorite for image:", generation.id);
  };

  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={generation.media_uri}
            alt={`AI Generation ${generation.id}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-2 left-2 text-xs text-gray-300">
              {new Date(generation.timestamp).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 flex justify-between bg-gray-800">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleFavorite}
          className="hover:bg-gray-700"
        >
          <Heart
            className={
              generation.id ? "fill-green-500 text-green-500" : "text-gray-400"
            }
          />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDownload}
          className="hover:bg-gray-700"
        >
          <Download className="text-gray-400" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleView}
          className="hover:bg-gray-700"
        >
          <Maximize className="text-gray-400" />
        </Button>
      </CardFooter>
    </Card>
  );
}
