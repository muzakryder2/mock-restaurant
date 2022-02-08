import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import { footerStyles } from "./styles";
const currentDate = new Date();

const Footer = () => {
  return (
    <Box sx={footerStyles.wrapper}>
      <Box sx={footerStyles.linksWrapper}>
        <ButtonGroup
          sx={footerStyles.linkGroup}
          variant="text"
          color="secondary"
          size="large"
        >
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Menu</Button>
          <Button>Locations</Button>
          <Button className="hideSmall">Press</Button>
          <Button className="hideSmall">Contact</Button>
          <Button className="hideSmall">Employment</Button>
        </ButtonGroup>
      </Box>
      <hr className="divider" />
      <Box sx={footerStyles.socialWrapper}>
        <ButtonGroup
          sx={footerStyles.socialLinks}
          variant="text"
          color="secondary"
          size="large"
        >
          <Button>
            <FacebookIcon />
          </Button>
          <Button>
            <TwitterIcon />
          </Button>
          <Button>
            <InstagramIcon />
          </Button>
        </ButtonGroup>
      </Box>
      <Box sx={footerStyles.copyrightWrapper}>
        <Typography color="secondary">
          &copy; {currentDate.getFullYear()} Lupe's Mexican Cuisine
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
