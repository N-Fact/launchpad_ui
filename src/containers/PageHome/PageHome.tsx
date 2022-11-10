import axios from "axios";
import DividerDwarf from "components/DividerDwarf";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionGridFeatureNFT from "./SectionGridFeatureNFT";
import SectionGridFeatureNFTSold from "./SectionGridFeatureNFTSold";
import SectionLargeSlider from "./SectionLargeSlider";
const client = axios.create({
  baseURL: "https://blockchain.novemyazilim.com/api/v1/eventActive"
});

const clientEnded = axios.create({
  baseURL: "https://blockchain.novemyazilim.com/api/v1/eventEnd"
});

function PageHome() {
  const [projects, setprojects] = useState();
  const [endedProjects, setEndedprojects] = useState();

  useEffect(() => {
    async function getPost() {
      const response = await client.get("");
      setprojects(response.data);
    }
    async function getPostEnded() {
      const response = await clientEnded.get("");
      setEndedprojects(response.data);
    }
    getPost();
    getPostEnded();
  }, []);
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
        <SectionGridFeatureNFT projects={projects} title="Upcoming" />
      </div>
      <DividerDwarf />
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION */}
        <SectionGridFeatureNFTSold projects={endedProjects} title="Ended" />
      </div>
    </div>
  );
}

export default PageHome;
