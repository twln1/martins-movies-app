"use client";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { usePathname } from "next/navigation";
import CustomLink from "@/app/components/Buttons/CustomLink";

const BreadcrumbComponent: React.FC = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <div className="flex flex-col h-full gap-y-2 justify-center text-white">
      <h2 className="text-lg font-bold leading-none">{pathSegments[pathSegments.length - 1] || "Home"}</h2>

      <Breadcrumbs aria-label="breadcrumb" separator={<span className="text-white">/</span>}>
        <CustomLink href="/" text="Home" />
        {pathSegments.map((segment, index) => (
          <CustomLink key={index} href={`/${pathSegments.slice(0, index + 1).join("/")}`} text={segment} />
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbComponent;
