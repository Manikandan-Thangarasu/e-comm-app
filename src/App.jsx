import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Store from "./pages/Store";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/Basket";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ReadMore from "./pages/Readmore";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/account" element={<Account />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/offers" element={<ReadMore />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
