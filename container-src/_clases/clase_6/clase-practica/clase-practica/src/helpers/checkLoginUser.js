import axios from "axios";

const getUserLogin = axios.create(
    { baseURL: "https://api.github.com/users/" }
)

export const getUserFromGitHub = async (githubAlias) => {
    try {

        const { data } = await getUserLogin.get(githubAlias)
        return data
    } catch (e) {
        return { status: 404 }

    }

}


