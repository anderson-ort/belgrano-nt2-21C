import { useStoreRepos } from "../stores/useStoreRepos";
import Item from "./Item/Item";

const Landing = () => {
	const { repos } = useStoreRepos()

	const { name, description, html_url, language } = repos ? repos[0] : {}

	return (
		<>
			{repos &&
				<Item
					name={name}
					description={description}
					url={html_url}
					language={language}
				/>
			}
		</>
	)


};

export default Landing;
