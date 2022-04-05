import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

const StepOtp = ({ onClick }) => {
  return (
    <Card heading="Conformation Your Account." img="lock" backButton={true}>
      <Input placeholder={"Enter the opt"} />
      <p className="mb-4 text-center text-gray-400">
        Enter OTP texted to you for conformation your account.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepOtp;
