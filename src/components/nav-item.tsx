import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={cn("hover:text-primary transition-colors capitalize", {
        "text-primary font-semibold": pathname.includes(path),
      })}
    >
      <span className="text-yellow-400 me-2"></span>{name}
    </Link>
  );
}
