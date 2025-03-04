import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    throw new Error("The element #portal-root was not found in the document.");
  }

  return ReactDOM.createPortal(children, portalRoot);
};
