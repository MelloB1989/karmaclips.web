import { create } from "zustand";
import { createImage, getJob } from "../actions/actions";

interface ImageGenState {
  prompt: string;
  setPrompt: (prompt: string) => void;
  model: string;
  setModel: (model: string) => void;
  negativePrompt: string;
  setNegativePrompt: (negativePrompt: string) => void;
  batch_size: number;
  setBatchSize: (batch_size: number) => void;
  height: number;
  setHeight: (height: number) => void;
  width: number;
  setWidth: (width: number) => void;
  imageURI: string;
  generateImage: () => void;
  error: string;
  setError: (error: string) => void;
  loading: boolean;
}

export const useImageGenStore = create<ImageGenState>((set, get) => ({
  prompt: "",
  setPrompt: (prompt) => set({ prompt }),
  model: "",
  setModel: (model) => set({ model }),
  negativePrompt: "",
  setNegativePrompt: (negativePrompt) => set({ negativePrompt }),
  batch_size: 1,
  setBatchSize: (batch_size) => set({ batch_size }),
  height: 1024,
  setHeight: (height) => set({ height }),
  width: 1024,
  setWidth: (width) => set({ width }),
  imageURI: "",
  error: "",
  setError: (error) => set({ error }),
  loading: false,
  generateImage: async () => {
    set({ loading: true });
    const { prompt, model, height, width, batch_size } = get();
    if (prompt === "") {
      set({ error: "Please enter a prompt" });
      set({ loading: false });
      return;
    }
    const jobId = await createImage(model, prompt, height, width, batch_size);
    var status = "pending";
    while (status !== "completed") {
      setTimeout(async () => {
        const jobData = await getJob(jobId);
        status = jobData.status;
        if (status === "completed") {
          set({ imageURI: jobData.image_uri });
          set({ loading: false });
          return;
        }
      }, 5000);
    }
    return;
  },
}));
