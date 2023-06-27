import React, { useContext, useState } from "react";

// icons
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiWallet3Line,
} from "react-icons/ri";
// import headless ui
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseProvider";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price Range (any)",
    },
    {
      value: "10000 - 120000",
    },
    {
      value: "120000 - 240000",
    },
    {
      value: "11000 - 20000",
    },
    {
      value: "10000 - 20000",
    },
    {
      value: "50000 - 60000",
    },
    {
      value: "40000 - 40000",
    },
    {
      value: "10000 - 20000",
    },
  ];

  return (
    <Menu as="div" className="drop-down relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
        <RiWallet3Line className="dropdown-icon-primary"></RiWallet3Line>
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose Price Range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-primary"></RiArrowUpSLine>
        ) : (
          <RiArrowDownSLine className="dropdown-icon-primary"></RiArrowDownSLine>
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
