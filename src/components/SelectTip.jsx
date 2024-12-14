import { useState } from "react";

function SelectTip({ handleTipAmount }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      <div
        className={`${activeIndex === 0 ? "bg-#26C2AE text-#00474B" : "bg-#00474B text-white"} flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none transition-colors hover:bg-[#9FE8DF] hover:text-#00474B`}
        onClick={() => {
          setActiveIndex(0);
          handleTipAmount(0.05);
        }}
      >
        5%
      </div>
      <div
        className={`${activeIndex === 1 ? "bg-#26C2AE text-#00474B" : "bg-#00474B text-white"} flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none transition-colors hover:bg-[#9FE8DF] hover:text-#00474B`}
        onClick={() => {
          setActiveIndex(1);
          handleTipAmount(0.1);
        }}
      >
        10%
      </div>
      <div
        className={`${activeIndex === 2 ? "bg-#26C2AE text-#00474B" : "bg-#00474B text-white"} flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none transition-colors hover:bg-[#9FE8DF] hover:text-#00474B`}
        onClick={() => {
          setActiveIndex(2);
          handleTipAmount(0.15);
        }}
      >
        15%
      </div>
      <div
        className={`${activeIndex === 3 ? "bg-#26C2AE text-#00474B" : "bg-#00474B text-white"} flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none transition-colors hover:bg-[#9FE8DF] hover:text-#00474B`}
        onClick={() => {
          setActiveIndex(3);
          handleTipAmount(0.25);
        }}
      >
        25%
      </div>
      <div
        className={`${activeIndex === 4 ? "bg-#26C2AE text-#00474B" : "bg-#00474B text-white"} flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none transition-colors hover:bg-[#9FE8DF] hover:text-#00474B`}
        onClick={() => {
          setActiveIndex(4);
          handleTipAmount(0.5);
        }}
      >
        50%
      </div>
      <div>
        <input
          type="text"
          className={`${activeIndex === 5 ? "border-#26C2AE" : "border-transparent"} h-12 w-full rounded-[5px] border-2 bg-#F3F9FA px-3 text-right text-2xl leading-none text-#00474B caret-#26C2AE outline-none placeholder:text-center placeholder:text-[#547878]`}
          placeholder="Custom"
          onFocus={() => {
            setActiveIndex(5);
          }}
          onChange={(e) => {
            handleTipAmount(e.target.value / 100);
          }}
        />
      </div>
    </div>
  );
}
export default SelectTip;
