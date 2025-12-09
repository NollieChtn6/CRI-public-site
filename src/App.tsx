import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-1 bg-amber-100 p-4 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
