import DividerDwarf from "components/DividerDwarf";
import { Helmet } from "react-helmet";
import SectionGridFeatureNFT from "./SectionGridFeatureNFT";
import SectionGridFeatureNFTSold from "./SectionGridFeatureNFTSold";
import SectionLargeSlider from "./SectionLargeSlider";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Ciscryp || NFT Marketplace Template</title>
      </Helmet>

      {/* SECTION LAERGE SLIDER */}
      <div className="py-20 lg:py-32">
        <div className="container">
          <SectionLargeSlider />
        </div>
      </div>
      <DividerDwarf />

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION */}
        <SectionGridFeatureNFT title="Upcoming" />
      </div>
      <DividerDwarf />
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION */}
        <SectionGridFeatureNFTSold title="Ended" />
      </div>
    </div>
  );
}

export default PageHome;
