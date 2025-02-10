import React from "react";
import { DarkModeProvider } from "./components/context/DarkModeContext";
import HomePage from "./pages/home/homePage";

export default function App() {
  return (
    <DarkModeProvider>
      <HomePage />
    </DarkModeProvider>
  );
}
