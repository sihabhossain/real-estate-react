import React, { useContext, useState } from "react";

// icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
// import headless ui
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseProvider";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="drop-down relative">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
        <RiMapPinLine className="dropdown-icon-primary"></RiMapPinLine>
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select Your Place</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-primary"></RiArrowUpSLine>
          ) : (
            <RiArrowDownSLine className="dropdown-icon-primary"></RiArrowDownSLine>
          )}
        </div>
      </Menu.Button>
    </Menu>
  );
};

export default CountryDropdown;
