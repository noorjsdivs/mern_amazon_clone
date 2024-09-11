import React from 'react';
import Container from './Container';

const Footer = () => {
  const footerData = [
    {
      _id: 2221,
      title: "Get to Know Us",
      listItem: [
        {
          _id: "001",
          listData: [
            "Careers",
            "Blog",
            "About Amazon",
            "Investor Relations",
            "Amazon Devices",
            "Amazon Science",
          ],
        },
      ],
    },
    {
      _id: 2222,
      title: "Make Money with Us",
      listItem: [
        {
          _id: "002",
          listData: [
            "Sell products on Amazon",
            "Sell on Amazon Business",
            "Sell apps on Amazon",
            "Become an Affiliate",
            "Advertise Your Products",
            "Sell Product with Us",
            "Host an Amazon Hub",
            "See More Make Money with Us",
          ],
        },
      ],
    },
    {
      _id: 2223,
      title: "Amazon Payment Products",
      listItem: [
        {
          _id: "003",
          listData: [
            "Amazon Business Card",
            "Shop with Points",
            "Reload Your Balance",
            "Amazon Currency Converter",
          ],
        },
      ],
    },
    {
      _id: 2224,
      title: "Let Us Help You",
      listItem: [
        {
          _id: "004",
          listData: [
            "Amazon and COVID-19",
            "Your Account",
            "Your Orders",
            "Shipping Rates & Policies",
            "Returns & Replacements",
            "Manage Your Content and Devices",
            "Amazon Assistant",
            "FAQ & Help",
          ],
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {footerData.map((section) => (
          <div key={section._id}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul className=''>
              {section.listItem.map((item) =>
                item.listData.map((listItem, index) => (
                  <li key={index} className="text-sm mb-2 hover:underline cursor-pointer">
                    {listItem}
                  </li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
