import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./constants/routes";
import { useContext, Suspense, useEffect } from "react";
import GlobalLoader from "./components/global/GlobalLoader";
import { GlobalContext } from "./context/GlobalContext";
import Cursor from "./components/global/Cursor";

function App() {
  const { palette } = useContext(GlobalContext);

  return (
    <div
      className="transition-all duration-700"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <Cursor />
      <Suspense fallback={<GlobalLoader />}>
        <Routes>
          {routes.map((route) => {
            return (
              <Route key={route.url} path={route.url} element={route.page} />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
