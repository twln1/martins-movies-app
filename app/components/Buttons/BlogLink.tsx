import CustomLink from "@/app/components/Buttons/CustomLink";

export default function BlogLink({ title, date, url }: { title: string; date: string; url: string }) {
  return (
    <div className="mb-4">
      <p className=" ">
        <CustomLink text={title} href={url} />
      </p>
      <p className="text-gray-400 text-sm">{date}</p>
    </div>
  );
}
