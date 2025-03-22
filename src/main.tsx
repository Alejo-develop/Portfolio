import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App.tsx";
import "./index.css";
import BackgroundGradient from "./utils/background/background.utils.tsx";
import CoverParticles from "./utils/background/cover.particles.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BackgroundGradient>
      <CoverParticles />
      <RouterProvider router={appRouter} />
    </BackgroundGradient>
  </StrictMode>
);
