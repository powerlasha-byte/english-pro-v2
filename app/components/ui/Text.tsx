import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Text({
  children,
}: Props) {
  return (
    <p className="text-slate-400">
      {children}
    </p>
  );
}