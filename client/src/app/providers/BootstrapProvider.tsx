"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const BootstrapContext = createContext(undefined);

export function BootstrapProvider({ children }: React.PropsWithChildren) {
  const [bootstrap, setBootstrap] = useState<any>();

  useEffect(() => {
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    setBootstrap(bootstrap);

    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    Array.from(tooltipTriggerList).map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <BootstrapContext.Provider value={bootstrap}>
      {children}
    </BootstrapContext.Provider>
  );
}

export const useBootstrapCtx = () => useContext(BootstrapContext);
