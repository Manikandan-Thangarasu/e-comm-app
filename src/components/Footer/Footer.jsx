import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.grey[300],
        color: theme.palette.grey[900],
        padding: "2rem 1rem",
      }}
    >
      <Grid container spacing={2}>
        {/* Column 1: Company Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Company Info
          </Typography>
          {["About Us", "Careers", "Social Responsibility", "Press"].map(
            (menu) => (
              <Typography
                key={menu}
                component={Link}
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: theme.typography.fontWeightRegular,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {menu}
              </Typography>
            )
          )}
        </Grid>

        {/* Column 2: Help & Support */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Help & Support
          </Typography>
          {[
            "Shipping Info",
            "Returns & Refunds",
            "FAQs",
            "Order Tracking",
            "Contact Us",
          ].map((menu) => (
            <Typography
              key={menu}
              component={Link}
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: theme.typography.fontWeightRegular,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {menu}
            </Typography>
          ))}
        </Grid>

        {/* Column 3: Customer Care */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Customer Care
          </Typography>
          {[
            "Help Center",
            "Privacy Policy",
            "Terms & Conditions",
            "Feedback",
          ].map((menu) => (
            <Typography
              key={menu}
              component={Link}
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: theme.typography.fontWeightRegular,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {menu}
            </Typography>
          ))}
        </Grid>

        {/* Column 4: Socials and Platforms */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <IconButton href="#" sx={{ color: theme.palette.common.black }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.common.black }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.common.black }}>
              <InstagramIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Platforms
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <IconButton href="#" sx={{ color: theme.palette.common.black }}>
              <AndroidIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: theme.palette.common.black }}>
              <AppleIcon />
            </IconButton>
          </Box>

          {/* Newsletter Subscription Form */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Subscribe to Our Newsletter
            </Typography>
            <TextField
              variant="filled"
              placeholder="Enter your email"
              size="small"
              sx={{
                bgcolor: theme.palette.common.white,
                borderRadius: "4px",
                width: "100%",
                marginBottom: "0.5rem",
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.grey[900],
                width: "100%",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.grey[600]}`,
          marginTop: "2rem",
          paddingTop: "1rem",
        }}
      >
        <Grid container spacing={2}>
          {/* Column 1: Quick Links */}
          <Grid item xs={12} sm={6}>
            <Typography variant="p">
              &copy; {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              {["Privacy Policy", "Terms of Use", "Sitemap"].map((menu) => (
                <Typography
                  key={menu}
                  component={Link}
                  href="#"
                  color="inherit"
                  underline="hover"
                  sx={{
                    fontWeight: theme.typography.fontWeightRegular,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {menu}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Column 2: Payment Methods */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              We Accept:
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(8, 1fr)",
                gap: "0.5rem",
                marginTop: "0.5rem",
              }}
            >
              {[...Array(14).keys()].map((i) => (
                <Box
                  key={i}
                  sx={{
                    bgcolor: theme.palette.common.white,
                    height: "30px",
                    borderRadius: "4px",
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
