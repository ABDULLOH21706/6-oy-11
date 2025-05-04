import React from "react";
import Card from "./card";
import { useAxiosGet } from "../../hooks/useAxios";

const HomeComponent = () => {
  const { data, loading } = useAxiosGet({ url: "/products" });
  return (
    <div className="w-[90%] m-auto">
      <h1>Products: </h1>

      <div className="flex flex-wrap justify-start w-[100%] gap-5">
        {data.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
