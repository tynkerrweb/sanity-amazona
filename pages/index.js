import { CircularProgress, Typography, Alert, Grid } from "@mui/material";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import client from "../utils/client";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [state, setState] = useState({
    products: [],
    error: "",
    loading: true,
  });

  const { loading, error, products } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(`*[_type == "product"]`);
        setState({ products, loading: false });
      } catch (err) {
        setState({ error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.slug.current}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
}
