import React from "react";
import Hook from "@/components/Hook";
import { BrowserRouter, HashRouter, Router, useRoutes } from "react-router-dom";
import PageA from "@/pages/page-a";
import PageB from "@/pages/page-b";

function MicroRouter({ mode }: { mode: "hash" | "browser" }) {
  const RouterComponent = mode === "hash" ? HashRouter : BrowserRouter;
  return (
    <RouterComponent>
      <Hook>
        {function Temp() {
          const routeEle = useRoutes([
            {
              path: "/pageA",
              element: <PageA />,
            },
            {
              path: "/PageB",
              element: <PageB />,
            },
          ]);
          return routeEle;
        }}
      </Hook>
    </RouterComponent>
  );
}

export default MicroRouter;
