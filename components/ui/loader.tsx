import { Loader2 } from "lucide-react";
import { clsx } from "clsx";

export const Loader = ({
  size,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  return <Loader2 className={clsx("anmiate-spin", className)} size={size} />;
};
