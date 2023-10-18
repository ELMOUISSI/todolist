import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from "axios";
import NavBar from "./NavBar";
import NoPage from "./NoPage";

export default function ProdApp() {
  const [apiData, setApiData] = useState({ listProducts: [], isLoading: true });
  const apiUrl = "http://localhost:1337/api/products";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setApiData({ listProducts: res.data.data, isLoading: false });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Add an empty dependency array

  function addToList(data) {
    axios
      .post(apiUrl, data)
      .then(() => {
        alert("Product added successfully.");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Error adding product.");
      });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<ProductList data={apiData} />} />
          <Route path="ajout" element={<ProductForm action={addToList} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
