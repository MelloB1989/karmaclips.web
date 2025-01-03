import { redirect } from "next/navigation";
import { auth } from "@/auth";
import DashboardPage from "./dash";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user.jwt) {
    redirect(`/auth/login`);
  }
  redirect(`/dashboard/video`);

  return <DashboardPage />;
}
