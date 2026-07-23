"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createClient } from "@/app/lib/supabase/client";
import {
  loginSchema,
  LoginFormData,
} from "@/app/lib/validations/auth";

export function useLogin() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setAuthError("");

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("SESSION:", session);

      router.replace("/dashboard");
      router.refresh();
    } catch (err) {
      console.error(err);
      setAuthError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return {
    ...form,
    onSubmit,
    loading,
    authError,
  };
}