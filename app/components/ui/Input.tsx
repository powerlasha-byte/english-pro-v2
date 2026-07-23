"use client";

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium text-slate-200">
            {label}
          </label>
        )}

        <div
          className={cn(
            "flex items-center rounded-xl border bg-slate-900 transition",
            error
              ? "border-red-500"
              : "border-slate-700 focus-within:border-blue-500",
            "focus-within:ring-2 focus-within:ring-blue-500/20"
          )}
        >
          {leftIcon && (
            <div className="pl-4 text-slate-400">{leftIcon}</div>
          )}

          <input
            ref={ref}
            className={cn(
              "h-12 w-full bg-transparent px-4 text-white outline-none",
              "placeholder:text-slate-500",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="pr-4 text-slate-400">{rightIcon}</div>
          )}
        </div>

        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-slate-400">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;