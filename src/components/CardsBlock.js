import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CardBlock() {
  const items = [
    {
      title: "Lorem ipsum",
      description: "ud exercitation ullamco nisi ut aliquip ex.",
      image: 1,
    },
    {
      title: "perspiciatis",
      description:
        "in faucibus orci luctus et ultrices.",
      image: 2,
    },
    {
      title: "commodi",
      description: "ed tortor pulvinar, metus tristique.",
      image: 3,
    },
    {
      title: "Lorem ipsum",
      description: "ud exercitation ullamco nisi ut aliquip ex.",
      image: 4,
    },
    {
      title: "Lorem ipsum",
      description: "ud exercitation laboris ut aliquip ex.",
      image: 5,
    },
    {
      title: "Lorem ipsum",
      description: "ud exercitation ullamco nisi ut aliquip ex.",
      image: 1,
    },
    {
      title: "perspiciatis",
      description:
        "in faucibus orci luctus et ultrices posuere.",
      image: 2,
    },
    {
      title: "commodi",
      description: "ed tortor pulvinar, metus tristique.",
      image: 3,
    },
    {
      title: "Lorem ipsum",
      description: "ud exercitation ullamco nisi ut aliquip ex.",
      image: 4,
    },
  ];

  const Item = ({ title, description, image }) => {
    var imageUrl = `/img/${image}.jpg`;
    return (
      <div>
        <Card sx={{ maxWidth: 345 }} className="cardOfGrid">
          <CardActionArea>
            <CardMedia component="img" height="140" image={imageUrl} alt="1" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  };

  return (
    <div className="cardsGrid">
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </div>
  );
}

export default function CardsBlock() {
  return (
    <div className="container">
      <CardBlock />
    </div>
  );
}