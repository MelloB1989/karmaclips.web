"use client";

import { useEffect, useState } from "react";
import { Loader2, Sparkles, ImageIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Confetti from "react-confetti";
import { useImageGenStore } from "@/app/states/image-gen";
import Image from "next/image";
// import { useWindowSize } from "react-use";

export default function ImageGenerator({ type }: { type: string }) {
  const {
    loading,
    error,
    setPrompt,
    setModel,
    setBatchSize,
    generateImage,
    batch_size,
    setNegativePrompt,
    showConfetti,
    imageURI,
    prompt,
  } = useImageGenStore();
  const [seed, setSeed] = useState("7163666997");
  const [randomSeed, setRandomSeed] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4 max-w-7xl">
        <Button
          variant="ghost"
          className="mb-4 text-green-500 hover:text-green-400 hover:bg-green-900/20"
          onClick={() => {
            window.location.href = "/dashboard/image-gen";
          }}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
        <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
          <Card className="relative aspect-[4/3] bg-gray-900 border-gray-800 overflow-hidden">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto" />
                  <p className="text-sm text-gray-400">
                    Creating your masterpiece...
                  </p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                {imageURI === "" ? (
                  <p>Your generated image will appear here</p>
                ) : (
                  <Image
                    src={imageURI}
                    height={896}
                    width={1152}
                    alt={prompt}
                  />
                )}
              </div>
            )}
          </Card>
          <Card className="p-6 bg-gray-900 border-gray-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setModel("dreamshaper");
                generateImage();
              }}
              className="space-y-6"
            >
              {error !== "" && (
                <div className="p-4 bg-red-500/20 text-red-500 rounded-md">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="prompt">Prompt</Label>
                <div className="relative">
                  <Sparkles className="absolute left-3 top-3 h-5 w-5 text-green-500" />
                  <Input
                    id="prompt"
                    placeholder="A futuristic cityscape with flying cars..."
                    className="pl-10 bg-black border-gray-800"
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="negative-prompt"
                  className="border-gray-800"
                >
                  <AccordionTrigger className="text-gray-400 hover:text-white">
                    Negative Prompt
                  </AccordionTrigger>
                  <AccordionContent>
                    <Input
                      placeholder="low quality, blurry, distorted..."
                      className="bg-black border-gray-800"
                      onChange={(e) => setNegativePrompt(e.target.value)}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="space-y-4">
                <div>
                  <Label>Number of Images ({batch_size})</Label>
                  <Slider
                    value={[batch_size]}
                    onValueChange={([value]) => setBatchSize(value)}
                    max={4}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="seed">Seed</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="seed"
                      value={seed}
                      onChange={(e) => setSeed(e.target.value)}
                      className="bg-black border-gray-800"
                      disabled={randomSeed}
                    />
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="random-seed"
                        checked={randomSeed}
                        onCheckedChange={(checked) =>
                          setRandomSeed(checked as boolean)
                        }
                      />
                      <Label htmlFor="random-seed" className="text-sm">
                        Randomize
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Aspect Ratio</Label>
                  <Select defaultValue="landscape">
                    <SelectTrigger className="bg-black border-gray-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landscape">
                        4:3 landscape (1152×896)
                      </SelectItem>
                      <SelectItem value="portrait">
                        3:4 portrait (896×1152)
                      </SelectItem>
                      <SelectItem value="square">
                        1:1 square (1024×1024)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="advanced" className="border-gray-800">
                    <AccordionTrigger className="text-gray-400 hover:text-white">
                      Advanced Parameters
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Steps</Label>
                        <Input
                          type="number"
                          defaultValue={25}
                          min={1}
                          max={50}
                          className="bg-black border-gray-800"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <ImageIcon className="mr-2 h-5 w-5" />
                    Generate
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
        {showConfetti && (
          <Confetti
            width={1000}
            height={1000}
            recycle={false}
            numberOfPieces={200}
            gravity={0.1}
          />
        )}
      </div>
    </div>
  );
}
