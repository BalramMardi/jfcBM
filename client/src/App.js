import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// eslint-disable-next-line
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Wrapper from "./components/wrapper/Wrapper";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Topbar />

      <Routes>
        <Route path="/" element={<Wrapper />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
