"use server";
import axios from "axios";
import { config } from "@/config";
import { auth } from "@/auth";

export async function registerUser(
  email: string,
  password: string,
  name: string,
) {
  try {
    const response = await axios.post(
      `${config.api}/${config.api_v}/auth/register`,
      {
        email,
        password,
        name,
      },
    );
    return response.data;
  } catch (e) {
    console.error("API Error:", e);
    return { type: "error", error: "Email already taken" };
  }
}

export async function createImage(
  model: string,
  prompt: string,
  negative_prompt: string,
  height: number,
  width: number,
  batch_size: number,
) {
  const session = await auth();
  if (!session?.user.jwt) {
    return null;
  }
  try {
    const response = await axios.post(
      `${config.api}/${config.api_v}/gen/image`,
      {
        model,
        prompt,
        negative_prompt,
        height,
        width,
        batch_size,
      },
      {
        headers: {
          Authorization: `Bearer ${session.user.jwt}`,
        },
      },
    );
    const data = response.data;
    console.log(data.data);
    if (response.status === 200) return data.data;
  } catch (e) {
    console.error("API Error:", e);
    return { type: "error", error: "Error creating image" };
  }
}

export async function getJob(jobId: string) {
  const session = await auth();
  if (!session?.user.jwt) {
    return null;
  }
  try {
    const response = await axios.get(
      `${config.api}/${config.api_v}/gen/job/${jobId}`,
      {
        headers: {
          Authorization: `Bearer ${session.user.jwt}`,
        },
      },
    );
    const data = response.data;
    if (response.status === 200) return data.data;
  } catch (e) {
    console.error("API Error:", e);
    return { type: "error", error: "Error creating image" };
  }
}

export async function getGenerations() {
  const session = await auth();
  if (!session?.user.jwt) {
    return null;
  }
  try {
    const response = await axios.get(
      `${config.api}/${config.api_v}/generations`,
      {
        headers: {
          Authorization: `Bearer ${session.user.jwt}`,
        },
      },
    );
    const data = response.data;
    if (response.status === 200) return data.data;
  } catch (e) {
    console.error("API Error:", e);
    return { type: "error", error: "Error creating image" };
  }
}
