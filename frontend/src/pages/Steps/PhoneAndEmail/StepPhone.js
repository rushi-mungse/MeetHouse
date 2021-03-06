import { useState } from "react";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import toast from "react-hot-toast";
import { sendOtp } from "../../../http";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../store/slices/authSlice";

const StepPhone = ({ onClick }) => {
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();

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
    try {
      const { data } = await sendOtp({ userPhoneNumber: phone });
      console.log(data);
      dispatch(setOtp({ phone: data.phone, hash: data.hashedOtp }));
      onClick();
    } catch (error) {
      return toast.error(error.message);
    }
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
