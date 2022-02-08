import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import giftCardImage from "../../assets/gift-card.png";

import { giftCardStyles } from "./styles";

const GiftCard = () => {
  return (
    <Box sx={giftCardStyles.wrapper}>
      <Grid container md={12} sx={giftCardStyles.container}>
        <Typography variant="h2" align="center" sx={giftCardStyles.message}>
          e-Gift your friends and family today
        </Typography>
        <Link
          className="jello-horizontal"
          href="#"
          sx={giftCardStyles.giftCardButton}
        >
          <img src={giftCardImage} alt="gift card" style={{ width: "100%" }} />
        </Link>
      </Grid>
    </Box>
  );
};

export default GiftCard;
