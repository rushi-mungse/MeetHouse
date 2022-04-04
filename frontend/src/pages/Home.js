import Button from "../components/Button";
import Card from "../components/Card";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const redirectToAuthenticate = () => {
    navigate("/authenticate");
  };

  return (
    <div className="flex items-center justify-center screen-height bg-gradient-to-r from-pink-500 to-violet-500">
      <Card heading="Welcome to MeetHouse!" img="logo">
        <p className="my-4 text-center text-lg text-gray-600">
          This is the voice chat application. You can create
          <strong> Open, Public or Private</strong> rooms for voice
          cummunication on any topic. It's usefull for students, teachers,
          bussiness for communication in group.
        </p>
        <Button
          text="Get Username"
          img="arrow-forward"
          onClick={redirectToAuthenticate}
        />
      </Card>
    </div>
  );
};

export default Home;
