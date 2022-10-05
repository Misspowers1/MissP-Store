import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/login" element={<Login />} />
			<Route path="/product" element={<Product />} />
			<Route path="/productlist" element={<ProductList />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);
