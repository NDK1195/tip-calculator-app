import { useState } from "react";

function Input({ title, icon, id, value, onChange }) {
  const [isError, setIsError] = useState(false);

  function handleError(e) {
    const value = e.target.value;

    if (value === "0" || !value) {
      setIsError(true);
    }
  }

  return (
    <div>
      <div className="mb-[6px] flex items-center justify-between">
        <label htmlFor={id} className="text-base leading-none text-#5E7A7D">
          {title}
        </label>
        {isError && (
          <span className="text-base font-bold leading-none text-[#E17457]">
            Can’t be zero
          </span>
        )}
      </div>
      <div className="relative h-12 w-full rounded-[5px] bg-#F3F9FA">
        <input
          type="text"
          id={id}
          className={`${isError ? "border-[#E17457]" : "border-transparent"} absolute h-12 w-full rounded-[5px] border-2 bg-#F3F9FA px-[17px] py-[6px] text-right text-2xl text-#00474B caret-#26C2AE outline-none focus:border-#26C2AE focus:text-opacity-100`}
          placeholder="0"
          value={value}
          onChange={onChange}
          onBlur={handleError}
          onFocus={() => setIsError(false)}
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
