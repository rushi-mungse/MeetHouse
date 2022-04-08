import { useState } from "react";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import toast from "react-hot-toast";
import { sendOtp } from "../../../http";

const StepPhone = ({ onClick }) => {
  const [phone, setPhone] = useState();

  const setPhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const submit = async () => {
    if (!phone) {
      return toast.error("Please enter phone number");
    }
    if (phone.length !== 10) {
      return toast.error("Please enter 10 digit phone number");
    }
    const { data } = await sendOtp({ userPhoneNumber: phone });
    console.log(data);
    // onClick();
  };

  return (
    <Card heading="Enter Your Phone Number." img="phone" backButton={true}>
      <Input placeholder={"Enter phone number."} onChange={setPhoneNumber} />
      <p className="mb-4 text-center text-gray-400">
        Enter your phone number for register your account in this service.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={submit} />
    </Card>
  );
};

export default StepPhone;
