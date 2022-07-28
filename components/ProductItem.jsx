import React from "react";
import NextLink from "next/link";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
import { urlForThumbnail } from "../utils/image";

const ProductItem = ({ product }) => {
  return (
    <Card>
      <NextLink href={`/product/${product.slug.current}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlForThumbnail(product.image)}
            title={product.name}
          />
          <CardContent>
            <Typography>{product.name}</Typography>
            <Rating value={product.rating} readOnly></Rating>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActionArea>
        <Typography>${product.price}</Typography>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActionArea>
    </Card>
  );
};

export default ProductItem;
