import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import AppRoutes from "./Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes></AppRoutes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
