import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { footeSocialLinks, footerLinks } from "../utils/helpers";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full pt-10 mt-8 bg-purple-500">
      <div className="container">
        <div className="grid grid-cols-1 justify-between gap-4 lg:grid-cols-2">
          <Link to="/" className="w-fit h-fit">
            <img
              className="w-[45px] md:w-[60px] h-[45px] md:h-[60px]"
              src="/logo.ico"
            />
          </Link>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-between gap-4">
            {footerLinks.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h4"
                  className="mb-3 font-medium  text-white"
                >
                  {title}
                </Typography>
                {items.map((link, index) => (
                  <li key={link + index + title} className="">
                    <Typography
                      as="a"
                      href={link.href}
                      className="py-1.5 font-normal text-purple-100 transition-colors hover:text-purple-900 flex items-center"
                    >
                      {link.icon}
                      {link.text}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-white py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-purple-100 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">منصة كارت</a>. كل الحقوق
            محفوظه.
          </Typography>
          <div className="flex gap-4 text-purple-100 sm:justify-center">
            {footeSocialLinks.map((link, index) => {
              return (
                <a
                  key={link + index}
                  className="hover:text-purple-800 transition-colors"
                  href={link.href}
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
