import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} pl={0} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={"100}"}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Robert-shapiro.jpg/640px-Robert-shapiro.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://i.quotev.com/e72wyjmuzkgq.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://blog.texasbar.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOdZN9FwqzYqEL6SJa7uQNAFQAmepwBR3bg&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://blog.texasbar.com/files/2011/11/MarkBriggs1.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://art.pixilart.com/13e07bd455dcf46.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Feed
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary">
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://minimaltoolkit.com/images/randomdata/male/63.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary">
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary">
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
