import { create } from "zustand";

interface DashState {
  current: string;
  setCurrent: (current: string) => void;
  userName: string;
  userEmail: string;
  userProfile: string;
  setUserDetails: () => void;
}

export const useDashStore = create<DashState>((set, get) => ({
  current: "video",
  setCurrent: (current) => set({ current }),
  userName: "",
  userEmail: "",
  userProfile: "",
  setUserDetails: () => {
    console.log("Setting user details");
  },
}));
