import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
	height: 60px;

	${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;

	${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;

	${mobile({ display: "none" })}
`;

const Language = styled.span`
	font-size: 14;
	cusor: pointer;
	font-weight: 500;

	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	background-color: #fbf0f4;
`;

const Center = styled.div`
	flex: 1;
	text-align: center;

	${mobile({ textAlign: "left", marginRight: "10px" })}
`;

const Logo = styled.h1`
	font-weight: bold;

	${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	${mobile({ flex: "2", justifyContent: "right", marginRight: "10px" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;

	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: "16PX" }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/" style={{ textDecoration: "none", color: "black" }}>
						<Logo>EDNA.</Logo>
					</Link>
				</Center>
				<Right>
					<Link
						to="/register"
						style={{ textDecoration: "none", color: "black" }}
					>
						<MenuItem>REGISTER</MenuItem>
					</Link>
					<Link to="/login" style={{ textDecoration: "none", color: "black" }}>
						<MenuItem>SIGN IN</MenuItem>
					</Link>
					<MenuItem>
						<Link to="/cart" style={{ textDecoration: "none" }}>
							<Badge badgeContent={2} color="primary">
								<ShoppingCartOutlined style={{ color: "gray" }} />
							</Badge>
						</Link>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
