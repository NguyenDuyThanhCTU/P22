import { HelmetProvider } from "react-helmet-async";

const ClientLayout = ({ children }: any) => {
  return (
    <HelmetProvider>
      <div className="font-LexendDeca">{children}</div>
    </HelmetProvider>
  );
};

export default ClientLayout;
