export const navbarStyles = {
  wrapper: {
    height: 80,
  },
  logo: {
    fontSize: "3rem",
  },
  mobileMenu: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
    justifyContent: "flex-end",
  },
  menuIcon: {
    color: "#8bc34a",
    "&:hover": {
      color: "#fff",
    },
  },
  mobileMenuContent: {
    display: { xs: "block", md: "none" },
  },
  menu: {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
  },
  menuButton: {
    my: 2,
    color: "#8bc34a",
    fontSize: "1.2rem",
    display: "block",
    "&:hover": {
      color: "#fff",
    },
  },
};
