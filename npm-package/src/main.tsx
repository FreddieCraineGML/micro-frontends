import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SignUpShell } from "../main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SignUpShell isOpen onClose={() => {}} mode="single"></SignUpShell>
  </StrictMode>
);
