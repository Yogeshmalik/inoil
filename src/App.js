import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <div className="App min-h-screen bg-gray-300">
      <Header />
      <Breadcrumbs />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
