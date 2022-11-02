import { FC } from "react";
import NftDetailCard2 from "./NftDetailCard2";

export interface NftDetailPageProps {
  className?: string;
}

const NftDetailPage: FC<NftDetailPageProps> = ({ className = "", }) => {


  return (
    <div className="nc-PageHome relative overflow-hidden">
      {/* SECTION LAERGE SLIDER */}
      <div className="bg-neutral-100/80 dark:bg-black/20 py-20 lg:py-32">
        <div className="container">
          <NftDetailCard2 />
        </div>
      </div>
    </div>

  );
};

export default NftDetailPage;
