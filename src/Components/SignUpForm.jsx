import { NavLink } from "react-router-dom";
import { CiCircleQuestion } from "react-icons/ci";

const SignUpForm = () => {
  return (
    <div>
      <form method="POST" className="mt-8">
        <div className="space-y-5">
          <div>
            <label className="text-base font-medium text-gray-900"></label>
            <div className="mt-2 flex gap-3">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Frist Name"
                id="name"
              />
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Last Name"
                id="name"
              />
            </div>
          </div>
          <div>
            <label className="text-base font-medium text-gray-900"></label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email or Phone number"
                id="email"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="text-base font-medium text-gray-900"></label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="flex gap-2 text-base font-sm text-sm text-gray-900">
                <p>Date of birth</p> <CiCircleQuestion />
              </label>
            </div>
            <div className="mt-2 flex justify-between">
              <div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Date
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </select>
              </div>
              <div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Monthe
                  </option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div>
                <select className="select select-bordered">
                  <option disabled selected>
                    Year
                  </option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                  <option>2005</option>
                  <option>2006</option>
                  <option>2007</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                </select>
              </div>
            </div>

            {/* gender filde */}
            <p className="mt-6  font-sm text-sm text-gray-900 ">
              Gender <CiCircleQuestion />
            </p>
            <div className="mt-2 flex justify-between">
              <div className=" align-middle  border-2 border-gray-300  px-2 py-1 rounded-lg ">
                <level>Male </level>
                <input className="w-4 h-4" type="radio" name="radio-1" />
              </div>
              <div className=" align-middle  border-2 border-gray-300  px-2 py-1 rounded-lg ">
                <level>Female </level>
                <input className="w-4 h-4" type="radio" name="radio-1" />
              </div>
              <div className=" align-middle  border-2 border-gray-300  px-2 py-1 rounded-lg ">
                <level>Other </level>
                <input className="w-4 h-4" type="radio" name="radio-1" />
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#119F16] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Create Account{" "}
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
            <p className="mt-4 text-center text-base text-gray-600">
              Already have an account?
              <NavLink
                to="/"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline focus:underline text-blue-500"
              >
                Sign In
              </NavLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
