import React from "react";

export const Card = ({ title, image, pricelist }: any) => {
  return (
    <div
      className={`${
        title === "Taxi Vĩnh Long Đi Cà Mau"
          ? "bg-blue-600 text-white"
          : "bg-white text-black"
      } w-[300px] mx-auto  rounded-lg shadow-lg overflow-hidden `}
    >
      <div className="w-full h-[200px] relative">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full flex items-center justify-center">
          <h3 className="text-white text-[20px]">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        <ul className="text-[15px]">
          {pricelist?.map((item: any, index: any) => (
            <li className="flex justify-between py-2 " key={index}>
              <span>{item.title}</span>
              <span>{item.price} VNĐ</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Section4 = () => {
  const CardItem = [
    {
      title: "Taxi Vĩnh Long Đi Sài Gòn",
      image:
        "https://w.ladicdn.com/s650x550/5f9990415e45a60fdae9ffff/saigon2-20221011012924-8mcpq.jpg",
      pricelist: [
        { title: "4 chỗ - 1 chiều", price: "1.400.000" },
        { title: "7 chỗ - 1 chiều", price: "1.600.000" },
        { title: "16 chỗ - 1 chiều", price: "1.800.000" },
      ],
    },
    {
      title: "Taxi Vĩnh Long Đi Cà Mau",
      image:
        "https://w.ladicdn.com/s650x550/5f9990415e45a60fdae9ffff/camau1-20221011012924-dcxx_.jpg",
      pricelist: [
        { title: "4 chỗ - 1 chiều", price: "1.500.000" },
        { title: "7 chỗ - 1 chiều", price: "1.700.000" },
        { title: "16 chỗ - 1 chiều", price: "1.900.000" },
      ],
    },
    {
      title: "Taxi Vĩnh Long Đi Cần Thơ",
      image:
        "https://w.ladicdn.com/s650x550/5f9990415e45a60fdae9ffff/can_tho_5-20221011013113-gmres.jpg",
      pricelist: [
        { title: "4 chỗ - 1 chiều", price: "500.000" },
        { title: "7 chỗ - 1 chiều", price: "600.000" },
        { title: "16 chỗ - 1 chiều", price: "800.000" },
      ],
    },
  ];
  return (
    <div className="bg-[rgb(0,25,158)] py-10">
      <div className="w-[1100px] mx-auto  text-center text-white py-10 flex flex-col items-center gap-5">
        <h2 className="text-[30px] font-normal">
          Dịch vụ taxi đường dài giá rẻ <br /> tại Vĩnh Long
        </h2>
        <p className="text-[15px]">
          Đội ngũ tài xế chuyên nghiệp, rành đường - chuyên phục vụ taxi đi
          tỉnh, taxi đường dài. Ưu tiên các dòng xe đời mới, đầy đủ tiện nghi
          cho các hợp đồng đường dài, hợp đồng đi tỉnh, hợp đồng trọn gói
        </p>
        <div className="h-[1px] bg-white w-1/2 my-5"></div>
        <div className="flex gap-7">
          {CardItem.map((item: any, index: any) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <div className="mt-5">
          <div
            className="bg-white text-black py-2 px-5 rounded-lg cursor-pointer"
            onClick={() => window.open("tel:0585649649", "_self")}
          >
            Gọi 0585 649 649
          </div>
        </div>
      </div>
    </div>
  );
};
