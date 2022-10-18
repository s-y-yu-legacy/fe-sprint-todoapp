import styled from "styled-components";
import { useState } from "react";
import TodoList from "./TodoList"



export const Hello = styled.div`
position:fixed;
left:300px;
`;

const Home = () => {

	return (
		<Hello>
		<TodoList />
		</Hello>
	)
}

export default Home;