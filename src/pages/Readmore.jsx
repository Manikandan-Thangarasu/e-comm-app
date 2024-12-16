import { Box, Typography, styled } from "@mui/material";

const PageContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh", // Full height page
}));

const OfferTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const OfferDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  marginBottom: theme.spacing(4),
  lineHeight: "1.6",
}));

const OfferDetails = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: "1.6",
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
}));

const ReadMore = () => {
  return (
    <Box>
      {/* Main Content Section */}
      <PageContainer>
        <OfferTitle variant="h2">Slash Sales - June Offers</OfferTitle>
        <OfferDescription variant="body1">
          {`Get up to 80% off on all products during our Slash Sales event this
          June. Don't miss out on incredible discounts on your favorite items!`}
        </OfferDescription>

        <OfferDetails variant="body2">
          Our Slash Sales event is a once-in-a-year opportunity to get
          unbeatable prices on a wide range of products, from electronics to
          fashion and home goods. All products are eligible for up to 80% off,
          with no minimum purchase required.
          <br />
          <br />
          Terms and conditions apply. Offers are valid while stocks last.
        </OfferDetails>
      </PageContainer>
    </Box>
  );
};

export default ReadMore;
