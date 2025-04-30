import { useState } from "react";
import "./Login.css"
import { getUserFromGitHub } from "../../helpers/checkLoginUser";
import { useStoreUser } from "../../stores/useStoreUser";
import { useNavigate } from "react-router";




const Login = () => {

    const navigate = useNavigate()
    const initFormValue = { githubAlias: '', password: "" }
    const { user, loginUser } = useStoreUser()
    const [form, setForm] = useState(initFormValue)
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        const requestBody = { ...form, [e.target.name]: e.target.value }
        setForm(requestBody)

    }

    console.log(user);

    const resetForm = () => {
        setForm(initFormValue)
    }


    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const { githubAlias } = form;
        try {

            const data = await getUserFromGitHub(githubAlias)

            if (data.status == 404) {
                setError(true)
                return
            }



            loginUser(data)
            resetForm()
            navigate("/")



        } catch (e) {
            console.log(e.message);
        }


    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title"> Login </h2>

                <form className="auth-form" onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Alias</label>
                        <input
                            name="githubAlias"
                            value={form.githubAlias}
                            onChange={handleChange}
                            required
                            className="form-control"
                            placeholder="githubAlias"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={form.password}
                            required
                            className="form-control"
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Login
                    </button>

                    {error && <div style={{ color: "red" }}>El usuario en GitHub no existe</div>}

                </form>
            </div>
        </div>
    );

}

export default Login