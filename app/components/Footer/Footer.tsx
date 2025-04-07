import CustomLink from "@/app/components/Buttons/CustomLink";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import FooterSection from "./FooterSection";
import BlogLink from "@/app/components/Buttons/BlogLink";
import SocialIcon from "@/app/components/Buttons/SocialIcons";

export default function Footer() {
  const footerLinks = [
    { text: "Link one", href: "#" },
    { text: "Link two", href: "#" },
    { text: "Link three", href: "#" },
    { text: "Link four", href: "#" },
  ];

  const blogPosts = [
    { title: "Latest Movie", date: "Jan 13, 2025", url: "#" },
    { title: "Latest Movie", date: "Jan 13, 2025", url: "#" },
    { title: "Latest Movie", date: "Jan 13, 2025", url: "#" },
  ];

  return (
    <footer className="bg-[#3e4555] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="row">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterSection title="Title">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque. Praesentium suscipit
                provident explicabo dignissimos nostrum numquam deserunt earum accusantium et fugit.
              </p>
            </FooterSection>

            <FooterSection title="Useful Links">
              <ul className="flex flex-col space-y-2">
                {footerLinks.map(({ text, href }, idx) => (
                  <li key={idx}>
                    <CustomLink animateTranslate href={href} text={text} />
                  </li>
                ))}
              </ul>
            </FooterSection>

            <FooterSection title="Latest News">
              {blogPosts.map(({ title, date, url }, idx) => (
                <BlogLink key={idx} title={title} date={date} url={url} />
              ))}
            </FooterSection>

            <FooterSection title="Follow Us">
              <div className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque.
              </div>
              <div className="space-x-6">
                <SocialIcon href="#">
                  <InstagramIcon style={{ fontSize: "16px" }} />
                </SocialIcon>
                <SocialIcon href="#">
                  <FacebookIcon style={{ fontSize: "16px" }} />
                </SocialIcon>
                <SocialIcon href="#">
                  <XIcon style={{ fontSize: "16px" }} />
                </SocialIcon>
              </div>
            </FooterSection>
          </div>
        </div>
      </div>

      <hr className="text-white opacity-25" />

      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8 flex flex-col sm:flex-row md:justify-between md:items-center">
          <div className="space-x-4 text-center sm:text-left">
            {footerLinks.map(({ text, href }, idx) => (
              <CustomLink key={idx} href={href} text={text} />
            ))}
          </div>

          <div className="text-center mt-4 sm:mt-0">All Rights Reserved Martins Movies</div>
        </div>
      </div>
    </footer>
  );
}
