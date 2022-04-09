import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { setUsername } from "../../store/slices/activateSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";

const StepUsername = ({ onClick }) => {
  const { username } = useSelector((state) => state.activate);
  const [userName, setUserName] = useState(username);
  const dispatch = useDispatch();

  const getUsername = (e) => {
    setUserName(e.target.value);
  };
  const submit = () => {
    if (!userName) return toast.error("Please enter username");
    dispatch(setUsername(userName));
    onClick();
  };
  return (
    <Card
      heading="Enter unique username 🚀 "
      img="google-emoji"
      backButton={true}
    >
      <Input
        placeholder={"Enter username."}
        onChange={getUsername}
        value={userName}
      />
      <p className="mb-4 text-center text-gray-400">
        Enter unique username you want.
      </p>
      <em className="text-orange-600 mb-4"> Happy Journey!</em>
      <Button onClick={submit} />
    </Card>
  );
};

export default StepUsername;
