import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const StepPhone = ({ onClick }) => {
  return (
    <Card heading="Enter Your Phone Number." img="phone" backButton={true}>
      <Input placeholder={"Enter phone number."} />
      <p className="mb-4 text-center text-gray-400">
        Enter your phone number for register your account in this service.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepPhone;
