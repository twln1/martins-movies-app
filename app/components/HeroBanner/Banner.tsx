import BasicBreadcrumbs from "./BasicBreadCrumbs";

export default function Banner() {
  return (
    <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
      <div className="absolute inset-0  z-10 bg-gradient-to-r from-fuchsia-700 to-[#9c27b0] opacity-25" />

      <div className="h-full flex items-center text-white">
        <div className="container mx-auto z-20 px-4 sm:px-6 lg:px-8">
          <BasicBreadcrumbs />
        </div>
      </div>
    </div>
  );
}
