import React from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    let navigate = useNavigate()
    const hanleSubmit = async (e) => { navigate('/')}
  
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/a18e83f5-fe0f-431e-8dc5-ddc45abb3da1/VN-en-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold ml-9">Sign In</h1>
              <form
               onSubmit={hanleSubmit}
                className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-slate-100 text-black"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-slate-100  text-black"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />

                <button className="bg-red-500 py-3 my-6 font-bold rounded">
                  Sign In
                </button>
                <div className="flex justify-between items-center">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Helps?</p>
                </div>
                <br />

                <p>Already subscribed to Netflix? </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
