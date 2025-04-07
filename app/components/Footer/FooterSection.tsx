export default function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-2">
      <h3 className="pb-6 font-bold">{title}</h3>
      {children}
    </div>
  );
}
