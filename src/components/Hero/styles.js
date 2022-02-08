import heroImage from "../../assets/hero-image.jpg";

export const heroStyles = {
  wrapper: {
    width: "100%",
    height: "550px",
    background: `url(${heroImage}), rgba(0, 0, 0, 0.5)`,
    backgroundSize: "cover",
    backgroundBlendMode: "darken",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    my: 4,
    backgroundColor: "#c00",
    color: "white",
    fontSize: 24,
    "&:hover": {
      backgroundColor: "#8bc34a",
      color: "#000",
    },
  },
};
