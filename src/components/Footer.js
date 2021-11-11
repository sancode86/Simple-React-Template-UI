import React from "react";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

export default function Footer(props) {
  const items = [
    {
      title: "Company",
      link1: "laboris",
      url1: "/about",
      link2: "exercitation",
      url2: "/about",
      link3: "ullamco",
      url3: "/about",
    },
    {
      title: "Links",
      link1: "laboris",
      url1: "/about",
      link2: "exercitation",
      url2: "/about",
      link3: "ullamco",
      url3: "/about",
    },
    {
      title: "More Links",
      link1: "laboris",
      url1: "/about",
      link2: "exercitation",
      url2: "/about",
      link3: "ullamco",
      url3: "/about",
    },
  ];

  return (
    <footer>
      <div className="footer-container">
        {items.map((item, i) => (
          <Item key={i} {...item} />
        ))}
      </div>
    </footer>
  );
}

const Item = ({ title, link1, link2, link3, url1, url2, url3 }) => {
  return (
    <Box
      className="footer-text"
      sx={{
        // boxShadow: 2,
        // bgcolor: "background.paper",
        m: 0,
        p: 1,
      }}
    >
      <h1>{title}</h1>
      <NavLink to={url1} exact>
        {link1}
      </NavLink>
      <NavLink to={url2} exact>
        {link2}
      </NavLink>
      <NavLink to={url3} exact>
        {link3}
      </NavLink>
    </Box>
  );
};
