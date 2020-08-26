import "../styles/globals.css";
import "nprogress/nprogress.css";
import Nprogress from "nprogress";
import Router from "next/router";
import "../styles/antd.less";

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
