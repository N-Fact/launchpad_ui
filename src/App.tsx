import { AptosWalletAdapter, FewchaWalletAdapter, FletchWalletAdapter, HippoExtensionWalletAdapter, HippoWalletAdapter, MartianWalletAdapter, ONTOWalletAdapter, PontemWalletAdapter, RiseWalletAdapter, SafePalWalletAdapter, SpikaWalletAdapter, TokenPocketWalletAdapter, WalletProvider } from '@manahippo/aptos-wallet-adapter';
import { UserProvider } from 'context/StateProvider';
import toast, { Toaster } from 'react-hot-toast';
import MyRouter from "routers/index";
const wallets = [
  new HippoWalletAdapter(),
  new MartianWalletAdapter(),
  new AptosWalletAdapter(),
  new FewchaWalletAdapter(),
  new HippoExtensionWalletAdapter(),
  new PontemWalletAdapter(),
  new SpikaWalletAdapter(),
  new RiseWalletAdapter(),
  new FletchWalletAdapter(),
  new TokenPocketWalletAdapter(),
  new ONTOWalletAdapter(),
  new SafePalWalletAdapter(),
];
const App: React.FC = () => {
  return (
    <UserProvider >

      <WalletProvider
        wallets={wallets}
        autoConnect={true} /** allow auto wallet connection or not **/
        onError={(error: Error) => {
          let text = 'Unknow error';
          if (error.name === 'WalletNotReadyError') {
            text = 'Wallet not ready';
          }
          // console.log({ detail: error.message || text, title: 'Wallet Error' })
          toast.error(error.message,
            {
              duration: 3000,
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );
        }
        }>
        <Toaster />
        <div className="text-base text-neutral-900 dark:text-neutral-200 bg-dwarf">
          <MyRouter />
        </div>
      </WalletProvider>
    </UserProvider>

  );
}

export default App;
