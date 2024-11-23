import { redirect } from "next/navigation";
import { auth } from "@/auth";
import DashboardPage from "./c";

interface PageProps {
  params: {
    c: string;
  };
}

export default async function Dashboard({ params }: PageProps) {
  const session = await auth();
  const { c } = params;
  if (!session?.user.jwt) {
    redirect(`/auth/login`);
  }

  return <DashboardPage page={c} />;
}
