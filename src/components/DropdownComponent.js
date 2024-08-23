import { useState } from "react";
import Image from 'next/image';
import PlusIcon from "../../src/app/images/plus.png";
import MinusIcon from "../../src/app/images/minus.png";

const DropdownComponent = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const handlePlusClick = () => {
    setDropdownVisible(!isDropdownVisible);
    if (isDropdownVisible) {
      setHovered(false); // Reset hover state when closing dropdown
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="w-full border-b border-[#A8EB12] text-[#A8EB12] relative fontPara">
      <div
        className={`flex flex-col transition-colors duration-300 ${
          isHovered ? "bg-[#A8EB12] text-[#074292]" : "bg-transparent text-[#A8EB12]"
        } cursor-pointer`}
        onClick={handlePlusClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center p-4 border-b-2 border-transparent m-10">
          <div className="dropdownHead flex gap-12 text-[20px] font-sm">
            <span>01</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </div>
          <div className="dropplus cursor-pointer">
            <Image
              src={isDropdownVisible ? MinusIcon : PlusIcon}
              alt={isDropdownVisible ? "Minus" : "Plus"}
              width={24}  // Specify actual width
              height={24} // Specify actual height
            />
          </div>
        </div>
        {isDropdownVisible && (
          <p className="droppara mt-0 text-[#074292] ml-28 m-auto text-[20px]">
            These vehicles are specially designed and equipped for use by police departments.
          </p>
        )}
      </div>
    </div>
  );
};

export default DropdownComponent;
