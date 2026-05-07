"use client";

import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";

interface LoadingProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
}

export function Loading({ className, size = "md", text }: LoadingProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <div className="relative">
        <div
          className={cn(
            "rounded-xl bg-primary/20 flex items-center justify-center animate-pulse",
            sizeClasses[size]
          )}
        >
          <Brain className={cn("text-primary", iconSizes[size])} />
        </div>
        <div className="absolute inset-0 rounded-xl border-2 border-primary/30 animate-ping" />
      </div>
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Loading size="lg" text="Loading PlaceMind AI..." />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="glass-card rounded-xl p-5 animate-shimmer">
      <div className="h-4 bg-secondary rounded w-1/3 mb-3" />
      <div className="h-8 bg-secondary rounded w-1/2 mb-2" />
      <div className="h-3 bg-secondary rounded w-2/3" />
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="glass-card rounded-xl p-5 animate-shimmer">
      <div className="h-5 bg-secondary rounded w-1/4 mb-4" />
      <div className="h-64 bg-secondary rounded" />
    </div>
  );
}
