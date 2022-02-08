import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { newsletterStyles } from "./styles";

const Newsletter = () => {
  const charLimit = 400;
  const [messageText, setMessageText] = useState("");

  const handleChange = (event) => {
    if (event.target.value.length <= charLimit) {
      setMessageText(event.target.value);
    }
  };

  return (
    <Box sx={newsletterStyles.wrapper}>
      <Box sx={newsletterStyles.formWrapper}>
        <Box sx={newsletterStyles.formHeader}>
          <Typography
            sx={newsletterStyles.headerText}
            variant="h3"
            color="primary"
          >
            We want to hear from you!
          </Typography>
        </Box>
        <Box sx={newsletterStyles.form}>
          <Box sx={newsletterStyles.nameEmailWrapper}>
            <TextField
              sx={newsletterStyles.name}
              placeholder="Name"
              type="text"
              variant="filled"
              fullWidth
              required
              size="string"
            />
            <TextField
              sx={newsletterStyles.email}
              placeholder="Email"
              type="email"
              variant="filled"
              fullWidth
              required
            />
          </Box>
          <TextField
            sx={newsletterStyles.message}
            placeholder="Message..."
            fullWidth
            multiline
            required
            variant="filled"
            maxRows={9}
            minRows={9}
            value={messageText}
            onChange={handleChange}
          />
          <Typography sx={newsletterStyles.charsLeft} variant="subtitle2">
            {charLimit - messageText.length} chars left
          </Typography>
          <Button variant="contained" sx={newsletterStyles.submitButton}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
