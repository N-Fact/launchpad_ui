import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import AvatarDropdown from "./AvatarDropdown";
import NotifyDropdown from "./NotifyDropdown";

export interface MainNav2LoggedProps { }

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {


  return (
    <div className={`nc-MainNav2Logged relative z-10 ${"onTop "}`}>
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-5 lg:space-x-5">
          <Logo />
          <Link to="/" className="logo-text lg:text-3xl sm:text-2-1 text-xl">
            DKTOOLS
          </Link>
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-2">
            <Navigation />
            <div className="hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"></div>
            <div className="flex">
              <NotifyDropdown />
            </div>
            <div></div>
            <div></div>
            <AvatarDropdown />
          </div>
          <div className="flex items-center space-x-3 xl:hidden">
            <NotifyDropdown />
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2Logged;
