import React from "react";
import Box from "@mui/material/Box";

export default function Bullets(props) {
  const items = [
    {
      title: "Lorem ipsum",
      description: "ud exercitation ullamco laboris nisi ut aliquip ex.",
      icon: 1,
    },
    {
      title: "perspiciatis unde",
      description: "in faucibus orci luctus et ultrices posuere cubilia curae; Quisque molestie.",
      icon: 2,
    },
    {
      title: "ex ea commodi",
      description: "ed tortor pulvinar, sit amet pulvinar metus tristique.",
      icon: 3,
    },
    {
        title: "Lorem ipsum",
        description: "ud exercitation ullamco laboris nisi ut aliquip ex.",
        icon: 4,
      },    
  
  ];

  return (
    <div className="gridBullets">
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </div>
  );
}

const Item = ({ title, description, icon }) => {
  var iconUrl = `/img/icon/${icon}.png`
  return (
    <Box
      className="bullets"
      sx={{
        // boxShadow: 2,
        // bgcolor: "background.paper",
        m: 0,
        p: 1,
      }}
    >
      <img className="bulletStyle" alt={iconUrl} src={iconUrl}/>
      <p>{title}</p>    
    </Box>
  );
};
