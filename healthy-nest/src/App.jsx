// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import ExploreNests from "./pages/ExploreNests";
import NestDetails from "./pages/NestDetails";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> // ✅ This renders Home at "/"
          <Route path="explore-nests" element={<ExploreNests />} />
          <Route path="advanced-filters" element={<ExploreNests />} />
          <Route path="nest/:id" element={<NestDetails />} />
          {/* Add more pages here */}
        </Route>
      </Routes>
  );
}

export default App;
