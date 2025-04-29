import { externalProfileStore } from "../../_store/externalProfileStore";
import "./LandingPage.css";
const LandingPage = () => {
	const { profile } = externalProfileStore();


	if (!profile) {
		return (
			<>
				<section>
					<div className="title">
						<span>
							Tecnicatura ORT
						</span>
						<span>
							Educando para la vida |
							<a target="_blanck" href="https://www.ort.edu.ar/">
								Desarrollo de software
							</a>
						</span>
					</div>
				</section>
			</>
		);
	}


	return (
		<>
			<section>
				<div className="title">
					<span>
						{profile.name}
					</span>
					<span>
						{profile.bio}
						<a target="_blank" href={profile.html_url}>
							Mi Github
						</a>

					</span>
				</div>
			</section>
		</>
	)

};

export default LandingPage;