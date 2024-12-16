import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid2";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

const ProductList = () => {
  const dispatch = useDispatch();
  const { searchResults, products, status, error } = useSelector(
    (state) => state.products
  );
  const displayProducts = searchResults.length > 0 ? searchResults : products;

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate the number of pages
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);

  // Get products for the current page
  const currentProducts = displayProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {currentProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 2,
            paddingRight: 2,
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="medium"
            sx={{
              "& .MuiPaginationItem-root": {
                borderRadius: "4px", // Square pagination
                border: "1px solid #ddd", // Optional border
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
