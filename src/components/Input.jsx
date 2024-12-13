function Input({ title, icon, id, onClick }) {
  return (
    <div>
      <div className="mb-[6px] flex items-center justify-between">
        <label htmlFor={id} className="text-base leading-none text-#5E7A7D">
          {title}
        </label>
        <span className="hidden text-base font-bold leading-none text-[#E17457]">
          Can’t be zero
        </span>
      </div>
      <div className="relative h-12 w-full rounded-[5px] bg-#F3F9FA">
        <input
          type="text"
          id={id}
          className="absolute h-12 w-full rounded-[5px] bg-#F3F9FA px-[17px] py-[6px] text-right text-2xl text-#00474B caret-#26C2AE outline-2 outline-#26C2AE placeholder:text-#00474B placeholder:opacity-35"
          placeholder="0"
        />
        <img
          src={icon}
          alt="icon dollar"
          className="absolute left-5 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
export default Input;
