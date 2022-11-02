import { nftsImgs } from "contains/fakeData";
import { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";


export interface CardLarge2Props {
  className?: string;
  onClickNext?: () => void;
  onClickPrev?: () => void;
}

const CardLarge2: FC<CardLarge2Props> = ({
  className = "",
  onClickNext = () => { },
  onClickPrev = () => { },
}) => {
  return (
    <div
      className={`nc-CardLarge2  ${className}`}
      data-nc-id="CardLarge2"

    >

      {/* HEADER */}
      <div className="w-full">
        <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-800 p-5 lg:p-8 rounded-[15px] shadow-xl flex flex-col lg:flex-row lg:items-center">
          <div className="flex flex-grow flex-col sm:flex-row md:block sm:items-start sm:justify-between">
            <div className="">
              <NcImage
                src={nftsImgs[2]}
                containerClassName="aspect-w-1 aspect-h-1 rounded-[15px] overflow-hidden"
              />
            </div>
            <div className="mt-4 flex items-center justify-center space-x-3 ">
              <div className="flex space-x-1.5 text-neutral-700 dark:text-neutral-300">
                <a
                  href="##"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer"
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
          <div className="mt-5 lg:mt-0 md:ml-8 xl:ml-14 lg:w-1/3">
            <div className="max-w-screen-lg ">
              <h2 className="inline-block text-2xl sm:text-3xl lg:text-5xl font-semibold mb-2 ">
                {"Amazing Nature"}
              </h2>
              <p className="inline-block text-base mb-6">
                {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, minus?"}
              </p>
              {/* AUTHOR AND COLLECTION */}
              <div className=" flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-12">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <Avatar sizeClass="w-10 h-10" />
                  </div>
                  <div className="ml-3 text-start">
                    <div className="text-xs dark:text-neutral-400">Creator</div>
                    <div className="text-sm font-semibold flex items-center">
                      <span>Jane Cooper</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div className="flex gap-4 mt-5 ">
              <Link className="go-to-launchpad-btn"
                to={'/nft-detail/5'}
              >View Drops</Link>
              <Link className="go-to-launchpad-btn"
                to={'/nft-detail/5'}
              >Apply For Waitlist</Link>
            </div>
            <div className="pt-6">
              {/* <NextPrev
                btnClassName="w-11 h-11 text-xl"
                onClickNext={onClickNext}
                onClickPrev={onClickPrev}
              /> */}
            </div>
          </div>
        </div>

      </div>
      {/* ====================== END HEADER ====================== */}

    </div >
  );
};

export default CardLarge2;
