import { redirect } from "next/navigation";
import { auth } from "@/auth";
import ImageGen from "./image-gen";

interface PageProps {
  params: {
    c: string;
    g: string;
  };
}

export default async function Dashboard({ params }: PageProps) {
  const session = await auth();
  const { c, g } = params;
  if (!session?.user.jwt) {
    redirect(`/auth/login`);
  }

  if (c === "image-gen") return <ImageGen type={g} />;
  return <div></div>;
}
