import { nftsImgs } from "contains/fakeData";
import { FC } from "react";
import Avatar from "shared/Avatar/Avatar";
import Button from "shared/Button/Button";
import NcImage from "shared/NcImage/NcImage";
import TimeCountDown from "./TimeCountDown";


export interface CardLarge2Props {
  className?: string;
}

const NftDetailCard2: FC<CardLarge2Props> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-CardLarge2  ${className}`}
      data-nc-id="CardLarge2"

    >

      {/* HEADER */}
      <div className="w-full">
        <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-[15px] shadow-xl flex flex-col md:flex-row lg:items-center">
          <div className="flex flex-grow flex-col sm:flex-row md:block sm:items-start sm:justify-between">
            <div className="">
              <NcImage
                src={nftsImgs[2]}
                containerClassName="aspect-w-1 aspect-h-1 rounded-[15px] overflow-hidden"
              />
              <div className="mt-4">
                <div className="flex ">
                  <span className="opacity-75 text-sm">Total minted</span>
                  <span className=" text-sm text-white ml-auto mr-2 font-semibold">36%</span><span className="opacity-75 text-sm">(720/2000) </span>
                </div>
                <div className="mt-1 w-full h-2 bg-red-400 bg-opacity-60 rounded-full ">
                  <div className="w-52 h-2 bg-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center sm:justify-center space-x-3">
              <div className="flex space-x-1.5 text-neutral-700 dark:text-neutral-300">
                <a
                  href="##"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center  justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer"
                >
                  <i className="las la-globe text-base sm:text-xl"></i>
                </a>
                <a
                  href="##"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer"
                >
                  <i className="text-base sm:text-xl lab la-discord"></i>
                </a>
                <a
                  href="##"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer"
                >

                  <i className="text-base sm:text-xl lab la-twitter"></i>
                </a>
              </div>

            </div>
          </div>
          <div className="mt-5 md:mt-0 md:ml-8 xl:ml-14 w-5/12">
            <div className="max-w-screen-sm">
              <h2 className="inline-block text-2xl sm:text-3xl lg:text-5xl font-semibold mb-2">
                {"Amazing Nature"}
              </h2>
              <p className="inline-block text-base mb-6">
                {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, minus?"}
              </p>
              {/* AUTHOR AND COLLECTION */}
              <div className="flex justify-between items-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Avatar sizeClass="w-10 h-10" />
                  </div>
                  <div className="ml-3">
                    <div className="text-xs dark:text-neutral-400">Creator</div>
                    <div className="text-sm font-semibold flex items-center">
                      <span>Jane Cooper</span>
                    </div>
                  </div>
                </div>
                <span className=" border-solid  border px-2 py-2 text-xs shadow-md dark:border-neutral-800 rounded-full flex items-center justify-center">
                  TOTAL ITEMS : 6000
                </span>
              </div>
              <div className="mt-6 xl:mt-8 gap-4 flex flex-col">
                {/* ----- 1 ----- */}
                <div className="rounded-2xl gap-6 flex flex-col shadow-md border border-neutral-50 dark:border-neutral-800 hover:bg-zinc-900 duration-500 p-2 lg:p-3 items-start">
                  <div className="flex w-full">
                    <span className="text-xs text-white rounded-full shadow-md bg-slate-800 py-1 px-2">
                      OG
                    </span>
                    <span className="text-xs text-white rounded-full shadow-md bg-slate-800 py-1 px-2 ml-2">
                      Items : 500
                    </span>
                    <span className="text-red-400  ml-auto ">
                      ENDED
                    </span>
                  </div>
                  <div className="flex justify-between w-full items-end">
                    <span className="font-sm text-base rounded">
                      1 Mint per wallet <br /><b> Price: <span className="text-green-600">2 $APT</span></b>
                    </span>
                  </div>
                </div>
                {/* ----- 1 ----- */}
                <div className="rounded-2xl gap-6 flex flex-col shadow-md border border-neutral-50 dark:border-neutral-800 hover:bg-zinc-900 duration-500 p-2 lg:p-3 items-start">
                  <div className="flex w-full">
                    <span className="text-xs shadow-md text-white rounded-full bg-slate-800 py-1 px-2">
                      Whitelist
                    </span>
                    <span className="text-xs shadow-md text-white rounded-full bg-slate-800 py-1 px-2 ml-2">
                      Items : 400
                    </span>
                    <span className="text-green-400 ml-auto">
                      LIVE
                    </span>
                  </div>
                  <div className="flex justify-between w-full items-end">
                    <span className="font-sm text-base rounded">
                      1 Mint per wallet <br /><b> Price: <span className="text-green-600">2 $APT</span></b>
                    </span>
                    <Button className="bg-blue-600 hover:bg-green-700 duration-500 font-semibold rounded-md space" sizeClass="px-6 py-2 "  >MINT</Button>

                  </div>
                </div>
                {/* ----- 1 ----- */}
                <div className="rounded-2xl gap-6 flex flex-col shadow-md border border-neutral-50 dark:border-neutral-800 hover:bg-zinc-900 duration-500 p-2 lg:p-3 items-start">
                  <div className="flex w-full">
                    <span className="text-xs shadow-md text-white rounded-full bg-slate-800 py-1 px-2">
                      Public
                    </span>
                    <span className="text-xs shadow-md text-white rounded-full bg-slate-800 py-1 px-2 ml-2">
                      Items : 4000
                    </span>
                    <span className="text-yellow-200 ml-auto">
                      Not Started
                    </span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span className="font-sm text-base rounded">
                      1 Mint per wallet <br /><b> Price: <span className="text-green-600">2 $APT</span></b>
                    </span>
                    <TimeCountDown />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
      {/* ====================== END HEADER ====================== */}

    </div >
  );
};

export default NftDetailCard2;