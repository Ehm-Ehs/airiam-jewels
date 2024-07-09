import React from "react";
import { Logo, Mail, Phone } from "./asset/svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const sections = [
    {
      title: "Company",
      links: [
        { href: "#", label: "About Us" },
        { href: "#", label: "Careers" },
        { href: "#", label: "Press" },
        { href: "#", label: "Blog" },
      ],
    },
    {
      title: "Shop",
      links: [
        { href: "#", label: "Shop All" },
        { href: "#", label: "Shop New Arrivals" },
        { href: "#", label: "Shop Best Sellers" },
        { href: "#", label: "Shop Sale" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "#", label: "Contact Us" },
        { href: "#", label: "FAQ" },
        { href: "#", label: "Shipping" },
        { href: "#", label: "Returns" },
      ],
    },
    {
      title: "Explore",
      links: [
        { href: "#", label: "Home" },
        { href: "#", label: "Testimonials" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { href: "#", label: "Facebook" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "Twitter" },
        { href: "#", label: "Pinterest" },
      ],
    },
  ];

  return (
    <footer className="bg-[#FDF5E6] font-sans py-8">
      <div className=" mx-[5%] lg:mx-0 lg:px-[50px]  xxl:px-[100px]">
        <div className="flex py-5 md:py-[50px] lg:py-[100px] flex-wrap gap-8 lg:justify-between md:gap-[60px] ">
          <div className=" mb-8 md:mb-0 px-[10px]">
            <div className="py-[10px]">
            <Link to='/'><Logo /></Link> 
            </div>
            <div className="text-sm">
              <div className="flex  py-4">
                <Mail />
                <a href="mailto:hello@ariamjewels.com" className="">
                  hello@ariamjewels.com
                </a>
              </div>
              <div className="flex">
                <Phone />
                <a href="tel:+23481303914170" className="">
                  +234 813 039 14170
                </a>
              </div>
            </div>
          </div>
          {sections.map((section, index) => (
            <div key={index} className=" mb-8 md:mb-0">
              <h5 className="font-medium text-[32px] mb-4">{section.title}</h5>
              <ul className="">
                {section.links.map((link, linkIndex) => (
                  <li className="pb-4" key={linkIndex}>
                    <a href={link.href} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-custom-gradient my-6"></div>
        <div className=" text-center text-sm">
          <p>Copyright 2024 Ariamjewels.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
