"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Button,
  Card,
  Heading,
  Input,
  Text,
} from "@/app/components/ui";

import { useRegister } from "@/app/hooks/useRegister";

export default function RegisterPage() {
  const {
    onSubmit,
    loading,
    authError,
    successMessage,
  } = useRegister();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10">
      <Card>
        <Card.Header>
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl shadow-lg shadow-blue-600/30">
              📚
            </div>
          </div>

          <Heading>Create Account ✨</Heading>

          <div className="mt-3">
            <Text>
              Start your English learning journey today.
            </Text>
          </div>
        </Card.Header>

        <Card.Content>

          {authError && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
              <p className="text-sm text-red-400">
                {authError}
              </p>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 p-3">
              <p className="text-sm text-green-400">
                {successMessage}
              </p>
            </div>
          )}

          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

        </Card.Content>

        <Card.Footer>

          <Button
            fullWidth
            onClick={() =>
              onSubmit(
                email,
                password,
                confirmPassword
              )
            }
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account ✨"}
          </Button>

          <div className="mt-5 text-center">
            <Text>
              Already have an account?
            </Text>

            <Link
              href="/login"
              className="mt-2 block font-semibold text-blue-400 hover:text-blue-300 transition"
            >
              Sign In
            </Link>
          </div>

        </Card.Footer>
      </Card>
    </main>
  );
}