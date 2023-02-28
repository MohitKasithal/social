import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#056e01" }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Mohit@saini"
        subheader="dec 17, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://img.freepik.com/free-photo/beautiful-scenery-road-forest-with-lot-colorful-autumn-trees_181624-30942.jpg?w=360"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Nature is a British weekly scientific journal founded and based in
          London, England. As a multidisciplinary publication, Nature features
          peer-reviewed research from a variety of academic disciplines, mainly
          in science and technology.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
