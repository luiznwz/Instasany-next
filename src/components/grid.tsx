import { ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
  className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {
  const defaultClass = "w-full mx-auto max-w-grid px-3";
  return <div className={defaultClass}>{children}</div>;
}
