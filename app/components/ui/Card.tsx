import { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}

function Header({ children }: { children: ReactNode }) {
  return (
    <div className="border-b border-slate-800 p-8 text-center">
      {children}
    </div>
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 p-8">
      {children}
    </div>
  );
}

function Footer({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-slate-800 p-8">
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;

export default Card;