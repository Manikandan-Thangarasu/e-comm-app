import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  styled,
  Grid,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts, fetchProducts } from "../../store/productSlice";
// Styled components using theme
const HeaderContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: "none",
  borderBottom: "none",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 0),
  },
}));

const LogoContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const SearchBar = styled(TextField)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  "& .MuiOutlinedInput-root": {
    paddingRight: "8px",
  },
}));

const MenuContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    display: "none", // Hide menu on small screens
  },
}));

// Styled NavLink with active state handling
const MenuLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  display: "flex",
  alignItems: "center",
  gap: "5px",

  // Default state style
  "&.active": {
    color: theme.palette.primary.main, // Apply active color
    fontWeight: "bold", // Optionally, change font weight for active state
    borderBottom: `2px solid ${theme.palette.primary.main}`, // Underline the active link
  },
}));

const MobileMenuLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  fontWeight: 500,
  padding: theme.spacing(1, 2),
  "&.active": {
    color: theme.palette.primary.main, // Active color for mobile menu links
    fontWeight: "bold", // Bold for active state
  },
}));

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      dispatch(searchProducts(searchQuery));
    } else {
      dispatch(fetchProducts()); // Load all products if search is empty
    }
  };
  const clearSearch = () => {
    setSearchQuery("");
    dispatch(fetchProducts()); // Fetch all products on clearing search
  };
  // Check if the screen is mobile
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <HeaderContainer position="static" color="inherit">
      <Toolbar borderBottom={0}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          style={{ paddingLeft: "0px" }}
        >
          {/* Logo */}
          <Grid item xs={4} sm={2}>
            <LogoContainer>
              <img src={logo} alt="Logo" style={{ height: "40px" }} />
            </LogoContainer>
          </Grid>

          {/* Search Bar */}
          <Grid item xs={8} sm={7}>
            <SearchBar
              variant="outlined"
              placeholder="What do you want to buy today?"
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {searchQuery ? (
                      <IconButton onClick={clearSearch}>
                        <CloseIcon />
                      </IconButton>
                    ) : (
                      <IconButton onClick={handleSearch}>
                        <SearchIcon />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Desktop Menu Links */}
          <Grid item sm={3} className="menu-container">
            <MenuContainer>
              <MenuLink to="/" activeClassName="active">
                Store
              </MenuLink>
              <MenuLink to="/account" activeClassName="active">
                Account
              </MenuLink>
              <MenuLink to="/wishlist" activeClassName="active">
                Wishlist
              </MenuLink>
              <MenuLink to="/basket" activeClassName="active">
                Basket <ShoppingBasketIcon />
              </MenuLink>
            </MenuContainer>
          </Grid>

          {/* Mobile Menu Icon */}
          {isMobile && (
            <Grid item xs={12}>
              <IconButton
                onClick={() => toggleDrawer(true)}
                edge="end"
                color="inherit"
                aria-label="menu"
              >
                <SearchIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <MobileMenuLink to="/store">Store</MobileMenuLink>
            </ListItem>
            <ListItem>
              <MobileMenuLink to="/account">Account</MobileMenuLink>
            </ListItem>
            <ListItem>
              <MobileMenuLink to="/wishlist">Wish List</MobileMenuLink>
            </ListItem>
            <ListItem>
              <MobileMenuLink to="/basket">
                Basket <ShoppingBasketIcon />
              </MobileMenuLink>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;
