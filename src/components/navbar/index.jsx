import React from "react";
import "../../index.css";
import { Button } from "antd";
import { Heart, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-[90%] m-auto py-4">
      <div className="">
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <Heart className="text-[16px]" />
          Saralanganlar
        </div>
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          <ShoppingBag className="text-[16px]" />
          Savat
        </div>
      </div>
    </header>
  );
};

export default Navbar;
