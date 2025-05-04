import { notification, Rate } from "antd";
import React, { useContext, useState } from "react";
import { ShopContext } from "../../../context/shop-context";

const Card = (value) => {
  let { id, title, price, img, description, rate, comment, discount, oyiga } =
    value;
  const { state, dispatch } = useContext(ShopContext);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-[5px] w-[250px] h-[500px] rounded-[9px] relative cursor-pointer hover:">
      <div className="flex items-start justify-center w-full">
        <img
          src={img}
          alt=""
          className="rounded-[9px] transition-transform duration-400 hover:scale-102"
          draggable="false"
        />
        <div className="absolute flex justify-end w-[250px] p-[12px]">
          <button onClick={toggleLike}>
            <i
              className={`fa-heart text-[20px] ${
                liked ? "fa-solid text-red-500" : "fa-regular text-[#bfbfbf]"
              }`}
            ></i>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-[100%] gap-[5px]">
        <div className="w-full">
          <h1 className="text-[15px] w-[100%] h-[50px] overflow-hidden">
            {title}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] gap-[4px]">
          <div className="flex w-[100%] gap-[4px]">
            <Rate count={1} className="text-[10px]" defaultValue={rate} />
            <p className="text-[14px] font-[500]">{rate}</p>
            <code className="text-[14px] font-[400]">({comment} sharxlar)</code>
          </div>
          <div className="flex items-center justify-start w-[100%]">
            <p className="text-[12px] font-[500] pl-[3px] pr-[3px] rounded-[5px] bg-[#FFFF00]">
              {oyiga} so'm/oyiga
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between w-[100%] h-[60px]">
        <div className="flex flex-col items-start justify-center w-[100%]">
          <del className="text-[#8D909A] text-[13px] font-[]">{discount}</del>
          <p className="font-[500]">{price}</p>
        </div>
        <button
          onClick={() => dispatch({ type: "add_product", data: value }) (notification.success({message: "Added product to cart"}))}
          className="flex items-center justify-center p-[5px] cursor-pointer border-[1px] border-[#D7D7D9] hover:bg-[#DEE0E5] rounded-[20px]"
        >
          <svg
            data-v-55f6c8e0=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ui-icon  add-cart-icon"
          >
            <path
              d="M8 10V8H6V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V7H8C8 4.59628 9.95227 3 12 3C14.0575 3 16 4.70556 16 7H19V19.5C19 20.3284 18.3284 21 17.5 21H12.5C12.2239 21 12 20.7761 12 20.5C12 20.2239 12.2239 20 12.5 20H17.5C17.7761 20 18 19.7761 18 19.5V8H16V10H15V8H9V10H8ZM12 4C10.4477 4 9 5.20372 9 7H15C15 5.29444 13.5425 4 12 4Z"
              fill="black"
            ></path>
            <path
              d="M7.5 14C7.77614 14 8 14.2239 8 14.5V17H10.5C10.7761 17 11 17.2239 11 17.5C11 17.7761 10.7761 18 10.5 18H8V20.5C8 20.7761 7.77614 21 7.5 21C7.22386 21 7 20.7761 7 20.5V18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H7V14.5C7 14.2239 7.22386 14 7.5 14Z"
              fill="black"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
