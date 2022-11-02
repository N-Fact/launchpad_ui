import Header2 from "components/Header/Header2";
import { useLocation } from "react-router-dom";

const SiteHeader = () => {
  let location = useLocation();

  // return location.pathname !== "/" ? <Header2 /> : <HeaderLogged />;
  return <Header2 />
};

export default SiteHeader;
