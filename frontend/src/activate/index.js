import { useState } from "react";
import StepAvatar from "../pages/Steps/StepAvatar";
import StepUsername from "../pages/Steps/StepUsername";
import StepName from "../pages/Steps/StepName";

const Steps = {
  1: StepName,
  2: StepUsername,
  3: StepAvatar,
};

const Activate = () => {
  const [step, setStep] = useState(1);
  const changeStep = () => {
    setStep(step + 1);
  };
  const Step = Steps[step];
  return (
    <div className="container mx-auto">
      <Step onClick={changeStep} />
    </div>
  );
};

export default Activate;
