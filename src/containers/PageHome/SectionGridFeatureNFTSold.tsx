import CardNFT from "components/CardNFT";
import Heading from "components/Heading/Heading";
import { FC } from "react";
import Pagination from "shared/Pagination/Pagination";

//buraya hook ile apiden data cekilecek
export interface SectionGridFeatureNFTSoldProps {
  title?: string;
}

const SectionGridFeatureNFTSold: FC<SectionGridFeatureNFTSoldProps> = ({ title = "" }) => {
  return (
    <div className="nc-SectionGridFeatureNFT relative">
      <Heading>{title}</Heading>
      <div
        className={`grid gap-8 sm:grid-cols-2 xl:grid-cols-3 `}
      >
        {Array.from("111111").map((_, index) => (
          <CardNFT key={index} title="Project Name" totalitems="1000" items={0} price="5" isEnd={true} />
        ))}
      </div>
      {/* PAGINATION */}
      <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-center sm:items-center">
        <Pagination />
      </div>
    </div>

  );
};

export default SectionGridFeatureNFTSold;
