import { useState } from "react";
import PhoneAndEmail from "../pages/Steps/PhoneAndEmail/PhoneAndEmail";
import StepOtp from "../pages/Steps/StepOtp";

const Steps = {
  1: PhoneAndEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [step, setStep] = useState(1);
  const changeStep = () => {
    setStep(step + 1);
  };
  const Step = Steps[step];
  return (
    <div className=" flex items-center justify-center screen-height bg-white flex-col">
      <Step onClick={changeStep} />
    </div>
  );
};

export default Authenticate;
