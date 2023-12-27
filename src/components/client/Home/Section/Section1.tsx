import React from "react";

const Section1 = () => {
  return (
    <div className="bg-gradient-to-b from-[rgb(63,63,255)] to-[rgb(0,24,158)] pb-20">
      <div className="d:w-[1100px] p:w-auto mx-2 d:mx-auto text-white">
        <div className="grid d:grid-cols-12 p:grid-cols-1">
          <div className="col-span-11">
            <h2 className="uppercase font-bold text-[40px] text-[rgb(3,237,166)]">
              TAXI Mai Linh Vĩnh Long
            </h2>
            <div className="w-full grid d:grid-cols-6 p:grid-cols-1">
              <div className="col-span-3 bg-white text-black flex items-center">
                <div className="px-10 py-5">
                  <p className="text-[18px]">Giải Pháp Di Chuyển Tiết Kiệm</p>
                  <p className="text-[35px] font-semibold">
                    Tổng Đài <br /> Taxi Nhanh 24/7 Giá Rẻ Vĩnh Long
                  </p>
                  <p className="font-light">
                    Taxi Vĩnh Long - Phục vụ đưa đón khách tại Long Hồ, Mang
                    Thít, Vũng Liêm, Tam Bình, Trà Ôn, Bình Minh, Bình Tân Vĩnh
                    Long.
                  </p>
                  <div className="flex py-5">
                    <div
                      className="flashing flex px-6 py-2 text-white rounded-full cursor-pointer"
                      onClick={() => window.open("tel:0585649649", "_self")}
                    >
                      <p>Gọi 0585 649 649</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 h-[550px] relative ">
                <img
                  src="
              https://w.ladicdn.com/s800x850/5f9990415e45a60fdae9ffff/hinh-chup-5-20220913152550.jpg"
                  alt="section1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute -right-10 top-1 bottom-1 flex items-center">
                  <div className="flex flex-col gap-5 ">
                    <div className="w-[200px] h-[200px]  border-4 border-white">
                      <img
                        src="https://w.ladicdn.com/s550x550/5f9990415e45a60fdae9ffff/85-20220906134858.jpg"
                        alt="section1"
                        className="w-full h-full"
                      />
                    </div>

                    <div className="w-[200px] h-[200px]  border-4 border-white">
                      <img
                        src="https://w.ladicdn.com/s550x550/5f9990415e45a60fdae9ffff/63-20220906134842.jpg"
                        alt="section1"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p:hidden d:block">
            <div className="bg-[url(https://w.ladicdn.com/s400x400/5f9990415e45a60fdae9ffff/2-20220913172848.png)] h-[88px] w-[88px] bg-center bg-contain "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
