import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "space-y-3",
        isCenter && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className={cn("text-base text-slate-600", isCenter && "mx-auto")}>{description}</p>
      ) : null}
    </div>
  );
}
