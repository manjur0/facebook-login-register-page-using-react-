

const SingleUser = () => {
    return (
      <div>
        <div className="card card-side bg-black mt-2 shadow-xl cursor-pointer">
          <figure>
            <div className="avatar p-2 mt-12 mx-4  online ">
              <div className="w-12 h-12   rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </figure>
          <div className=" mt-7 ">
            <h2 className="card-title">Monwer Khan!</h2>
            <p>You have a message.</p>
          </div>
        </div>
        <div className="card card-side bg-black mt-2 shadow-xl cursor-pointer">
          <figure>
            <div className="avatar p-2 mt-12 mx-4  online ">
              <div className="w-12 h-12   rounded-full">
                <img src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&amp;w=256&amp;q=75" />
              </div>
            </div>
          </figure>
          <div className=" mt-7 ">
            <h2 className="card-title">Rahul Khan!</h2>
            <p>You have a message.</p>
          </div>
        </div>
      </div>
    );
};

export default SingleUser;