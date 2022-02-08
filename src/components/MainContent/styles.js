import mainContentImage from "../../assets/home-main-content-image.jpg";

export const mainContentStyles = {
  wrapper: {
    width: "100%",
    height: "150vh",
    backgroundColor: "#0000ff",
    position: "relative",
    overflow: "hidden",
    ["@media (max-width: 549px)"]: {
      height: "100vh",
    },
  },
  story: {
    width: "100%",
    backgroundColor: "#8bc34a",
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  storyHeader: {
    ["@media (max-width: 549px)"]: {
      fontSize: "1.8rem",
    },
  },
  storyText: {
    ["@media (max-width: 549px)"]: {
      fontSize: "1.2rem",
    },
  },
  imageWrapper: {
    width: "100%",
    height: "100%",
    filter: "brightness(0.5)",
    "& img": {
      width: "100%",
      objectFit: "cover",
      ["@media (max-width: 1219px)"]: {
        display: "none",
      },
    },
    ["@media (max-width: 1219px)"]: {
      backgroundImage: `url(${mainContentImage})`,
      backgroundSize: "cover",
    },
  },
  menu: {
    position: "absolute",
    width: "80%",
    bottom: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ["@media (max-width: 599px)"]: {
      bottom: "27%",
      transform: "translateX(-50%)",
    },
  },
  greeting: {
    ["@media (max-width: 549px)"]: {
      fontSize: "1.9rem",
      textAlign: "center",
    },
  },
  menuButton: {
    marginTop: "25px",
    fontSize: "24px",
    backgroundColor: "#c00",
    ["@media (max-width: 549px)"]: {
      fontSize: "1rem",
      textAlign: "center",
    },
  },
  socialWrapper: {
    width: "100%",
    backgroundColor: "#8bc34a",
    zIndex: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 10,
  },
  socialHeader: {
    ["@media (max-width: 549px)"]: {
      fontSize: "1.1rem",
    },
  },
  imagesContainer: {
    width: "100%",
    marginBottom: "0",
  },
};
