import {
  Bed,
  Briefcase,
  Wrench,
  PencilRuler,
  Layers,
  CookingPot,
  Droplets,
} from "lucide-react";
import { cn } from "@/lib/cn";

const iconMap = {
  "home-bedding": Bed,
  travel: Briefcase,
  hardware: Wrench,
  stationery: PencilRuler,
  rugs: Layers,
  kitchenware: CookingPot,
  bathroom: Droplets,
} as const;

export function CategoryIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = iconMap[slug as keyof typeof iconMap] ?? Layers;
  return <Icon className={cn("h-6 w-6", className)} strokeWidth={1.5} />;
}
