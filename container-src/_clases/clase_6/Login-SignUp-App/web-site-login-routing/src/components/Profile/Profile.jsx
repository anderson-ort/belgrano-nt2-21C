import { useEffect } from "react";
import { useProfileData, useReposData } from "../../_helpers/fetchUsers";
import { externalProfileStore } from "../../_store/externalProfileStore";
import { userSessionStore } from "../../_store/sessionStore";
import { NavLink } from "react-router";
import RepositoryCard from "../RepositoryCard/RepositoryCard";

import "./Profile.css"
import Loader from "../Loader/Loader";

export default function Profile() {
	const { user } = userSessionStore(); // moverlo a una instancia superior
	const { profile, setProfile } = externalProfileStore();
	const profileMutation = useProfileData();
	const { data: repos, isError, isLoading, refetch } = useReposData(user.githubAlias)


	useEffect(() => {
		if (!user) return;

		const shouldFetchProfile =
			!profile &&
			!profileMutation.isPending &&
			!profileMutation.data &&
			!profileMutation.error;

		if (shouldFetchProfile) {
			const config = {
				onSuccess: setProfile,
				onError: (err) =>
					console.error("Error al cargar el perfil extendido:", err),
			};

			profileMutation.mutate(user.githubAlias, config);
		}
	}, [user, profile, profileMutation, setProfile]);


	const handleRepos = async () => {
		try {
			await refetch(); // 🔥 lanzamos la query

		} catch (err) {
			console.error("Error al cargar los repos:", err);
		}
	};


	return (
		<div className="auth-container">
			<div className="auth-card">
				<h2 className="auth-title">{profile.name}</h2>

				{profileMutation.isPending && <p>Cargando datos externos...</p>}
				{profileMutation.error && <p>Error al cargar perfil externo 😢</p>}

				{profile && (
					<div>
						<img
							src={profile.avatar_url}
							alt="avatar"
							width={100}
							style={{ borderRadius: "50%" }}
						/>
						<p>Bio: {profile.bio}</p>
						<p>(●'◡'●)  {profile.email || profile.twitter_username}</p>
						<p>Repos públicos: {profile.public_repos}</p>
						<p>Seguidores: {profile.followers}</p>
					</div>
				)}
				<NavLink to={"/"} className="notfound-link">
					Ir a la pagina principal
				</NavLink>

			</div>
			<div className="cardList">
				{!repos && (
					<button type="button" onClick={handleRepos} disabled={isLoading}>
						{isLoading ? <Loader /> : "Cargar mis repos"}
					</button>
				)}



				{isLoading && <p>Cargando repositorios...</p>}
				{isError && <p>Error cargando repositorios.</p>}

				{repos &&
					repos.map((repo) => (
						<RepositoryCard
							key={repo.id}
							name={repo.name}
							description={repo.description}
							url={repo.html_url}
							language={repo.language}
						/>
					))}
			</div>
		</div>
	);
}
