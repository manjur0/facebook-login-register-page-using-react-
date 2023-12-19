import MessegingPeople from "./MessegingPeople";
import { FaCircleArrowRight } from "react-icons/fa6";


const MessengerBody = () => {
  return (
    <div className="w-[80%]  mx-auto  grid grid-cols-4  justify-between  ">
      <div className="col-span-1 bg-[#1D232A] border-r-2  text-white rounded-l-lg p-4 px-4 ">
        <input
          type="text"
          placeholder="Search Your friends"
          className="input input-bordered bg-black input-sm w-full max-w-xs"
        />
        <MessegingPeople />
      </div>
      <div className="col-span-2 bg-[#252627] text-white  p-4 px-4 text-center flex justify-center align-middle ">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs bg-black text-white mt-[90%]"
        />
        <button className="btn btn-primary text-lg ml-4 mt-[90%] hover:scale-105">
          Send <FaCircleArrowRight />
        </button>
      </div>
      <div className="col-span-1 bg-[#000000] text-white rounded-r-lg p-4 px-4">
        right side div
      </div>
    </div>
  );
};

export default MessengerBody;
