import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  styled,
  Select,
  FormControl,
  SelectChangeEvent,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser, faAngleDown, faTools } from '@fortawesome/free-solid-svg-icons';
// import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";

import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

// Styled components
const SearchWrapperContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(25),
    marginRight: theme.spacing(4),
  },
}));

const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f3f5f9",
  width: "100%",
  maxWidth: "600px",
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.grey[500],
  borderRight: `1px solid ${theme.palette.grey[300]}`,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(3em + ${theme.spacing(4)})`,
    width: "100%",
  },
  borderRight: `1px solid ${theme.palette.grey[300]}`,
}));

const CategorySelect = styled(FormControl)(({ theme }) => ({
  minWidth: 150,
  [theme.breakpoints.down("md")]: {
    minWidth: 100,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
}));

const CategoriesButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  backgroundColor: "#F6F9FC",
  padding: "8px 16px",
  "&:hover": {
    backgroundColor: "#F6F9FC",
    color: theme.palette.primary.main,
  },
}));

interface NavItemProps {
  label: string;
  items?: string[];
}

const NavItem: React.FC<NavItemProps> = ({ label, items = [] }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <NavButton
        endIcon={items.length > 0 ? <KeyboardArrowDownIcon /> : null}
        onClick={handleClick}
      >
        {label}
      </NavButton>
      {items.length > 0 && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          {items.map((item) => (
            <MenuItem key={item} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

const Header: React.FC = () => {
  const [category, setCategory] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [categoriesAnchorEl, setCategoriesAnchorEl] =
    useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleCategoriesClick = (event: React.MouseEvent<HTMLElement>) => {
    setCategoriesAnchorEl(event.currentTarget);
  };

  const handleCategoriesClose = () => {
    setCategoriesAnchorEl(null);
  };

  const categories = [
    "All Categories",
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
    "Toys",
    "Health & Beauty",
  ];

  const navItems: NavItemProps[] = [
    { label: "Home", items: ["Home v1", "Home v2", "Home v3"] },
    {
      label: "Mega Menu",
      items: ["Electronics", "Fashion", "Home & Garden", "Sports Equipment"],
    },
    { label: "Full Screen Menu", items: ["Option 1", "Option 2", "Option 3"] },
    { label: "Pages", items: ["About", "Contact", "FAQ", "Terms"] },
    {
      label: "User Account",
      items: ["Profile", "Orders", "Wishlist", "Settings"],
    },
    {
      label: "Vendor Account",
      items: ["Dashboard", "Products", "Sales", "Analytics"],
    },
  ];

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            padding: "0.5rem 0",
            justifyContent: isMobile ? "space-between" : "flex-start",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)} edge="start">
              <MenuIcon />
            </IconButton>
          )}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: isMobile ? 1 : 0,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                bgcolor: "primary.main",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: "white",
                  borderRadius: 0.5,
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{ ml: 1, fontWeight: 700, color: "text.primary" }}
            >
              bazaar
            </Typography>
          </Box>

          {!isMobile && (
            <SearchWrapperContainer>
              <SearchWrapper>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Searching for..."
                  inputProps={{ "aria-label": "search" }}
                />
                <CategorySelect size="small">
                  <Select
                    value={category}
                    onChange={handleCategoryChange}
                    displayEmpty
                    variant="outlined"
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return (
                          <span style={{ color: "rgba(128, 128, 128, 1)" }}>
                            All Category
                          </span>
                        );
                      }
                      return categories.find(
                        (cat) =>
                          cat.toLowerCase().replace(" ", "-") === selected
                      );
                    }}
                  >
                    {categories.map((cat) => (
                      <MenuItem
                        key={cat}
                        value={cat.toLowerCase().replace(" ", "-")}
                      >
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </CategorySelect>
              </SearchWrapper>
            </SearchWrapperContainer>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {" "}
            {isMobile && (
              <IconButton onClick={() => setSearchDialogOpen(true)}>
                <SearchIcon />
              </IconButton>
            )}
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              py: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <CategoriesButton
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleCategoriesClick}
              >
                Categories
              </CategoriesButton>
              <Menu
                anchorEl={categoriesAnchorEl}
                open={Boolean(categoriesAnchorEl)}
                onClose={handleCategoriesClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              >
                {categories.map((category) => (
                  <MenuItem key={category} onClick={handleCategoriesClose}>
                    {category}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: "flex", gap: 0.5 }}>
              {navItems.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </Box>
          </Box>
        )}
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 280 }}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleCategoriesClick}
              sx={{
                backgroundColor: "#F6F9FC",
                "&:hover": {
                  backgroundColor: "#F6F9FC",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Typography>Categories</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </ListItemButton>
          </ListItem>

          <Box sx={{ my: 1, borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }} />

          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Typography>{item.label}</Typography>
                  {item.items && item.items.length > 0 && (
                    <KeyboardArrowDownIcon />
                  )}
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Dialog
        open={searchDialogOpen}
        onClose={() => setSearchDialogOpen(false)}
        fullWidth
      >
        <DialogContent>
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Searching for..."
              inputProps={{ "aria-label": "search" }}
            />
            <CategorySelect size="small">
              <Select
                value={category}
                onChange={handleCategoryChange}
                displayEmpty
                variant="outlined"
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <span style={{ color: "rgba(128, 128, 128, 1)" }}>
                        All Category
                      </span>
                    );
                  }
                  return categories.find(
                    (cat) => cat.toLowerCase().replace(" ", "-") === selected
                  );
                }}
              >
                {categories.map((cat) => (
                  <MenuItem
                    key={cat}
                    value={cat.toLowerCase().replace(" ", "-")}
                  >
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </CategorySelect>
          </SearchWrapper>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Header;
