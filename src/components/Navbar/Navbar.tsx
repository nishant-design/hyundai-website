import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import LOGO from "../../assets/hyundai-logo.svg";
import { NAV_PAGES } from "./constants";
import HeaderModal from "./HeaderModal";
import useNavbar from "./hooks/useNavbar";
import './style.scss';

const Navbar = () => {
  const { showNavModal, handleNavModalClose, toggleNavModal, selectedVehicleCategory, setSelectedVehicleCategory } = useNavbar();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box className="navbar">
      <AppBar position="relative" sx={{ backgroundColor: "#fff", zIndex: 10 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="a"
              href="/"
              sx={{
                mr: 5,
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
              }}
            >
              <img src={LOGO} />
            </Box>

            {/* MOB NAV */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
              </Menu>
            </Box>

            <Box
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={LOGO} />
            </Box>
            {/* MOB MENU ENDS */}

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, columnGap: { md: 5 } }}>
              {NAV_PAGES.map((page) => (
                <Typography key={page.name} onClick={page.subMenu ? toggleNavModal : () => {}} sx={{ color: "#666", cursor: "pointer", display: "flex", alignItems: "center", columnGap: 1 }}>
                  {page.name}
                  {page.subMenu && <KeyboardArrowDownIcon fontSize="small" color="primary" className={`${showNavModal && 'rotate_icon'}`} />}
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {<HeaderModal showModal={showNavModal} handleClose={handleNavModalClose} selectedVehicle={selectedVehicleCategory} setSelectedVehicle={setSelectedVehicleCategory} />}
    </Box>
  );
};
export default Navbar;
