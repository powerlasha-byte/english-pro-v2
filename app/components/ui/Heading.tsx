import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Heading({
  children,
}: Props) {
  return (
    <h1 className="text-3xl font-bold text-white">
      {children}
    </h1>
  );
}