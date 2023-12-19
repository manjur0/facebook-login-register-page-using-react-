import { NavLink } from "react-router-dom";

const Form = () => {
  return (
    <div className=" mt-24 bg-white rounded-lg">
      <section>
        <div className="flex items-center justify-center bg-[#fff] rounded-lg shadow-lg  px-4 py-10 sm:px-6 sm:py-16 lg:px-8 ">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    />
                    <div className="flex items-center justify-between mt-2 ">
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        Forgot password?
                      </a>
                      <p className="text-sm font-semibold text-black ">
                        Don't have an account?
                        <span className="text-[#1877F2]">
                          <NavLink to="./signup"> SingUp</NavLink>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className=" inline-flex w-full items-center justify-center rounded-md bg-[#119F16] px-3.5 py-2.5 font-semibold leading-7 text-white "
                  >
                    Log In
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
