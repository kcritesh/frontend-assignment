import React from "react";
import axiosConfig from "../config/axios.config";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => axiosConfig.get("/products").then((res) => res.data),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Online Store</h1>
      <div>
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard
              imgUrl={product.image}
              price={product.price}
              description={product.description}
              title={product.title}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
