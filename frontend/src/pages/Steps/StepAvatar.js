import Card from "../../components/Card";
import Button from "../../components/Button";

const StepAvatar = ({ onClick }) => {
  return (
    <Card heading="Choose Profile Picture" img="monkey-emoji" backButton={true}>
      <p className="my-4">How's this?</p>
      <div className=" rounded-full border-2 border-black ">
        <img src="/images/monkey-avatar.png" alt="monkey" className="h-44" />
      </div>
      <label
        htmlFor="avatar"
        className="mt-2 mb-4 text-orange-500 hover:text-orange-700 transition-all duration-300 cursor-pointer"
      >
        Select profile picture?
      </label>
      <input type="file" id="avatar" className="hidden" />
      <Button onClick={onClick} />
    </Card>
  );
};

export default StepAvatar;
