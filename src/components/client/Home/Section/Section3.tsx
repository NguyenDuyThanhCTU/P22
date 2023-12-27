import React from "react";

const Section3 = () => {
  return (
    <div className="bg-[rgb(9,19,51)] py-20">
      <div className="d:w-[1100px] p:w-auto mx-2 d:mx-auto text-white relative ">
        <div className="grid p:grid-cols-1 d:grid-cols-10 items-center">
          <div className="col-span-6 grid p:grid-cols-1 d:grid-cols-10 gap-20">
            <div className="col-span-3 w-64 h-64 overflow-hidden rounded-full bg-[url(https://w.ladicdn.com/s700x600/5f9990415e45a60fdae9ffff/mazda3-20220922075129-abh4a.jpg)] bg-bottom bg-cover bg-no-repeat"></div>
            <div className="col-span-7 w-[400px] flex items-center  h-[400px] overflow-hidden rounded-full bg-[url(https://w.ladicdn.com/s850x750/5f9990415e45a60fdae9ffff/xe-hoa-2-20220922081049-fhpwh.jpg)] bg-bottom bg-cover bg-no-repeat">
              <div className="w-[400px] h-[400px] justify-center flex items-end bg-gradient-to-b from-[rgba(8,58,145,0.09)] to-[rgb(63,63,255)]">
                <p className="mb-20 text-center mx-2 text-[14px]">
                  100% xe đời mới, lái xe chuyên nghiệp, phục vụ <br /> chu đáo,
                  tận tâm
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-5">
            <div className="col-span-3  w-72 h-72 overflow-hidden rounded-full bg-[url(https://w.ladicdn.com/s650x600/5f9990415e45a60fdae9ffff/xe-hoa4-20220922081049-yk856.jpg)] bg-bottom bg-cover bg-no-repeat"></div>

            <div className="col-span-4 ml-10 w-72 h-72 overflow-hidden rounded-full bg-[url(https://w.ladicdn.com/s700x600/5f9990415e45a60fdae9ffff/xe_du-lich_gia-dinh-20220922081049-5so-5.jpg)] bg-bottom bg-cover bg-no-repeat"></div>
          </div>
        </div>
        <div className="absolute top-0">
          <div className="font-bold text-[25px] border-l-4 pl-5 border-lime-500">
            Hợp đồng xe 4,7,16 chỗ <br />
            trọn gói giá rẻ <br />
            tại Vĩnh Long
            <div className="h-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
