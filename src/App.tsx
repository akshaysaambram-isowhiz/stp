import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
