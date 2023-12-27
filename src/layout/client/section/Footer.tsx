import React from "react";
import { IoHome, IoMailUnread } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLock2Line } from "react-icons/ri";
import { BsCardList } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
const Footer = () => {
  const PolicyItems = [
    {
      label: "Chính sách bảo mật",
      icon: <BsCardList />,
    },
    {
      label: "Điều khoản sử dụng",
      icon: <RiLock2Line />,
    },
    {
      label: "Chính sách hoàn trả & vận chuyển",
      icon: <FaShippingFast />,
    },
    {
      label: "Liên hệ với chúng tôi",
      icon: <MdConnectWithoutContact />,
    },
  ];
  return (
    <div className="bg-[rgb(5,31,77)] text-white">
      <div className="d:w-[1100px] p:w-auto p:mx-2 d:mx-auto pb-5">
        <div className="py-8 grid p:grid-cols-1 gap-10  d:grid-cols-2 ">
          <div>
            <h2 className="font-semibold text-[22px]">
              TAXI Mai Linh Vĩnh Long <br /> Xe Đẹp, Giá Rẻ, Đón Nhanh
            </h2>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex items-center gap-3">
                <IoHome />
                <div>
                  <p>
                    Địa chỉ: 55 phạm Thái bường, Phường 4, Thành Phố Vĩnh Long
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <div>
                  <p>Hotline: 0585 649 649</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <IoMailUnread />
                <div>
                  <p>Email: huynhkhacduy1985@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-[22px]">Dịch vụ khách hàng</h2>
            <div className="grid grid-cols-2">
              {PolicyItems.map((item: any, idx: number) => (
                <div key={idx}>
                  <div className="flex items-start gap-4 py-2">
                    <div className="mt-1 text-[20px]">{item.icon}</div>
                    <div className="">
                      <p>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex">
              <div className="bg-white px-5 flex justify-center rounded-lg">
                <div className="p-2 flex gap-2">
                  <div className="w-14 h-7">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/new%2Fvisa.png?alt=media&token=1831de9e-c925-41cf-821e-7a6ff8be6f16"
                      alt="visa"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-7">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/new%2Fcard.png?alt=media&token=60d14f8a-ed51-46ba-bfe5-0ec0fce7431f"
                      alt="mastercard"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-7">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/target-31b09.appspot.com/o/new%2Flogo.png?alt=media&token=b6efa4ba-3eb0-44b8-9a1a-de2e4db1fbac"
                      alt="gov"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t border-white text-center">
        <div className="flex justify-center text-center px-2 text-[14px]  py-5  ">
          <p className="pr-2">©2023 All Rights reserved ADS Company</p>
          <p className="pl-2 border-l-[1px] border-gray-400">
            Designed by ADS Company
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
