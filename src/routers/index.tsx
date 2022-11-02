import AccountPage from "containers/AccountPage/AccountPage";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import NftDetailPage from "containers/NftDetailPage/NftDetailPages";
import Page404 from "containers/Page404/Page404";
import PageAbout from "containers/PageAbout/PageAbout";
import PageCollection from "containers/PageCollection";
import PageConnectWallet from "containers/PageConnectWallet";
import PageContact from "containers/PageContact/PageContact";
import PageHome from "containers/PageHome/PageHome";
import PageHome2 from "containers/PageHome/PageHome2";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSearch from "containers/PageSearch";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import PageUploadItem from "containers/PageUploadItem";
import SiteHeader from "containers/SiteHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "shared/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import { Page } from "./types";

export const pages: Page[] = [
  { path: "/", component: PageHome },
  { path: "/#", component: PageHome },
  { path: "/nft-detail/:id", component: NftDetailPage },


  { path: "/home2", component: PageHome },
  { path: "/home3", component: PageHome2 },
  { path: "/home-header-2", component: PageHome },
  { path: "/page-collection", component: PageCollection },
  { path: "/page-search", component: PageSearch },
  { path: "/page-author", component: AuthorPage },
  { path: "/account", component: AccountPage },
  { path: "/page-upload-item", component: PageUploadItem },
  { path: "/connect-wallet", component: PageConnectWallet },
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/signup", component: PageSignUp },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
];

const MyRoutes = () => {
  return (
    <BrowserRouter
      basename={process.env.NODE_ENV === "production" ? "ciscryp" : "ciscryp"}
    >
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        <Route element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
