import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { hoursStyles } from "./styles";
import { locations } from "../../constants/locations";

const Hours = () => {
  return (
    <Box sx={hoursStyles.wrapper}>
      <Typography variant="h2" sx={hoursStyles.title}>
        Our Locations
      </Typography>
      <Grid
        container
        sx={hoursStyles.container}
        spacing={5}
        justifyContent="space-around"
        alignItems="center"
      >
        {locations.map((location, index) => {
          return (
            <Grid
              item
              sx={hoursStyles.cardContainer}
              md={12}
              lg={4}
              key={index}
              justifyContent="center"
            >
              <Card sx={hoursStyles.card}>
                <CardContent>
                  <Typography variant="h4" textAlign="center">
                    {location.name}
                  </Typography>
                  <Divider color="white" />
                  <Typography variant="h6" textAlign="center" mt={2}>
                    {location.address}
                  </Typography>
                  <Typography variant="h6" textAlign="center">
                    {location.city}, {location.state} {location.zipCode}
                  </Typography>
                  <Typography variant="h4" textAlign="center" mt={1}>
                    {location.daysOpen}
                  </Typography>
                  <Typography variant="h6" textAlign="center" mt={1}>
                    {location.hoursOpen}
                  </Typography>
                  <Button sx={hoursStyles.button}>Get Directions</Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Hours;
