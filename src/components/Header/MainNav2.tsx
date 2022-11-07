import { useWallet } from '@manahippo/aptos-wallet-adapter';
import WalletModal from 'components/modals/walletModal/WalletModal';
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Logo from "shared/Logo/Logo";
import MenuBar from "shared/MenuBar/MenuBar";
import Navigation from "shared/Navigation/Navigation";
import NcModal from 'shared/NcModal/NcModal';
export interface MainNav2Props { }



const MainNav2: FC<MainNav2Props> = () => {
  const { connecting, select, connect, connected, account, network, ...rest } = useWallet();
  const [showModal, setShowModal] = useState(false);
  function connectWallet() {
    setShowModal(true);
  }


  return (

    <div className={`nc-MainNav2 relative z-10 ${"onTop "}`}>

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
            <div className="hidden sm:block h-10 border-l border-neutral-300 dark:border-neutral-6000"></div>

            <ButtonSecondary
              onClick={connectWallet}
              sizeClass="px-4 py-2 sm:px-5"
            >
              Connect Wallet
            </ButtonSecondary>
          </div>
          <div className="flex items-center space-x-1.5 xl:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
      <NcModal
        renderTrigger={() => null}
        isOpenProp={showModal}
        renderContent={WalletModal}
        contentExtraClass="max-w-lg"
        onCloseModal={() => setShowModal(false)}
        modalTitle="Connect Wallet"
      />
    </div>
  );
};

export default MainNav2;
