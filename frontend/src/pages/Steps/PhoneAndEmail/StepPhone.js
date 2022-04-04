import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const StepPhone = ({ onClick }) => {
  return (
    <Card heading="Enter the Phone number." img="phone">
      <Input placeholder={"Enter phone number."} />
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepPhone;
