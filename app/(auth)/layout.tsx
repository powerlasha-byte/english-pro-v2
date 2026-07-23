export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6">
      {children}
    </main>
  );
}