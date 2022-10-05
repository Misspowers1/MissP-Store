import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
	background-color: transparent;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;

	${mobile({ height: "20vh" })}
`;

const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Title = styled.h1`
	color: black;
	margin-bottom: 20px;
`;

const Button = styled.button`
	padding: 10px;
	background-color: white;
	font-size: 20px;
	cursor: pointer;
	color: #1282a2;
	border: none;
	font-weight: 600;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Link to="/product" style={{ textDecoration: "none", color: "black" }}>
					<Button>SHOP NOW</Button>
				</Link>
			</Info>
		</Container>
	);
};

export default CategoryItem;
