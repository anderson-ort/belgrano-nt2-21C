import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "../_constants/constants";
import { externalProfileStore } from "../_store/externalProfileStore";
import { userSessionStore } from "../_store/sessionStore";

const authUserApi = axios.create({ baseURL: config.LOCAL_AUTH_URL });

const githubApi = axios.create({ baseURL: config.GITHUB_API_USER_BASE });

githubApi.interceptors.response.use(
	(response) => response,
	(error) => {
		if (
			error.config?.url?.includes("/logout") ||
			error.response?.status === 401
		) {
			userSessionStore.getState().logout();
			externalProfileStore.getState().clearProfile();
		}

		return Promise.reject(error);
	},
);

export const getUser = async ({ username }) => {
	const { data } = await authUserApi.get("/userAuth", {
		params: username ? { githubAlias_like: username } : {},
	});
	return data;
};

// interceptors -->
export const getUserData = async (username) => {
	const { data } = await githubApi.get(`${username}`);
	return data;
};

export const getUserRepos = async (username) => {
	const { data } = await githubApi.get(`${username}/repos`);
	return data;
};

export const signupRequest = async (payload) => {
	const { data } = await authUserApi.post("/userAuth", payload);
	return data;
};

export const useReposData = (username, enabled = false) => {
	return useQuery({
		queryFn: () => getUserRepos(username),
		queryKey: ["repos", username],
		enabled: enabled
	});
};

// deberia ir  en hooks

export const useLoginUserMutation = () => {
	return useMutation({
		mutationFn: async (username) => {
			const data = await getUser({ username });

			const { githubAlias } = !data ? {} : data[0];

			if (!githubAlias) return;

			try {
				const response = await getUserData(githubAlias);
				externalProfileStore.getState().setProfile(response);
			} catch (err) {
				console.error("No se pudo cargar el perfil externo:", err);
			}
			return data;
		},
	});
};

export const useProfileData = () => {
	return useMutation({
		mutationFn: (username) => {
			const data = getUserData(username);
			externalProfileStore.getState().setProfile(data);
			return data;
		},
	});
};


export const useSignup = () => {
	return useMutation({
		mutationFn: signupRequest,
		onSuccess: async (data) => {
			const rename = ({ githubAlias: username, ...rest }) => ({
				username,
				...rest,
			});
			userSessionStore.getState().login(rename(data)); // login directo

			if (data.githubAlias) {
				try {
					const response = await getUserData(data.githubAlias);
					externalProfileStore.getState().setProfile(response);
				} catch (err) {
					console.error("No se pudo cargar el perfil externo:", err);
				}
			}
		},
	});
};

