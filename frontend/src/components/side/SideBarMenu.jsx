"use client";
import Link from "next/link";
import { useState } from "react";
import { ProfileSvg, ShortArrowIcon, SmallArowIcon } from "@/assets";

const SidebarMenu = (props) => {
  const [open, setOpen] = useState(true);
  const [toogle, setToogle] = useState(false);

  const footer = () => {
    return (
      <div className="absolute left-20 bottom-2">
        <div className="flex content-center w-full grid justify-items-center ">
          <span className="text-white">© WenLock</span>
          <span className="text-white">Power by Conecthus</span>
          <span className="text-white">V 0.0.0</span>
        </div>
      </div>
    );
  };

  const buildIcon = () => {
    return (
      <div
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer -right-4 top-9 rounded-full 
        p-2 
        shadow-lg
        bg-white
        rounded-full
     ${open && "rotate-180"}`}
      >
        <SmallArowIcon />
      </div>
    );
  };

  return (
    <div
      className={` ${
        open ? "w-[500px]" : "w-20 "
      } bg-primary p-5 relative duration-300 h-screen`}
    >
      <div>
        {buildIcon()}
        <div>
          {open && (
            <div>
              <Link href="/">
                <div className="justify-items-start mt-10 ">
                  <span className="text-[40px] font-bold pl-0  text-[#00AAC1]">
                    When
                  </span>
                  <span className="text-[40px] font-bold pl-0 text-white">
                    Lock
                  </span>
                  <span className="text-[40px] font-bold pl-0 text-[#00AAC1]">
                    .
                  </span>
                </div>
              </Link>
            </div>
          )}
          {buildIcon()}
        </div>
        <div>
          <div className="mt-10">
            <div className="flex items-center ">
              <Link
                href="/"
                className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_8363"
                        data-name="Rectangle 8363"
                        width="24"
                        height="24"
                        fill="#fff"
                      />
                    </clipPath>
                  </defs>
                  <g id="Group_48166" data-name="Group 48166" opacity="0.9">
                    <g
                      id="Group_48160"
                      data-name="Group 48160"
                      clipPath="url(#clip-path)"
                    >
                      <path
                        id="Path_35362"
                        data-name="Path 35362"
                        d="M9.984,8.292c0,1.477.015,2.954-.009,4.431a1.341,1.341,0,0,0,.436,1.067c1.985,1.958,3.95,3.935,5.92,5.908.59.591.561.883-.125,1.347A10.023,10.023,0,1,1,8.948,2.793c.757-.152,1.033.068,1.035.846,0,1.551,0,3.1,0,4.653m3.825,11.84c.039-.079.078-.16.117-.241a4.6,4.6,0,0,1-.535-.4c-1.518-1.509-3.017-3.037-4.549-4.53a2.485,2.485,0,0,1-.783-1.924c.02-2.417.009-4.834.005-7.252,0-.226-.039-.452-.067-.757a7.893,7.893,0,0,0-5.252,6.3A7.7,7.7,0,0,0,6.395,19.5a7.86,7.86,0,0,0,7.414.632"
                        fill="#fff"
                      />
                      <path
                        id="Path_35363"
                        data-name="Path 35363"
                        d="M12.086,11.279v-.623q0-4.155,0-8.31c0-.876.217-1.077,1.092-1.028a9.378,9.378,0,0,1,8.857,8.635,4.864,4.864,0,0,1,.011.5c-.011.606-.227.825-.843.826q-3.711.006-7.424,0H12.086m7.92-2.054a14.388,14.388,0,0,0-.479-1.45,7.374,7.374,0,0,0-5.016-4.3c-.317-.086-.54-.094-.538.341.009,1.713,0,3.427.019,5.14,0,.129.213.364.329.366,1.823.017,3.647.005,5.47,0,.05,0,.1-.041.215-.092"
                        fill="#fff"
                      />
                      <path
                        id="Path_35364"
                        data-name="Path 35364"
                        d="M12.886,13.392c.277-.015.452-.033.627-.034q4.293,0,8.586,0a5.346,5.346,0,0,1,.607.037.579.579,0,0,1,.574.721,9.44,9.44,0,0,1-3.066,5.854c-.383.349-.7.116-1-.185q-2.971-2.982-5.951-5.957c-.111-.111-.206-.238-.376-.437"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>

                {open && <span className="ml-3">Home</span>}
              </Link>
            </div>
            <div className="flex items-start">
              <div className="flex flex-row items-center justify-between p-2 rounded-lg hover:bg-gray-700 hover:text-white w-full">
                <div className="flex flex-row items-center ">
                  <ProfileSvg />
                  {open && (
                    <div
                      onClick={() => {
                        setToogle(!toogle);
                      }}
                    >
                      <span className="ml-3 text-white">
                        Controle de acesso
                      </span>
                    </div>
                  )}
                </div>
                {open && (
                  <div className={`${toogle && "rotate-180"}`}>
                    <ShortArrowIcon />
                  </div>
                )}
              </div>
            </div>
            {toogle && open && (
              <div className="pl-10">
                <Link
                  href="/users"
                  className="flex items-center p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                    >
                      <defs>
                        <clipPath id="a">
                          <path
                            fill="#0b2b25"
                            d="M0 0h24v24H0z"
                            data-name="Rectangle 8140"
                          />
                        </clipPath>
                      </defs>
                      <g data-name="Group 48110" opacity={0.9}>
                        <g
                          fill="#FFF"
                          clipPath="url(#a)"
                          data-name="Group 47434"
                        >
                          <path
                            d="M12 22.676H4.149c-1.071 0-1.568-.538-1.478-1.591a7.371 7.371 0 0 1 7.594-7.007c1.2 0 2.394-.005 3.591 0a7.4 7.4 0 0 1 7.488 7.187 1.264 1.264 0 0 1-1.371 1.411H12"
                            data-name="Path 34839"
                          />
                          <path
                            d="M17.275 6.677A5.228 5.228 0 0 1 12 11.964a5.321 5.321 0 1 1 5.276-5.287"
                            data-name="Path 34840"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <span className="ml-3">Usuários</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {open && footer()}
    </div>
  );
};

export default SidebarMenu;
