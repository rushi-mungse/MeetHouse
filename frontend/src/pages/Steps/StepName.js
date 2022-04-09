import { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";

const StepName = ({ onClick }) => {
  const [name, setName] = useState();
  const getName = (e) => {
    setName(e.target.value);
  };

  return (
    <Card heading="What's your name?" img="google-emoji" backButton={true}>
      <Input placeholder={"Enter your name"} onChange={getName} />
      <p className="mb-4 text-center text-gray-400 w-4/5">
        Name is an informal term for a word or phrase that designates a person,
        place, or thing.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepName;
