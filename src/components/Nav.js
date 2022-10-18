import styled from "styled-components";
import { useState } from "react";
import Classify from './Classify';

export const Container = styled.nav`
	position:fixed;
	color:black;
	background-color:#999999;
	width:300px;
	border-right:#666666;

`;

export const ClassifyContainer = styled.div`
`;


export const CategoryContainer = styled.div`
`;

export const Category = styled.div`
`;


const Nav = () => {
return (
	<>
	<Container>
		<ClassifyContainer>
			<Classify />
		</ClassifyContainer>
		<CategoryContainer>
			<Category />
		</CategoryContainer>
	</Container>
	</>
)
}

export default Nav;