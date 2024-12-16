import { Box, Typography, styled, Link } from "@mui/material";

// Styled components for the banner
const BannerContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to right, #353638 0%, #9c0f08 100%)", // Gradient colors
  width: "100%",
  height: "150px",
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  color: theme.palette.common.white,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2, 1),
  },
}));

const BannerContent = styled(Box)(() => ({
  maxWidth: "600px",
  padding: "0 1rem",
}));

const BannerHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem", // Adjust font size for better readability
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

const BannerDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  marginBottom: theme.spacing(2),
}));

const ReadMoreLink = styled(Link)(({ theme }) => ({
  fontWeight: "bold",
  textDecoration: "none",
  color: theme.palette.common.white,
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent>
        {/* Banner Heading */}
        <BannerHeading variant="h5">Lorem Ipsum</BannerHeading>

        {/* Banner Description */}
        <BannerDescription variant="body2">
          Slash Sales begins in June.Get upto 80% Discount on all products
          <ReadMoreLink href="/offers"> Read More</ReadMoreLink>
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
