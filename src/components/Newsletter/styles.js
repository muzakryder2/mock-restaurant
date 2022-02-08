export const newsletterStyles = {
  wrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8bc34a",
    paddingBottom: "2rem",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    ["@media (max-width: 499px)"]: {
      padding: 0,
      minWidth: "300px",
    },
  },
  headerText: {
    fontSize: "2.5rem",
    textAlign: "center",
    ["@media (max-width: 499px)"]: {
      fontSize: "1.5rem",
    },
  },
  form: {
    backgroundColor: "#5d4037",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "0",
    marginTop: "1rem",
  },
  nameEmailWrapper: {
    display: "flex",
    width: "100%",
    ["@media (max-width: 499px)"]: {
      flexDirection: "column",
    },
  },
  name: {
    flex: "1",
    backgroundColor: "#fff",
    color: "#000",
    height: "48px",
    border: "1px solid #5d403755",
  },
  email: {
    flex: "1",
    backgroundColor: "#fff",
    color: "#000",
    height: "48px",
    border: "1px solid #5d403755",
  },
  message: {
    width: "100%",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #5d403755",
    borderBottom: "none",
  },
  charsLeft: {
    width: "100%",
    paddingLeft: "10px",
    margin: "0",
    fontSize: "14px",
    color: "#5d403777",
    backgroundColor: "#ffffffee",
    border: "1px solid #5d403755",
    borderTop: "none",
  },
  submitButton: {
    color: "#8bc34a",
    fontSize: "24px",
    display: "block",
    width: "100%",
  },
};
