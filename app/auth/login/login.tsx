"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/app/states/auth";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function LoginForm() {
  const { setEmail, setPassword, setError, login, loading } = useAuthStore();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const message = params.get("message");
    if (message) {
      setError(message);
      toast.error(message);
    }
    if (error) {
      toast.error(error);
      setError("");
    }
  }, []);
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <ToastContainer />
      <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

      <Card className="relative z-10 mx-auto sm:max-w-sm lg:w-1/2 rounded shadow-lg leading-none">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={login}
              disabled={loading}
            >
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
