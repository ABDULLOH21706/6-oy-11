import React, { useState } from "react";
import "../../index.css";
import { Button } from "antd";
import { Heart, ShoppingBag } from "lucide-react";
import logo from "../../assets/img/Icon.png";
import location from "../../assets/img/location.png";
import uz from "../../assets/img/uz.png";
import katalog from "../../assets/img/katalog.png";
import profile from "../../assets/img/profile.png";

const Navbar = () => {
  // Initialize state for view
  const [view, setView] = useState("month");

  const handleViewChange = () => {
    setView((prev) => (prev === "month" ? "year" : "month"));
  };
  return (
    <header className="flex flex-col items-center justify-center w-[100%]">
      <div className="flex items-center justify-between w-[80%] m-auto py-2">
        <div className="flex items-center justify-center gap-[30px]">
          <div className="flex items-center justify-center gap-[5px]">
            <div className="w-[23px]">
              <img src={location} alt="" draggable="false" />
            </div>
            <select className="text-[17px] outline-none font-[400]">
              <option value="1">Toshkent</option>
              <option value="2">Samaraqand</option>
              <option value="3">Xorazm</option>
              <option value="4">Qoqon</option>
            </select>
          </div>
          <div className="flex items-center justify-center gap-[5px]">
            <p className="text-[17px] font-[400] cursor-pointer">
              Topshirish punktlari
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[15px]">
          <span className="text-[16px] text-[#7F4DFF] font-[500] cursor-pointer">
            Sotuvchi bo‘lish
          </span>
          <span className="text-[16px] text-[#7F4DFF] font-[500] cursor-pointer">
            Topshirish punktini ochish
          </span>
          <p className="text-[16px] text-[#4D4F59] font-[500] cursor-pointer">
            Savol-javob
          </p>
          <p className="text-[16px] text-[#4D4F59] font-[500] cursor-pointer">
            Buyurtmalarim
          </p>
          <div className="flex items-center justify-center gap-[5px] cursor-pointer">
            <div className="w-[23px]">
              <img src={uz} alt="" draggable="false" />
            </div>
            <p className="text-[16px] font-[500]">O'zbekcha</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-[80%] m-auto py-4 gap-[30px]">
        <div className="w-[270px] cursor-pointer">
          <img src={logo} alt="" draggable="false" />
        </div>
        <div className="flex items-center justify-center w-[100%] gap-[10px]">
          <button className="flex items-center justify-center gap-[5px] text-[16px] font-[500] text-[#7F4DFF] bg-[#E5E5FF] pr-[13px] rounded-[8px] w-[120px] h-[45px]">
            <div className="w-[30px]">
              <img src={katalog} alt="" draggable="false" />
            </div>
            Katalog
          </button>
          <div className="flex items-center justify-center w-[100%]">
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="w-[80%] h-[45px] outline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[8px]"
              draggable="false"
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <div className="w-[29px]">
              <img src={profile} alt="" draggable="false" />
            </div>
            <p className="text-[16px]">Kirish</p>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <Heart className="text-[16px]" />
            Saralanganlar
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <ShoppingBag className="text-[16px]" />
            Savat
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-[80%] m-auto py-4 gap-[20px] flex-wrap">
        <p>Hafta tovarlari</p>
        <p>Elektronika</p>
        <p>Maishiy texnika</p>
        <p>Kiyim</p>
        <p>Poyabzallar</p>
        <p>Aksessuarlar</p>
        <p>Goʻzallik va parvarish</p>
        <p>Salomatlik</p>
        <p>Uy-roʻzgʻor buyumlari</p>
        <p>Qurilish va taʼmirlash</p>
      </div>
    </header>
  );
};

export default Navbar;
