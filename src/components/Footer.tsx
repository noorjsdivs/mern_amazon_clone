import { logo } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazone_light text-gray-200 flex items-center justify-center gap-4">
      <Image src={logo} alt="logoImg" className="w-24 object-cover" />
      <p className="text-sm -mt-4">
        All right reserved
        <a
          className="ml-2 hover:underline duration-300"
          href=""
          target="_blank"
        >
          @Masum Ahmed
        </a>
      </p>
    </div>
  );
};

export default Footer;
