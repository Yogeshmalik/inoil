import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import VehicleNumberChange from "./pages/VehicleNumberChange";
import AgeingReports from "./pages/AgeingReports";
import Home from "./components/Home";
import IndentUsageReport from "./pages/IndentUsageReport";
import DeliveryReports from "./pages/DeliveryReports";

function App() {
  // const location = useLocation();
  const currentPath = window.location.pathname;

  // Check if the current location is the home page ("/")
  const isHomePage = currentPath === "/";

  return (
    <Router>
      <div
        className={`App min-h-screen screen  overflow-hidden ${
          isHomePage
            ? "bg-cover bg-opacity-50 bg-[url('https://www.indiancooperative.com/wp-content/uploads/2019/03/122206932.jpg')]"
            : "bg-gray-300"
        }`}
      >
        <Header />
        <Breadcrumbs currentPath={currentPath} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/process/yas-scenario/vehicle-number-change"
            element={<VehicleNumberChange />}
          />
          <Route
            path="/reports/track-turn-around-time-reports/ageing-report"
            element={<AgeingReports />}
          />
          <Route
            path="/reports/s&d-reports/delivery-reports"
            element={<DeliveryReports />}
          />

          {/* Reports Navbar */}
          <Route
            path="/reports/s&d-reports/indent-usage-report"
            element={<IndentUsageReport />}
          />
          {/* Define other routes here */}
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
