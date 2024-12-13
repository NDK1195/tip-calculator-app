function Result() {
  return (
    <div className="w-full max-w-[413px] rounded-[15px] bg-#00474B px-6 pb-6 pt-9 lg:p-10">
      <div className="mb-6 flex items-center justify-between lg:mb-10">
        <div>
          <h2 className="mb-1 text-base leading-none text-white">Tip Amount</h2>
          <p className="text-[13px] leading-none text-#7F9D9F">/ person</p>
        </div>
        <div className="tracking-[-0.667px text-[32px] leading-none text-#26C2AE lg:text-5xl lg:tracking-[-1px]">
          $0.00
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between lg:mb-[122px]">
        <div>
          <h2 className="mb-1 text-base leading-none text-white">Total</h2>
          <p className="text-[13px] leading-none text-#7F9D9F">/ person</p>
        </div>
        <div className="tracking-[-0.667px text-[32px] leading-none text-#26C2AE lg:text-5xl lg:tracking-[-1px]">
          $0.00
        </div>
      </div>

      <button className="h-12 w-full rounded-[5px] bg-#26C2AE text-center text-xl leading-none text-#00474B transition-colors hover:bg-[#9FE8DF]">
        RESET
      </button>
    </div>
  );
}
export default Result;
