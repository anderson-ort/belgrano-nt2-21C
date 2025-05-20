import React, { useState } from 'react';
// import { signIn } from '../services/auth.service';
import styles from "./SignIn.module.css"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    // setLoading(true);
    // setError(null);
    // try {
    //   const user = await signIn(email, password);
    //   console.log('Usuario logueado:', user);
    //   // redireccionar a recipes o dashboard
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        className={styles.button}
      >
        {loading ? 'Cargando...' : 'Entrar'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
