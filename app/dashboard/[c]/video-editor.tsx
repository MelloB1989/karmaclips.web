import React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Type,
  Image,
  Wand2,
} from "lucide-react";

export default function VideoEditor() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Video Editor</h1>

      {/* Video Preview */}
      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
        <video className="w-full h-full" controls>
          <source src="/placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Timeline */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm">00:00</span>
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="w-full mx-4"
          />
          <span className="text-sm">05:00</span>
        </div>
        <div className="flex justify-center space-x-2">
          <Button size="icon" variant="outline">
            <SkipBack className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Play className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Pause className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Editing Options */}
      <Tabs defaultValue="transitions" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transitions">Transitions</TabsTrigger>
          <TabsTrigger value="text">Text Overlay</TabsTrigger>
          <TabsTrigger value="filters">Filters</TabsTrigger>
        </TabsList>

        <TabsContent value="transitions" className="space-y-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Transition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fade">Fade</SelectItem>
              <SelectItem value="dissolve">Dissolve</SelectItem>
              <SelectItem value="wipe">Wipe</SelectItem>
              <SelectItem value="slide">Slide</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Label htmlFor="duration">Duration:</Label>
            <Input
              id="duration"
              type="number"
              placeholder="Seconds"
              className="w-24"
            />
          </div>
          <Button>Apply Transition</Button>
        </TabsContent>

        <TabsContent value="text" className="space-y-4">
          <Input placeholder="Enter text overlay" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="font-size">Font Size</Label>
              <Input id="font-size" type="number" placeholder="px" />
            </div>
            <div>
              <Label htmlFor="font-color">Font Color</Label>
              <Input id="font-color" type="color" />
            </div>
          </div>
          <Button>Add Text Overlay</Button>
        </TabsContent>

        <TabsContent value="filters" className="space-y-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grayscale">Grayscale</SelectItem>
              <SelectItem value="sepia">Sepia</SelectItem>
              <SelectItem value="blur">Blur</SelectItem>
              <SelectItem value="brightness">Brightness</SelectItem>
            </SelectContent>
          </Select>
          <Slider defaultValue={[50]} max={100} step={1} />
          <Button>Apply Filter</Button>
        </TabsContent>
      </Tabs>

      {/* Timeline Tracks */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
          <ChevronRight className="h-4 w-4" />
          <span>Video Track</span>
        </div>
        <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
          <ChevronRight className="h-4 w-4" />
          <Type className="h-4 w-4" />
          <span>Text Overlay Track</span>
        </div>
        <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded">
          <ChevronRight className="h-4 w-4" />
          <Wand2 className="h-4 w-4" />
          <span>Effects Track</span>
        </div>
      </div>
    </div>
  );
}
