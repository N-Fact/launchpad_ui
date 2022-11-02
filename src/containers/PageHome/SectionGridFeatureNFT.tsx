import CardNFT from "components/CardNFT";
import Heading from "components/Heading/Heading";
import { FC } from "react";
import Pagination from "shared/Pagination/Pagination";

//buraya hook ile apiden data cekilecek
export interface SectionGridFeatureNFTProps {
  title?: string;
}

const SectionGridFeatureNFT: FC<SectionGridFeatureNFTProps> = ({ title = "" }) => {
  return (
    <div className="nc-SectionGridFeatureNFT relative">
      <Heading>{title}</Heading>
      <div
        className={`grid gap-8 sm:grid-cols-2 xl:grid-cols-3 `}
      >
        {Array.from("111111").map((_, index) => (
          <CardNFT key={index} title="Project Name" items={1000} price="5" isEnd={false} />
        ))}
      </div>
      {/* PAGINATION */}
      <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-center sm:items-center">
        <Pagination />
      </div>
    </div>

  );
};

export default SectionGridFeatureNFT;
