import "./input.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AllRoutes } from "./router";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {AllRoutes.map((route, index) => {
            let Layout = route.Layout;

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
};

export default App;
