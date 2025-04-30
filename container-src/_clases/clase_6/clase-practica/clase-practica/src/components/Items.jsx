import { useEffect, useState } from "react";
import Item from "./Item/Item";
import { useStoreRepos } from "../stores/useStoreRepos";

const Items = () => {
	const [data, setData] = useState([]);
	const { repos, addRepositories } = useStoreRepos()

	const getRepos = async () => {
		const urlApi = "https://api.github.com/users/Andru-1987/repos";
		const response = await fetch(urlApi);
		const data = await response.json();
		setData(data);
		addRepositories(data)
	};

	useEffect(() => {
		getRepos();

	}, []);


	return (
		<div>
			<p>Ahora voy renderizar los Items</p>
			{data &&
				data.map((repo) => (
					<Item
						key={repo.id}
						name={repo.name}
						description={repo.description}
						url={repo.html_url}
						language={repo.language}
					/>
				))}
		</div>
	);
};

export default Items;
