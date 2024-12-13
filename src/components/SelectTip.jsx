function SelectTip() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      <div className="flex h-12 cursor-pointer items-center justify-center rounded-[5px] bg-#00474B text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF] hover:text-#00474B">
        5%
      </div>
      <div className="flex h-12 cursor-pointer items-center justify-center rounded-[5px] bg-#00474B text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF] hover:text-#00474B">
        10%
      </div>
      <div className="flex h-12 cursor-pointer items-center justify-center rounded-[5px] bg-#00474B text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF] hover:text-#00474B">
        15%
      </div>
      <div className="flex h-12 cursor-pointer items-center justify-center rounded-[5px] bg-#00474B text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF] hover:text-#00474B">
        25%
      </div>
      <div className="flex h-12 cursor-pointer items-center justify-center rounded-[5px] bg-#00474B text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF] hover:text-#00474B">
        50%
      </div>
      <div>
        <input
          type="text"
          className="h-12 w-full rounded-[5px] bg-#F3F9FA px-3 text-right text-2xl leading-none text-#00474B caret-#26C2AE outline-none outline-transparent placeholder:text-center placeholder:text-[#547878]"
          placeholder="Custom"
        />
      </div>
    </div>
  );
}
export default SelectTip;
