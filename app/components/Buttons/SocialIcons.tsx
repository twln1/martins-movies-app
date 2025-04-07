export default function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="border border-white rounded-full p-2 hover:bg-white hover:text-[#3e4555] transition inline-flex items-center justify-center"
    >
      {children}
    </a>
  );
}
