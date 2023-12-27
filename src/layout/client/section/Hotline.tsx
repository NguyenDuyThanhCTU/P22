import { BiPhoneCall } from "react-icons/bi";

function Hotline() {
  return (
    <div
      className="fixed bottom-7 right-10  box-border flex flex-col gap-5 cursor-pointer"
      onClick={() => {
        window.open("tel:0585649649", "_self");
      }}
    >
      <div>
        <div className="flex items-center">
          <div className="text-black font-normal d:flex p:hidden justify-start items-center rounded-full w-[250px]  h-[60px] bg-white shadow-2xl absolute right-2">
            <span className="ml-5">Hotline: 0585 649 649</span>
          </div>
          <div className="h-14 w-14   call-animation">
            <BiPhoneCall className="text-white text-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotline;
