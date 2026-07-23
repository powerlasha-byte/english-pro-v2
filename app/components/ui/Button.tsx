import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/lib/cn";

type Variant = "primary" | "secondary" | "danger" | "ghost";

type Size = "sm" | "md" | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variants = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20",

  secondary:
    "bg-slate-700 hover:bg-slate-600 text-white",

  danger:
    "bg-red-600 hover:bg-red-700 text-white",

  ghost:
    "bg-transparent hover:bg-slate-800 text-slate-200",
};

const sizes = {
  sm: "h-10 px-4 text-sm",

  md: "h-12 px-6 text-base font-semibold",

  lg: "h-14 px-8 text-lg font-semibold",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth,
  loading,
  leftIcon,
  rightIcon,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200",
        "active:scale-95",
        "disabled:cursor-not-allowed disabled:opacity-50",

        variants[variant],
        sizes[size],

        fullWidth && "w-full",

        className
      )}
      {...props}
    >
      {loading ? (
        <span className="animate-spin">⏳</span>
      ) : (
        leftIcon
      )}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  );
}