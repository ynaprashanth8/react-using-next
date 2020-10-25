import Head from "next/head";
import Home from "../pages/home";
import "bootstrap/dist/css/bootstrap.min.css";

export default function index() {
  return (
    <div>
      <Head>Rhub.com</Head>
      <Home />
    </div>
  );
}
