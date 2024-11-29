import { create } from "zustand";
import { getGenerations } from "../actions/actions";

export interface Generation {
  id: string;
  created_by: string;
  credits_user: number;
  timestamp: string;
  media_uri: string;
  type: string;
  meta: {
    prompt: string;
    dimensions: string;
    model_id: string;
    negative_prompt: string;
    batch_size: number;
  };
}

interface GenerationState {
  generations: Generation[];
  loading: boolean;
  error: string;
  recent_generations: Generation[];
  favorite_generations: Generation[];
  sortOrder: "newest" | "oldest";
  setSortOrder: (sortOrder: "newest" | "oldest") => void;
  getGen: () => void;
  sort: (type: string) => void;
}

export const useGenerationStore = create<GenerationState>((set, get) => ({
  generations: [],
  loading: false,
  error: "",
  recent_generations: [],
  favorite_generations: [],
  sortOrder: "newest",
  setSortOrder: (sortOrder) => set({ sortOrder }),
  getGen: async () => {
    set({ loading: true });
    const res = await getGenerations();
    if (res) {
      set({ generations: res });
      set({ recent_generations: res });
      set({
        favorite_generations: res.filter(
          (gen: Generation) => true /*Need to change this */,
        ),
      });
      set({ loading: false });
    } else {
      set({ error: "Error fetching generations" });
      set({ loading: false });
    }
  },
  sort: (type) => {
    if (type === "newest") {
      set({
        generations: get().generations.sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
        ),
      });
    } else if (type === "oldest") {
      set({
        generations: get().generations.sort(
          (a, b) =>
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
        ),
      });
    }
  },
}));
