import Link from "next/link";

export default function NavLink({ page, label }: { page: string; label: string }) {
  return (
    <Link href={page} className="navlink px-4">
      {label}
    </Link>
  );
}
