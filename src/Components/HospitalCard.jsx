import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

const StyledCardMedia = styled(CardMedia)({
  height: "250px",
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function RecipeReviewCard(props) {
  const [isLiked, setIsLiked] = React.useState(false);
  const navigate = useNavigate();

  const handleMoreInfoClick = () => {
    navigate(`/PatientUI/Hospital/${props.id}`);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={props.name} subheader={props.year} />
      <StyledCardMedia component="img" image={props.image} alt={props.name} />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.address}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <IconButton
            aria-label="add to favorites"
            onClick={handleLikeClick}
            sx={{
              color: isLiked ? "red" : "inherit",
              "&:hover": {
                color: isLiked ? "#d32f2f" : "#ff7961",
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
        <div className="more">
          <Button
            className="more-info"
            variant="contained"
            startIcon={<InfoIcon />}
            size="small"
            sx={{
              backgroundColor: "#21897E",
              marginright: "70px",
              "&:hover": {
                backgroundColor: "orange",
              },
            }}
            onClick={handleMoreInfoClick}
          >
            More Info
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
