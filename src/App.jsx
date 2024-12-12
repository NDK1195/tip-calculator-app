import logo from "./images/logo.svg";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
function App() {
  return (
    <div className="bg-#C5E4E7 min-h-dvh pt-[50px] lg:pt-[163px]">
      {/* logo */}
      <h1 className="mb-10 lg:mb-[88px]">
        <img src={logo} alt="logo" className="mx-auto" />
      </h1>
      {/* logo */}

      {/* main */}
      <div className="mx-auto max-w-[920px] rounded-t-[25px] bg-white px-6 py-8 lg:rounded-[25px] lg:pl-12 lg:pr-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* input */}
          <div className="flex w-full flex-col gap-8 lg:gap-10">
            {/* bill */}
            <div>
              <label
                htmlFor="bill"
                className="text-#5E7A7D text-base leading-none"
              >
                Bill
                <div className="bg-#F3F9FA relative mt-[6px] h-12 w-full rounded-[5px]">
                  <input
                    type="text"
                    id="bill"
                    className="text-#00474B bg-#F3F9FA placeholder:text-#00474B caret-#26C2AE absolute right-0 h-12 rounded-[5px] px-[17px] py-[6px] text-right text-2xl outline-none outline-transparent placeholder:opacity-35"
                    placeholder="0"
                  />
                  <img
                    src={iconDollar}
                    alt="icon dollar"
                    className="absolute left-5 top-1/2 -translate-y-1/2"
                  />
                </div>
              </label>
            </div>
            {/* bill */}

            {/* tip % */}
            <div>
              <h2 className="text-#5E7A7D mb-4 text-base leading-none">
                Select Tip %
              </h2>

              {/* select tip */}
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                <div className="bg-#00474B hover:text-#00474B flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF]">
                  5%
                </div>
                <div className="bg-#00474B hover:text-#00474B flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF]">
                  10%
                </div>
                <div className="bg-#00474B hover:text-#00474B flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF]">
                  15%
                </div>
                <div className="bg-#00474B hover:text-#00474B flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF]">
                  25%
                </div>
                <div className="bg-#00474B hover:text-#00474B flex h-12 cursor-pointer items-center justify-center rounded-[5px] text-2xl leading-none text-white transition-colors hover:bg-[#9FE8DF]">
                  50%
                </div>
                <div>
                  <input
                    type="text"
                    className="text-#00474B bg-#F3F9FA caret-#26C2AE h-12 w-full rounded-[5px] px-3 text-right text-2xl leading-none outline-none outline-transparent placeholder:text-center placeholder:text-[#547878]"
                    placeholder="Custom"
                  />
                </div>
              </div>
              {/* select tip */}
            </div>
            {/* tip % */}

            {/* number of people */}
            <div>
              <label
                htmlFor="people"
                className="text-#5E7A7D text-base leading-none"
              >
                Number of People
                <div className="bg-#F3F9FA relative mt-[6px] h-12 w-full rounded-[5px]">
                  <input
                    type="text"
                    id="people"
                    className="text-#00474B bg-#F3F9FA placeholder:text-#00474B caret-#26C2AE absolute right-0 h-12 rounded-[5px] px-[17px] py-[6px] text-right text-2xl outline-none placeholder:opacity-35"
                    placeholder="0"
                  />
                  <img
                    src={iconPerson}
                    alt="icon person"
                    className="absolute left-5 top-1/2 -translate-y-1/2"
                  />
                </div>
              </label>
            </div>
            {/* number of people */}
          </div>
          {/* input */}

          {/* result */}
          <div className="bg-#00474B w-full max-w-[413px] rounded-[15px] px-6 pb-6 pt-9 lg:p-10">
            <div className="mb-6 flex items-center justify-between lg:mb-10">
              <div>
                <h2 className="mb-1 text-base leading-none text-white">
                  Tip Amount
                </h2>
                <p className="text-#7F9D9F text-[13px] leading-none">
                  / person
                </p>
              </div>
              <div className="text-#26C2AE tracking-[-0.667px text-[32px] leading-none lg:text-5xl lg:tracking-[-1px]">
                $0.00
              </div>
            </div>

            <div className="mb-8 flex items-center justify-between lg:mb-[122px]">
              <div>
                <h2 className="mb-1 text-base leading-none text-white">
                  Total
                </h2>
                <p className="text-#7F9D9F text-[13px] leading-none">
                  / person
                </p>
              </div>
              <div className="text-#26C2AE tracking-[-0.667px text-[32px] leading-none lg:text-5xl lg:tracking-[-1px]">
                $0.00
              </div>
            </div>

            <button className="bg-#26C2AE text-#00474B h-12 w-full rounded-[5px] text-center text-xl leading-none transition-colors hover:bg-[#9FE8DF]">
              RESET
            </button>
          </div>
          {/* result */}
        </div>
      </div>
      {/* main */}
    </div>
  );
}
export default App;
