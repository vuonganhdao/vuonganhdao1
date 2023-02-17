import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContex";

function Navbar(props) {
  let { user } = UserAuth();
  return (
    <div className="flex item-center justify-between p-4 z-[100] w-full absolute position: fixed ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          PHIMMOI
        </h1>
      </Link>
      {user?.email ? (
        <div>
          
        </div>
      ) : (
        <div>
          <Link to="/Login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/SignUp">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
