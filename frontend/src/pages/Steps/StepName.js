import { useState } from "react";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../store/slices/activateSlice";
import toast from "react-hot-toast";

const StepName = ({ onClick }) => {
  const { name } = useSelector((state) => state.activate);
  const [fullName, setfullName] = useState(name);
  const dispatch = useDispatch();
  const getName = (e) => {
    setfullName(e.target.value);
  };

  const submit = () => {
    if (!fullName) return toast.error("Please enter your name");
    dispatch(setName(fullName));
    onClick();
  };

  return (
    <Card heading="What's your name?" img="google-emoji" backButton={true}>
      <Input
        placeholder={"Enter your name"}
        onChange={getName}
        value={fullName}
      />
      <p className="mb-4 text-center text-gray-400 w-4/5">
        Name is an informal term for a word or phrase that designates a person,
        place, or thing.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={submit} />
    </Card>
  );
};

export default StepName;
