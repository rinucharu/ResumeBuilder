import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeGenarator from "./pages/ResumeGenarator";
import FormPage from "./pages/FormPage";
import HistoryPage from "./pages/HistoryPage"
import PNF from "./pages/PNF";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resumegenerator" element={<ResumeGenarator/>}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/history" element={<HistoryPage/>}/>
        <Route path="*" element={<PNF/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
