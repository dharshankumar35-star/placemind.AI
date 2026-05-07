"use client";

import { cn } from "@/lib/utils";
import { Brain, User } from "lucide-react";
import { type ReactNode } from "react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  children?: ReactNode;
  isLoading?: boolean;
}

export function ChatMessage({ role, content, children, isLoading }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex gap-4 py-4",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center",
          isUser
            ? "bg-primary/20 text-primary"
            : "bg-accent/20 text-accent"
        )}
      >
        {isUser ? <User className="h-5 w-5" /> : <Brain className="h-5 w-5" />}
      </div>
      <div
        className={cn(
          "flex-1 max-w-[85%] space-y-3",
          isUser && "flex flex-col items-end"
        )}
      >
        <div
          className={cn(
            "glass-card rounded-2xl px-4 py-3",
            isUser
              ? "bg-primary/10 rounded-tr-sm"
              : "rounded-tl-sm"
          )}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              </div>
              <span className="text-sm text-muted-foreground">Analyzing data...</span>
            </div>
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

interface SQLBlockProps {
  query: string;
}

export function SQLBlock({ query }: SQLBlockProps) {
  return (
    <div className="glass rounded-lg overflow-hidden">
      <div className="px-3 py-1.5 bg-primary/10 border-b border-border">
        <span className="text-xs font-medium text-primary">Generated Query</span>
      </div>
      <pre className="p-3 text-xs text-muted-foreground overflow-x-auto font-mono">
        <code>{query}</code>
      </pre>
    </div>
  );
}

interface InsightCardProps {
  title: string;
  insights: string[];
}

export function InsightCard({ title, insights }: InsightCardProps) {
  return (
    <div className="glass rounded-lg p-4">
      <h4 className="text-sm font-medium text-accent mb-2">{title}</h4>
      <ul className="space-y-1.5">
        {insights.map((insight, idx) => (
          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            {insight}
          </li>
        ))}
      </ul>
    </div>
  );
}
