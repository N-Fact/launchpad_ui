import { ClockIcon } from "@heroicons/react/outline";
import { nftsImgs } from "contains/fakeData";
import { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import NcImage from "shared/NcImage/NcImage";
import Prices from "./Prices";

export interface CardNFTProps {
  className?: string;
  isLiked?: boolean;
  title?: string;
  items?: number;
  price?: string;
  totalitems?: string;
  isEnd?: boolean;
  linkTo?: string;
}

const CardNFT: FC<CardNFTProps> = ({ className = "", isLiked, items = "0", title = "", price = "0", totalitems = "1000", isEnd = false, linkTo = "/nft-detail/4" }) => {
  const renderAvatars = () => {
    return (
      <div className="flex -space-x-1 ">
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
        <Avatar
          containerClassName="ring-2 ring-white dark:ring-neutral-900"
          sizeClass="h-5 w-5 text-sm"
        />
      </div>
    );
  };

  return (
    <div
      className={`nc-CardNFT relative flex flex-col group !border-0 [ nc-box-has-hover nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardNFT"
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-[15px] overflow-hidden z-0"
            src={nftsImgs[Math.floor(Math.random() * nftsImgs.length)]}
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ease-in-out will-change-transform"
          />
        </div>

        {/* <LikeButton
          liked={isLiked}
          className="absolute top-3 right-3 z-10 !h-9"
        /> */}
        <div className="absolute top-3 inset-x-3 flex"></div>
      </div>

      <div className="p-4 py-5 space-y-3">
        <div className="flex">
          {/* {renderAvatars()} */}
          <h2 className={`text-lg font-medium`}>
            {title}
          </h2>
          <span className="ml-auto text-neutral-700 dark:text-neutral-400 text-xs">
            {
              items == 0 ? <span className="text-red-500">{items} / {totalitems}</span> : <span className=""> {totalitems} items</span>
            }
          </span>
        </div>


        <div className="w-2d4 w-full border-b border-neutral-100 dark:border-neutral-700"></div>

        <div className="flex justify-between items-end ">
          <Prices price={price} labelTextClassName="bg-white dark:bg-neutral-900 dark:group-hover:bg-neutral-800 group-hover:bg-neutral-50" />
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">

            {isEnd ? "" : <ClockIcon className="w-4 h-4" />}
            <span className="ml-1 mt-0.5">
              {isEnd ? "Sold out" : Math.floor(Math.random() * 20) + 1 + " hours left"}
            </span>
          </div>
        </div>
      </div>

      <Link to={linkTo} className="absolute inset-0"></Link>
    </div>
  );
};

export default CardNFT;
