import { HelmetProvider } from "react-helmet-async";
import Footer from "./section/Footer";
import OnTop from "./section/OnTop";
import Hotline from "./section/Hotline";

const ClientLayout = ({ children }: any) => {
  return (
    <HelmetProvider>
      <div className="font-LexendDeca">
        {children} <Footer />
        <OnTop />
        <Hotline />
      </div>
    </HelmetProvider>
  );
};

export default ClientLayout;
