import "../styles/globals.css";
import Footer from "../components/Footer";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
