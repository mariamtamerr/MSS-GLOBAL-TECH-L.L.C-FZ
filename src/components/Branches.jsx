import React from "react";

const Branches = () => {
  return (
    <div className="mb-4">
      <hr />
      {/* <!-- Contact --> */}
      <div className="px-4 lg:px-6 lg:px-8 py-12 lg:py-24">
        <div>
          <div className="space-y-10 lg:space-y-16">
            <p className="text-lg font-bold text-center">Office</p>
            <div>
              {/* <!-- Grid --> */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-4">
                  <svg
                    className="size-6 text-gray-500 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>

                  <div className="text-left">
                    <p className="text-[#656A76] dark:text-neutral-400 font-medium">
                      Meydan Road, Nad Al Sheba,
                    </p>
                    <address className="mt-1 text-black not-italic dark:text-white">
                      Dubai, United Arab Emirates
                      <br />
                    </address>
                  </div>
                </div>
              </div>
              {/* <!-- End Grid --> */}
            </div>

            <div>
              {/* <!-- Grid --> */}
              <div className="flex items-center justify-center gap-4">
                <svg
                  className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>

                <div className="text-left">
                  <p className="text-[#656A76] dark:text-neutral-400 font-medium">
                    Call us
                  </p>
                  <p>
                    <a
                      className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white"
                      href="tel:+971553085148"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +971563153131
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- End Grid --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
      </div>
      {/* <!-- End Contact --> */}
    </div>
  );
};

export default Branches;
