export const giftCardStyles = {
  wrapper: {
    width: "100%",
    minHeight: "200px",
    backgroundColor: "#8bc34a",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    ["@media (max-width: 831px)"]: {
      flexDirection: "column",
    },
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: "2.5rem",
    ["@media (max-width: 831px)"]: {
      fontSize: "2rem",
    },
    textTransform: "Capitalize",
    zIndex: "10",
  },
  giftCardButton: {
    transform: "rotate(-25deg)",
    marginLeft: "40px",
    width: "200px",
    height: "200px",
    ["@media (max-width: 831px)"]: {
      width: "100px",
      height: "100px",
      marginLeft: "0",
    },
  },
};
