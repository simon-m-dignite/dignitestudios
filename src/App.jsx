import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./constants/routes";
import { useContext, Suspense } from "react";
import GlobalLoader from "./components/global/GlobalLoader";

function App() {
  return (
    <>
      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          {routes.map((route) => {
            return (
              <Route key={route.url} path={route.url} element={route.page} />
            );
          })}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
