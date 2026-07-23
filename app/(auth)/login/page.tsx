"use client";

import Link from "next/link";
import {
  Button,
  Card,
  Heading,
  Input,
  Text,
} from "@/app/components/ui";
import { useLogin } from "@/app/hooks/useLogin";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    loading,
    authError,
  } = useLogin();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Card.Header>
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl shadow-lg shadow-blue-600/30">
                📚
              </div>
            </div>

            <Heading>Welcome Back 👋</Heading>

            <div className="mt-3">
              <Text>
                Sign in to continue your English learning journey.
              </Text>
            </div>
          </Card.Header>

          <Card.Content>
            {authError && (
              <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                <p className="text-sm text-red-400">{authError}</p>
              </div>
            )}

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register("password")}
            />

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-400 hover:text-blue-300 transition"
              >
                Forgot Password?
              </Link>
            </div>
          </Card.Content>

          <Card.Footer>
            <Button
              fullWidth
              type="submit"
              rightIcon="→"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In →"}
            </Button>

            <div className="mt-5 text-center">
              <Text>Don't have an account?</Text>

              <Link
                href="/register"
                className="mt-2 block font-semibold text-blue-400 hover:text-blue-300 transition"
              >
                Create Account
              </Link>
            </div>
          </Card.Footer>
        </Card>
      </form>
    </main>
  );
}