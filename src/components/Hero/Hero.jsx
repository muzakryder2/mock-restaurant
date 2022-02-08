import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import heroLogo from "../../assets/logo-white-bg.png";

import { heroStyles } from "./styles";

const Hero = () => {
  return (
    <Box sx={heroStyles.wrapper}>
      <img
        src={heroLogo}
        alt="Lupe's Mexican Cuisine"
        width={300}
        height={300}
      />
      <Button sx={heroStyles.button} variant="contained" size="large">
        Order Now
        <DoubleArrowIcon className="bounce-in-left" />
      </Button>
    </Box>
  );
};

export default Hero;
