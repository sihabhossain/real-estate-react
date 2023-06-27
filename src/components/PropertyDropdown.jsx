import React, { useContext, useState } from "react";

// icons
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Fill } from "react-icons/ri";
// import headless ui
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseProvider";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="drop-down relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
        <RiHome5Fill className="dropdown-icon-primary"></RiHome5Fill>
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Property type</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-primary"></RiArrowUpSLine>
        ) : (
          <RiArrowDownSLine className="dropdown-icon-primary"></RiArrowDownSLine>
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
