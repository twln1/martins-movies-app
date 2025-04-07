import Link, { LinkProps } from "next/link";

interface CustomLinkProps extends LinkProps {
  text: string;
  animateTranslate?: boolean;
}

export default function CustomLink({ text, animateTranslate = false, ...props }: CustomLinkProps) {
  return (
    <Link
      {...props}
      className={`inline-block text-white hover:text-purple-500 transition-colors duration-300 ${
        animateTranslate ? "transition-transform hover:translate-x-4" : ""
      }`}
    >
      {text}
    </Link>
  );
}
