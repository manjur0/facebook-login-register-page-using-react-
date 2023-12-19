import MessengerNavItem from "./MessengerNavItem";

const MessangerNav = () => {
  return (
    <div>
      <div className="navbar bg-black text-white lg:w-[80%] mx-auto rounded-lg shadow-lg">
        <div className="flex flex-1">
          <a className="btn btn-ghost text-3xl  ">Chats</a>
        </div>
              <div className="flex-1  gap-2 justify-start">
          <MessengerNavItem />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessangerNav;
