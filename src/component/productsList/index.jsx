import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../productCard";
import "./style.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortType === "priceAsc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "priceDesc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortType === "alphabeticallyAsc") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === "alphabeticallyDesc") {
    filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="product-list">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSort}>
        <option value="">Sort by...</option>
        <option value="priceAsc">Price - Low to High</option>
        <option value="priceDesc">Price - High to Low</option>
        <option value="alphabeticallyAsc">Alphabetically - A to Z</option>
        <option value="alphabeticallyDesc">Alphabetically - Z to A</option>
      </select>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
