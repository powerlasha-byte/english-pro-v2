"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/app/lib/supabase/client";

import {
  registerSchema,
  RegisterFormData,
} from "@/app/lib/validations/register";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    setAuthError(null);
    setSuccessMessage(null);

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      setSuccessMessage(
        "Account created successfully! Please check your email to verify your account."
      );

      form.reset();

setTimeout(() => {
  window.location.href = "/login";
}, 3000);


    } catch (error) {
      setAuthError("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    ...form,
    onSubmit,
    loading,
    authError,
    successMessage,
  };
}