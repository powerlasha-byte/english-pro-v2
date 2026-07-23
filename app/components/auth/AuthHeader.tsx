import { Heading, Text } from "@/app/components/ui";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  color?: string;
}

export default function AuthHeader({
  title,
  subtitle,
  color = "bg-blue-600",
}: AuthHeaderProps) {
  return (
    <>
      <div className="mb-4 flex justify-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color} text-3xl shadow-lg`}
        >
          📚
        </div>
      </div>

      <Heading>{title}</Heading>

      <div className="mt-3">
        <Text>{subtitle}</Text>
      </div>
    </>
  );
}