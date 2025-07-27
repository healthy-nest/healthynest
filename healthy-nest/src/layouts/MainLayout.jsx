// layouts/MainLayout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-300px)]"> {/* Adjust as needed */}
        <Outlet />
      </main>
      <CallToAction />
      <Footer />
    </>
  );
};

export default MainLayout;
