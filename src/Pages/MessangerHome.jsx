import MessangerNav from "../Components/MessangerNav";
import MessengerBody from "../Components/MessengerBody";

const MessangerHome = () => {
  return (
    <div>
      <div className="container mx-auto h-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <MessangerNav />
              <MessengerBody/>
      </div>
    </div>
  );
};

export default MessangerHome;
