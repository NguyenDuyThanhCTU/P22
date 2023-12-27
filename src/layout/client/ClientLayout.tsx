import { HelmetProvider } from "react-helmet-async";
import Footer from "./section/Footer";

const ClientLayout = ({ children }: any) => {
  return (
    <HelmetProvider>
      <div className="font-LexendDeca">
        {children} <Footer />
      </div>
    </HelmetProvider>
  );
};

export default ClientLayout;
