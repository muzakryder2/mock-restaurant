import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Parallax from "react-rellax";
import { images } from "./images";
import mainContentImage from "../../assets/home-main-content-image.jpg";

import { mainContentStyles } from "./styles";

const MainContent = () => {
  return (
    <>
      <Box sx={mainContentStyles.wrapper}>
        <Box sx={mainContentStyles.story}>
          <Container maxWidth="md">
            <Typography
              sx={mainContentStyles.storyHeader}
              variant="h3"
              color="primary"
              textAlign="center"
              mt={5}
              mb={3}
            >
              True Mexican Cuisine
            </Typography>
            <Divider />
            <Typography
              sx={mainContentStyles.storyText}
              variant="h5"
              color="primary"
              my={3}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab a
              rerum nesciunt nobis earum dolore quos quibusdam tempore
              praesentium! Itaque libero necessitatibus cum et aliquid maxime
              eius ad similique minima dolorum commodi dolor dolorem asperiores
              id, illo explicabo deserunt quisquam ullam officia ut placeat,
              pariatur optio impedit tempore! Doloremque, vel?
            </Typography>
          </Container>
        </Box>
        <Box sx={mainContentStyles.imageWrapper}>
          <Parallax speed={3}>
            <img
              src={mainContentImage}
              alt="table with food"
              objectFit="cover"
              no-repeat
            />
          </Parallax>
        </Box>
        <Box sx={mainContentStyles.menu}>
          <Typography
            sx={mainContentStyles.greeting}
            variant="h3"
            color="secondary"
          >
            ¡Bienvenidos Amigos!
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={mainContentStyles.menuButton}
          >
            View Menu
          </Button>
        </Box>
        <Box sx={mainContentStyles.socialWrapper}>
          <Box>
            <Typography
              sx={mainContentStyles.socialHeader}
              variant="h4"
              color="primary"
              textAlign="center"
              my={5}
            >
              Find us on Instagram #LupesMexCuisine
            </Typography>
          </Box>

          <ImageList sx={mainContentStyles.imagesContainer} cols={5} gap={0}>
            {images.map((image, index) => {
              return (
                <ImageListItem key={index}>
                  <img src={image} alt="image" />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Box>
      </Box>
    </>
  );
};

export default MainContent;
