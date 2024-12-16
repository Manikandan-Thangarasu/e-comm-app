import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import Banner from "../components/Home/Banner";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch all products on initial render
  }, [dispatch]);
  return (
    <>
      <Banner />
      <CategoryList />
      <ProductList />
    </>
  );
};

export default HomePage;
