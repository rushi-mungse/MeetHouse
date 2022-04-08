import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../store/slices/authSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { verifyOtp } from "../../http";

const StepOtp = () => {
  const [otp, setOtp] = useState();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const dispatch = useDispatch();

  const getOtp = (e) => {
    setOtp(e.target.value);
  };

  const submit = async () => {
    if (!otp) return toast.error("Please enter otp.");
    if (otp.length !== 4) return toast.error("Enter valid otp.");
    const { data } = await verifyOtp({ otp, phone, hash });
    dispatch(setAuth(data));
    return toast.success("Your account verified.");
  };

  return (
    <Card heading="Conformation Your Account." img="lock" backButton={true}>
      <Input placeholder={"Enter the opt"} onChange={getOtp} />
      <p className="mb-4 text-center text-gray-400">
        Enter OTP texted to you for conformation your account.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={submit} />
    </Card>
  );
};

export default StepOtp;
