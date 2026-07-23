"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/app/lib/supabase/client";

export function useLogout() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();

    router.replace("/login");
    router.refresh();
  };

  return {
    handleLogout,
  };
}