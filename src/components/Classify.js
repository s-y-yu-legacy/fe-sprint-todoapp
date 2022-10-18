import styled from "styled-components";
import { useState } from "react";
import useFetch from "../functions/useFetch";

const Classify = () => {

	const [fetchData, isPending, err] = useFetch('http://localhost:3001/todos');

	return (
		<div>
			{fetchData && fetchData.map((el) => 
				<li key={el.id}>{el.category}</li>)}
		</div>
	)
}

export default Classify