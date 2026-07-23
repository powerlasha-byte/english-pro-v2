"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/app/lib/supabase/client";

export function useRegister() {
  const router = useRouter();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    setLoading(true);
    setAuthError("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setAuthError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
      setLoading(false);
      return;
    }

    setSuccessMessage(
      "Registration successful! Please check your email."
    );

    setTimeout(() => {
      router.push("/login");
      router.refresh();
    }, 2500);

    setLoading(false);
  };

  return {
    onSubmit,
    loading,
    authError,
    successMessage,
  };
}