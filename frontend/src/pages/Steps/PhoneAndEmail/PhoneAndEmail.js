import StepEmail from "./StepEmail";
import StepPhone from "./StepPhone";
import { useState } from "react";

const steps = {
  phone: StepPhone,
  email: StepEmail,
};

const PhoneAndEmail = ({ onClick }) => {
  const [step, setStep] = useState("phone");
  const Type = steps[step];

  return (
    <>
      <div className="flex items-center justify-end w-11/12 sm:w-11/12 md:w-2/3 lg:w-1/2 mb-8">
        <button
          onClick={() => setStep("phone")}
          className={`p-2  outline-none border-none rounded-md mr-4 h-16 w-16 flex items-center justify-center transition-all duration-200 ease-in-out ${
            step === "phone" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <img src="/images/phone-white.png" alt="phone" />
        </button>
        <button
          onClick={() => setStep("email")}
          className={`p-2  outline-none border-none rounded-md  h-16 w-16 flex items-center justify-center transition-all duration-200 ease-in-out ${
            step === "email" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <img src="/images/mail-white.png" alt="email" />
        </button>
      </div>
      <Type onClick={onClick} />
    </>
  );
};

export default PhoneAndEmail;
