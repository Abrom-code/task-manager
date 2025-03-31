import React, { useEffect, useState } from "react";
import imgLogo from "../../assets/image.png";
import { MdDashboard, MdOutlineAddTask } from "react-icons/md";
import { BiLogOut, BiMenu, BiTask } from "react-icons/bi";
import { Link } from "react-router";
import { BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

function DashNav() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const activeButton = useSelector((state) => state.ui.activeNav);

  const handleActiveButton = (text) => {
    dispatch(uiActions.toggleActiveNav(text));
    setIsOpen(false);
  };

  let active = " text-green-600";
  let listClass =
    " flex items-center  cursor-pointer gap-4 hover:bg-gray-300 hover:text-green-600 w-full p-1 py-2 font-medium rounded  transition duration-300 border dark:hover:bg-gray-700";

  return (
    <>
      <BiMenu
        onClick={() => setIsOpen((prev) => !prev)}
        className=" sm:hidden cursor-pointer fixed z-50 top-3.5 size-8 "
      />
      <div
        id="sidebar"
        className={` h-[450px] fixed sm:relative flex flex-col sm:w-1/3 md:w-1/4 lg:w-1/5 
  bg-gray-100 shadow-sm rounded-e-2xl p-4 items-center gap-6 dark:bg-[#323232d8] 
  transition-transform duration-300 ${
    isOpen ? "translate-x-0 z-10" : "-translate-x-full sm:translate-x-0"
  }`}
      >
        <BsX
          size={30}
          onClick={() => setIsOpen(false)}
          className=" sm:hidden absolute top-1 right-1 cursor-pointer"
        />
        <div className="  flex flex-col gap-0.5 items-center">
          <div className=" w-20 h-20  rounded-full border-2 border-green-600 overflow-hidden">
            <img className=" w-full h-full p-0.5 rounded-full" src={imgLogo} />
          </div>
          <p className=" text-green-600">Admin</p>
          <h2 className=" font-bold">MIKE</h2>
          <p className="  text-gray-600 dark:text-gray-400">test@test.com</p>
        </div>
        <div className=" self-start w-full ">
          <div className=" flex flex-col gap-2 w-full ">
            <Link to={""}>
              <div
                onClick={() => handleActiveButton("dashboard")}
                className={listClass + (activeButton === "dashboard" && active)}
              >
                <MdDashboard />
                <p>Dashboard</p>
              </div>
            </Link>
            <Link to={"tasks"}>
              <div
                onClick={() => handleActiveButton("manage")}
                className={listClass + (activeButton === "manage" && active)}
              >
                <BiTask />
                <span>Manage Tasks</span>
              </div>
            </Link>
            <Link to={"newtask"}>
              <div
                onClick={() => handleActiveButton("create")}
                className={listClass + (activeButton === "create" && active)}
              >
                <MdOutlineAddTask />
                <span>Create Task</span>
              </div>
            </Link>
            <div
              onClick={() => handleActiveButton("logout")}
              className={listClass + (activeButton === "logout" && active)}
            >
              <BiLogOut />
              <span> Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashNav;
