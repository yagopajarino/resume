import NavBar from "./NavBar";
import MainFrame from "./MainFrame";
import React, { useEffect } from "react";
import ArrowUp from "./ArrowToTop";
import api from "../api/api";

export default function App() {
  useEffect(() => {
    api.ping();
  });

  return (
    <div>
      <NavBar />
      <MainFrame />
      <ArrowUp />
    </div>
  );
}
