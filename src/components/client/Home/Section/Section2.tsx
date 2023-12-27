import React from "react";
import { PiDiamondsFourFill } from "react-icons/pi";
const Section2 = () => {
  return (
    <div className="bg-[rgb(63,63,255)] py-20">
      <div className="p:w-auto d:w-[1000px] p:mx-2 d:mx-auto text-white flex flex-col justify-center gap-5 items-center">
        <h2 className="text-[30px] font-bold">
          Gọi ngay cho chúng tôi <br /> TAXI Mai Linh Vĩnh Long{" "}
        </h2>
        <p className="text-start font-light w-[652px] mx-auto">
          Với hơn 200 đầu xe trải đều khắp các khu vực, quý khách hàng dễ dàng
          gọi cho mình 1 xe taxi gần nhất trong 5 đến 10 phút. <br />
          100% xe đời mới, quy trình vệ sinh, khử khuẩn hàng ngày - xe luôn
          sạch, thơm, mùi dễ chịu - cảm giác thoải mái như xe nhà. <br />
          Đội ngũ tài xế chuyên nghiệp, vui vẻ - được đào tạo bài bản, thường
          xuyên
        </p>
        <div className="grid p:grid-cols-1 d:grid-cols-3 gap-8">
          <div className="">
            <div className="relative">
              <img
                src="https://w.ladicdn.com/s600x550/5f9990415e45a60fdae9ffff/tong-dai-4-20220922081049-fnf2l.jpg"
                alt="section2"
                className="p:rounded-t-2xl d:rounded-tl-[100px]  h-[240px] w-full"
              />
              <div className="-bottom-8 right-1 left-1 absolute w-full flex justify-center">
                <div className=" text-[50px] p-2 rounded-full  text-[rgb(3,237,166)] bg-white shadow-2xl">
                  <PiDiamondsFourFill />
                </div>
              </div>
            </div>
            <div className="bg-white text-black py-3">
              <div className="p-6 text-center">
                <h2 className="font-normal text-[22px]">TAXI NỘI Ô</h2>
                <p className="font-light">
                  Gọi là có ngay 5 phút, giá cước taxi di chuyển nội ô là
                  15.000/km (xe 4 chỗ), 18.000đ/km (xe 7 chỗ)
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                src="https://w.ladicdn.com/s600x550/5f9990415e45a60fdae9ffff/85-20220906134858.jpg"
                alt="section2"
                className="p:rounded-t-2xl d:rounded-none h-[240px] w-full object-cover"
              />
              <div className="-bottom-8 right-1 left-1 absolute w-full flex justify-center">
                <div className=" text-[50px] p-2 rounded-full  text-[rgb(3,237,166)] bg-white">
                  <PiDiamondsFourFill />
                </div>
              </div>
            </div>
            <div className="bg-[rgb(0,25,158)] text-white py-5 relative">
              <div className="p-6 text-center">
                <h2 className="font-normal text-[22px]">TAXI LIÊN TỈNH</h2>
                <p className="font-light">
                  Hợp đồng đi tỉnh - đặt xe trước 1 ngày ưu đãi 30% giá cước,
                  giảm ngay 50% cước phí lược về (chờ ít hơn 120')
                </p>
              </div>
              <div className="absolute right-1 left-1 -bottom-5 w-full flex justify-center">
                <div className="flex mt-5 ">
                  <div
                    className="flashing flex px-6 py-2 text-white rounded-full cursor-pointer"
                    onClick={() => window.open("tel:0585649649", "_self")}
                  >
                    <p>Gọi 0585 649 649</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                src="https://w.ladicdn.com/s600x550/5f9990415e45a60fdae9ffff/hinhchup4-20220913152550.jpg"
                alt="section2"
                className="p:rounded-t-2xl d:rounded-tr-[100px] h-[240px] w-full"
              />
              <div className="-bottom-8 right-1 left-1 absolute w-full flex justify-center">
                <div className=" text-[50px] p-2 rounded-full  text-[rgb(3,237,166)] bg-white shadow-2xl">
                  <PiDiamondsFourFill />
                </div>
              </div>
            </div>
            <div className="bg-white text-black py-3">
              <div className="p-6 text-center">
                <h2 className="font-normal text-[22px]">TAXI NỘI Ô</h2>
                <p className="font-light">
                  Gọi là có ngay 5 phút, giá cước taxi di chuyển nội ô là
                  15.000/km (xe 4 chỗ), 18.000đ/km (xe 7 chỗ)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
