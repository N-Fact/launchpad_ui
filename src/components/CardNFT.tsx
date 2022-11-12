import { ClockIcon } from "@heroicons/react/outline";
import useRemainingTime from "hooks/useRemainingTime";
import { FC } from "react";
import { Link } from "react-router-dom";
import NcImage from "shared/NcImage/NcImage";
import Prices from "./Prices";

export interface CardNFTProps {
  className?: string;
  isLiked?: boolean;
  title?: string;
  items?: number;
  rounds?: any;
  totalitems?: string;
  isEnd?: boolean;
  linkTo?: string;
  image?: string;
  remainingTime?: any;
}

const CardNFT: FC<CardNFTProps> = ({ className = "", isLiked, items = "0", title = "", rounds = [], totalitems = "1000", isEnd = false, linkTo = "/nft-detail/4", image = "", remainingTime = 4 }) => {

  let publicRound = rounds.filter((item: any) => {
    return item.name == "Public";
  });

  const timeLeft = useRemainingTime(publicRound[0]?.event_date);
  let timeLeftString: any;
  if (timeLeft.days == 0 && timeLeft.hours > 0) {
    timeLeftString = timeLeft.hours + " Hours left";
  } else if (timeLeft.days > 0 && timeLeft.hours > 0) {
    timeLeftString = timeLeft.days + " Day " + timeLeft.hours + " Hour left";
  }

  return (
    <div
      className={`nc-CardNFT relative flex flex-col group !border-0 [ nc-box-has-hover nc-dark-box-bg-has-hover ] ${className}`}
      data-nc-id="CardNFT"
    >
      <div className="relative flex-shrink-0 ">
        <div>
          <NcImage
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0 rounded-[15px] overflow-hidden z-0"
            src={"https://novemyazilim.com/blockchain/public/" + image}
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
          <Prices price={publicRound[0]?.price} labelTextClassName="bg-white dark:bg-neutral-900 dark:group-hover:bg-neutral-800 group-hover:bg-neutral-50" />
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">

            {isEnd ? "" : <ClockIcon className="w-4 h-4" />}
            <span className="ml-1 mt-0.5">
              {isEnd ? "Sold out" : timeLeftString}
            </span>
          </div>
        </div>
      </div>

      <Link to={linkTo} className="absolute inset-0"></Link>
    </div>
  );
};

export default CardNFT;
