import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const StepEmail = ({ onClick }) => {
  return (
    <Card heading="Enter the Email Id." img="email-emoji">
      <Input placeholder={"Enter email id."} />
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepEmail;
