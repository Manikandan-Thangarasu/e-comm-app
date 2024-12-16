import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchCategoryProducts,
  fetchProducts,
} from "../store/productSlice";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  styled,
} from "@mui/material";

// Styled components for the dropdown
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  maxWidth: 300,
  marginBottom: theme.spacing(2),
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(1),
  },
}));

const menuProps = {
  PaperProps: {
    style: {
      maxHeight: 300, // Maximum dropdown height for scrolling
      overflowY: "auto",
    },
  },
};

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch categories on component mount
  }, [dispatch]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "all") {
      dispatch(fetchProducts()); // Fetch all products
    } else {
      dispatch(fetchCategoryProducts({ category: selectedCategory })); // Fetch products by category
    }
  };

  return (
    <StyledFormControl fullWidth variant="outlined">
      <InputLabel>Select Category</InputLabel>
      <Select
        label="Select Category"
        onChange={handleCategoryChange}
        defaultValue=""
        MenuProps={menuProps}
      >
        <StyledMenuItem value="all">
          <em>All</em>
        </StyledMenuItem>
        {categories.map((category) => (
          <StyledMenuItem key={category.slug} value={category.slug}>
            {category.name}
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default CategoryList;
