import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => (
  <Card
    sx={{
      maxWidth: 345,
      margin: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Box position="relative">
      {/* Wishlist Icon positioned above the image */}
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          zIndex: 1,
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>
      <CardMedia
        component="img"
        height="200"
        image={product.thumbnail}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
    </Box>
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1,
        flexGrow: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          marginBottom: "0.5rem",
        }}
      >
        {product.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ flexGrow: 1 }}>
        {product.description}
      </Typography>
      <Typography variant="h5" color="primary">
        ${product.price}
      </Typography>
      <Rating value={product.rating} readOnly />
    </CardContent>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
