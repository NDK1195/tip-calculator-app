function Result({ billAmount, numberOfPeople, tipAmount, handleReset }) {
  const tipPerPerson =
    (parseFloat(billAmount) * tipAmount) / parseFloat(numberOfPeople);

  const totalPerPerson =
    parseFloat(billAmount) / parseFloat(numberOfPeople) + tipPerPerson;

  return (
    <div className="w-full max-w-[413px] rounded-[15px] bg-#00474B px-6 pb-6 pt-9 lg:p-10">
      <div className="mb-6 flex items-center justify-between lg:mb-10">
        <div>
          <h2 className="mb-1 text-base leading-none text-white">Tip Amount</h2>
          <p className="text-[13px] leading-none text-#7F9D9F">/ person</p>
        </div>
        <div className="tracking-[-0.667px text-[32px] leading-none text-#26C2AE lg:text-5xl lg:tracking-[-1px]">
          ${tipPerPerson >= 0 ? tipPerPerson.toFixed(2) : "0.00"}
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between lg:mb-[122px]">
        <div>
          <h2 className="mb-1 text-base leading-none text-white">Total</h2>
          <p className="text-[13px] leading-none text-#7F9D9F">/ person</p>
        </div>
        <div className="tracking-[-0.667px text-[32px] leading-none text-#26C2AE lg:text-5xl lg:tracking-[-1px]">
          ${totalPerPerson >= 0 ? totalPerPerson.toFixed(2) : "0.00"}
        </div>
      </div>

      <button
        className={`${tipPerPerson >= 0 && totalPerPerson >= 0 ? "bg-#26C2AE hover:bg-[#9FE8DF]" : "bg-[#0D686D]"} h-12 w-full rounded-[5px] text-center text-xl leading-none text-#00474B transition-colors`}
        onClick={handleReset}
      >
        RESET
      </button>
    </div>
  );
}
export default Result;
