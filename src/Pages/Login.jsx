import Form from "../Components/Form";
import MessangerHome from "./MessangerHome";

const Login = () => {
  return (
    <div className=" w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-2 justify-center  ">
      {/* massenger login page create  */}
      {/* left div  */}
      <div className="mt-[35%]  h-screen ">
        <img
          className="w-[60%]  "
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt=""
        />
        <p className="w-[80%] text-left px-10 font-bold text-xl">
          Facebook helps you connect and share <br /> with the people in your
          life.
        </p>
      </div>
      {/* right div  */}
      <div>
        <Form />
      </div>
      
    </div>
  );
};

export default Login;
