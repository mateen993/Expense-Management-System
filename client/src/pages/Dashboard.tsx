import React, { useState } from "react";
import { BsArrowLeftShort, BsFillPersonFill } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineBarChart,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
const Dashboard: React.FC = () => {
    
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="flex ">
      <div
        className={`pt-8 p-5 ${
          open ? "w-[200px]" : "w-20"
        } duration-300 h-screen shadow-lg rounded-r-lg bg-yellow-500 relative`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={`bg-white cursor-pointer ${
            open ? "" : "rotate-[180deg]"
          } duration-300 text-orange-400 text-3xl rounded-full absolute -right-3 top-9 border-2 border-orange-400 transition-all `}
        />
        <div className="flex h-[92%] items-start justify-start flex-col gap-y-4">
          <div className="hover:border-l-2 hover:border-l-black  cursor-pointer hover:scale-105 duration-150 inline-flex items-center">
            <AiOutlineHome className="text-4xl" />
            <h1
              className={`text-bold ${
                open ? "scale-1" : "hidden"
              }  font-semibold ml-2   `}
            >
              {" "}
              Home{" "}
            </h1>
          </div>
          <div className="inline-flex items-center">
            <AiOutlineBarChart className="text-4xl" />
            <h1
              className={`text-bold ${
                open ? "scale-1" : "scale-0"
              }  font-semibold ml-2   `}
            >
              {" "}
              Analytics{" "}
            </h1>
          </div>{" "}
          <div className="mt-auto flex flex-col items-start justify-start gap-y-4">
          <div className="inline-flex items-center">
              <BsFillPersonFill className="text-4xl" />
              <h1
                className={`text-bold ${
                  open ? "scale-1" : "scale-0"
                }  font-semibold ml-2   `}
              >
                {" "}
                Profile{" "}
              </h1>
            </div>
            <div className="inline-flex items-center">
              <AiOutlineSetting className="text-4xl" />
              <h1
                className={`text-bold ${
                  open ? "scale-1" : "scale-0"
                }  font-semibold ml-2   `}
              >
                {" "}
                Settings{" "}
              </h1>
            </div>
            <div className="inline-flex items-center">
              <AiOutlineLogout className="text-4xl" />
              <h1
                className={`text-bold ${
                  open ? "scale-1" : "scale-0"
                }  font-semibold ml-2   `}
              >
                {" "}
                Logout{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3">Home Page</div>
    </div>
  );
};

export default Dashboard;
