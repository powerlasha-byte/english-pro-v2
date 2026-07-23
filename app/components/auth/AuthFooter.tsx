import Link from "next/link";
import { Text } from "@/app/components/ui";

interface AuthFooterProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthFooter({
  text,
  linkText,
  href,
}: AuthFooterProps) {
  return (
    <div className="mt-5 text-center">
      <Text>{text}</Text>

      <Link
        href={href}
        className="mt-2 block font-semibold text-blue-400 transition hover:text-blue-300"
      >
        {linkText}
      </Link>
    </div>
  );
}