import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";

const StepUsername = ({ onClick }) => {
  const getUsername = () => {};
  return (
    <Card
      heading="Enter unique username 🚀 "
      img="google-emoji"
      backButton={true}
    >
      <Input placeholder={"Enter username."} onChange={getUsername} />
      <p className="mb-4 text-center text-gray-400">
        Enter unique username you want.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepUsername;
