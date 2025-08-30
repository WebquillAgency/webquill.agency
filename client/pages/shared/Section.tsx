import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export default function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section {...props} className={cn("relative overflow-hidden", className)} />;
}
