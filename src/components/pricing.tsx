import Link from "next/link";

export default function Pricing() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12" id="Pricing">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Package & Payment Info
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Total Immigration Package Fee: 11,000 Euros
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">

          <div className="relative w-full rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-400 p-6 shadow-xl sm:w-3/5 sm:p-8">
            <div className="absolute top-2 right-2 rounded-full bg-indigo-200 bg-opacity-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Best value
            </div>
            <div className="mt-8 mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
              <div>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  Total Immigration Fee: €11,000
                </h3>
                <p className="text-indigo-100">Payment Schedule:</p>
              </div>
            </div>

            <div className="mb-4 space-x-2">
              <span className="text-4xl font-bold text-white">€11000</span>
              <span className="text-2xl text-indigo-100 line-through">
                €15000
              </span>
            </div>

            <ul className="mt-8 space-y-2 text-indigo-100">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>
                  Initial Fee: €1,300 – Payable at the start (Non-refundable).
                </span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>
                  Second Installment: €4,600 – Payable after work permit
                  issuance (Refundable if visa is rejected).
                </span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>
                  Final Installment: €5,100 – Payable after visa approval.
                </span>
              </li>
            </ul>

            <Link
              href="#Contact"
              className="block mt-16 mb-4 rounded-lg bg-indigo-800 bg-opacity-50 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-300 focus-visible:ring active:bg-indigo-400 md:text-base"
            >
              Contact Us for More Info
            </Link>
          </div>
        </div> 
      </div>
    </div>
  );
}
