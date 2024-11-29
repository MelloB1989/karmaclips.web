"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GenerationCard } from "./generation-card";
import { AlertCircle } from "lucide-react";
import { useGenerationStore } from "@/app/states/generations";

export function GenerationsGrid() {
  const {
    sortOrder,
    setSortOrder,
    getGen,
    recent_generations,
    favorite_generations,
    generations,
  } = useGenerationStore();
  useEffect(() => {
    getGen();
  }, []);
  return (
    <div className="space-y-8">
      <div className="flex justify-end mb-4">
        <Select
          onValueChange={(value) => setSortOrder(value as "newest" | "oldest")}
        >
          <SelectTrigger className="w-[180px] bg-gray-800 text-gray-100 border-gray-700">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 text-gray-100 border-gray-700">
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {!(generations.length > 0) ? (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-950 rounded-lg border border-gray-800">
          <AlertCircle className="w-16 h-16 text-green-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-green-500">
            No Generations Yet
          </h2>
          <p className="text-green-400 text-center">
            Start creating amazing AI-generated images to see them here!
          </p>
        </div>
      ) : (
        <>
          {recent_generations.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">
                Recent Generations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recent_generations.map((generation) => (
                  <GenerationCard key={generation.id} generation={generation} />
                ))}
              </div>
            </section>
          )}

          {favorite_generations.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">
                Favorite Generations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorite_generations.map((generation) => (
                  <GenerationCard key={generation.id} generation={generation} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
