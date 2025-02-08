import React from "react";
import HomeComponent from "./components/home/HomeComponent";
import { DarkModeProvider } from "./components/context/DarkModeContext";

export default function App() {
  return (
    <DarkModeProvider>
      <HomeComponent />
    </DarkModeProvider>
  );
}
