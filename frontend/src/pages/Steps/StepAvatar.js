import Card from "../../components/Card";
import Button from "../../components/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../store/slices/activateSlice";
import toast from "react-hot-toast";
import { activate } from "../../http";
import { setAuth } from "../../store/slices/authSlice";
import Loader from "../../layouts/Loader";

const StepAvatar = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("/images/monkey-avatar.png");
  const { avatar, username, name } = useSelector((state) => state.activate);
  const [loading, setLoading] = useState(false);

  const captureImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  };

  const submit = async () => {
    try {
      setLoading(true);
      const { data } = await activate({ avatar, username, name });
      if (data.auth) {
        dispatch(setAuth(data));
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loader />;
  return (
    <Card heading="Choose Profile Picture" img="monkey-emoji" backButton={true}>
      <p className="my-4">How's this?</p>
      <div className=" rounded-full border-4 border-orange-400 overflow-hidden p-2">
        <img src={image} alt="monkey" className="h-44 w-44 object-cover" />
      </div>
      <label
        htmlFor="avatar"
        className="mt-2 mb-4 text-orange-500 hover:text-orange-700 transition-all duration-300 cursor-pointer"
      >
        Select profile picture?
      </label>
      <input
        type="file"
        id="avatar"
        className="hidden "
        onChange={captureImg}
      />
      <Button onClick={submit} />
    </Card>
  );
};

export default StepAvatar;
