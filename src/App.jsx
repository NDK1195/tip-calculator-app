import logo from "./images/logo.svg";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
import Input from "./components/Input";
import Result from "./components/Result";
import SelectTip from "./components/SelectTip";
import { useState } from "react";
function App() {
  const [billAmount, setBillAmount] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState(null);

  function handleBillAmount(e) {
    setBillAmount(e.target.value);
  }

  function handleNumberOfPeople(e) {
    setNumberOfPeople(e.target.value);
  }

  function handleTipAmount(amount) {
    setTipAmount(amount);
  }

  function handleReset() {
    setBillAmount(0);
    setNumberOfPeople(0);
    setTipAmount(0);
  }
  return (
    <div className="min-h-dvh bg-#C5E4E7 pt-[50px] lg:pt-[163px]">
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
            <Input
              title="Bill"
              id="bill"
              icon={iconDollar}
              value={billAmount}
              onChange={handleBillAmount}
            />
            {/* bill */}
            {/* tip % */}
            <div>
              <h2 className="mb-4 text-base leading-none text-#5E7A7D">
                Select Tip %
              </h2>

              {/* select tip */}
              <SelectTip handleTipAmount={handleTipAmount} />
              {/* select tip */}
            </div>
            {/* tip % */}
            {/* number of people */}
            <Input
              title="Number of People"
              id="people"
              icon={iconPerson}
              value={numberOfPeople}
              onChange={handleNumberOfPeople}
            />
            {/* number of people */}
          </div>
          {/* input */}

          {/* result */}
          <Result
            billAmount={billAmount}
            numberOfPeople={numberOfPeople}
            tipAmount={tipAmount}
            handleReset={handleReset}
          />
          {/* result */}
        </div>
      </div>
      {/* main */}
    </div>
  );
}
export default App;
