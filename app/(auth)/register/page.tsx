"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Button,
  Card,
  Heading,
  Input,
  Text,
} from "@/app/components/ui";

import { useRegister } from "@/app/hooks/useRegister";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    loading,
    authError,
    successMessage,
  } = useRegister();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <Card.Header>
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-3xl shadow-lg shadow-green-600/30">
                🚀
              </div>
            </div>

            <Heading>Create Account</Heading>

            <div className="mt-3">
              <Text>
                Start your English learning journey today.
              </Text>
            </div>
          </Card.Header>

          <Card.Content>
            {successMessage ? (
              <div className="space-y-6 text-center">
                <div className="text-6xl">🎉</div>

                <Heading>Account Created!</Heading>

                <Text>
                  Your account has been created successfully.
                  <br />
                  Please verify your email before signing in.
                </Text>

                <Button
                  fullWidth
                  type="button"
                  onClick={() => router.push("/login")}
                >
                  Go to Sign In
                </Button>
              </div>
            ) : (
              <>
                {authError && (
                  <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                    <p className="text-sm text-red-400">
                      {authError}
                    </p>
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

                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                  error={errors.confirmPassword?.message}
                  {...register("confirmPassword")}
                />
              </>
            )}
          </Card.Content>

          {!successMessage && (
            <Card.Footer>
              <Button
                fullWidth
                type="submit"
                loading={loading}
                rightIcon="→"
              >
                Create Account
              </Button>

              <div className="mt-5 text-center">
                <Text>Already have an account?</Text>

                <Link
                  href="/login"
                  className="mt-2 block font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Sign In
                </Link>
              </div>
            </Card.Footer>
          )}
        </Card>
      </form>
    </main>
  );
}