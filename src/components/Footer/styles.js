export const footerStyles = {
  wrapper: {
    width: "100vw",
    backgroundColor: "#5d4037",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
    paddingTop: "3rem",

    "& hr": {
      width: "80%",
      height: "10px",
      border: "none",
      borderBottom: "2px solid #8bc34a88",
    },
  },
  linksWrapper: {
    width: "100%",
    textAlign: "center",
  },
  linkGroup: {
    ["@media (max-width: 599px)"]: {
      "& .hideSmall": {
        display: "none",
      },
    },
  },
  socialWrapper: {
    padding: "1rem 0",
    width: "100%",
    textAlign: "center",
  },
  copyrightWrapper: {
    width: "100%",
    textAlign: "center",
  },
};
