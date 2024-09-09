import Container from "@/Container/Container";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";

const BottomHeader = () => {
  const menus = [
    {
      title: "all",
      link: "/all",
      icon: <BiMenuAltRight />,
    },

    {
      title: "today's deals",
      link: "/today's deals",
    },
    {
      title: "customer service",
      link: "/customer-service",
    },
    {
      title: "registry",
      link: "/registry",
    },
    {
      title: "gift cards",
      link: "/gift cards",
    },
    {
      title: "sell",
      link: "/sell",
    },
    {
      title: "log out",
      link: "/log out",
    },
  ];
  return (
    <Container>
      <div className="flex items-center gap-4 bg-black/90 px-6 py-2 text-white">
        {menus?.map((menu, index) => (
          <Link key={index} href={menu?.link} className="capitalize">
            <p className="flex items-center gap-2 font-semibold">
              <span className="text-lg">{menu?.icon}</span>
              {menu?.title}
            </p>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default BottomHeader;
