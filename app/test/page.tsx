import { createClient } from "@/app/lib/supabase/server";

export default async function TestPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <div style={{ padding: 40 }}>
      <h1>Supabase Test</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}