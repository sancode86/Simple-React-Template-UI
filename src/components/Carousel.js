import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function CarouselComp(props) {
    const items = [
        {
            title: 'Lorem ipsum',
            description: 'Ieplfe Asreuz',
            image: 'first',
            linkTo: "about"
        },
        {
            title: 'Soatinag Auzrse',
            description: 'luctus et ultrices.',
            image: 'second',
            linkTo: "about"
        },
        {
            title: 'Atnalai Deicim',
            description: 'tortor pulvinar',
            image: 'third',
            linkTo: "about"
        },
    ];

    return (
    
        <Carousel >
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </Carousel>
   
    );
}

const Item = ({title, description, image, linkTo}) => {
    var imageUrl = `/img/${image}.jpg`
    var linkUrl = `/${linkTo}`
    return (     

        <div>
            <div className="carouselText">
            <h2>{title}</h2>
            <p>{description}</p>
            <Button variant="contained" component={Link} to={linkUrl} >MORE INFO</Button>
            </div>
            <img className="carouselImg" alt={image} src={imageUrl}/>
        </div>

    );
};