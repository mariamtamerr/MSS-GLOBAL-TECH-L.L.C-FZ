import { faPlane, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Grid --> */}
        <div className="text-center">
          <div>
            <a
              href="#"
              className="flex justify-center  text-[#9EA2B2] text-sm"
            >
              <span>Copyright © 2024 MSS GLOBAL TECH All rights reserved.</span>
              {/* <span className='ml-2 flex'>
         Diner <FontAwesomeIcon className=' w-5 ml-2' icon={faUtensils}  />
       </span> */}
            </a>
          </div>
          {/* <!-- End Col --> */}

         
        </div>
        {/* <!-- End Grid --> */}
      </footer>
    </div>
  );
};

export default Footer;
