import React, { useRef, useState } from 'react';
import styles from "./SignIn.module.css"
import { signIn } from '../../auth/auth.service';
import { useNavigate } from 'react-router';

export default function Login() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { message } = await signIn(emailRef.current.value, passwordRef.current.value);
      navigate("/profile")
    } catch (err) { 
      console.error(err.message);
      setError('Email o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>

      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        className={styles.input}
      />

      <input
        ref={passwordRef}
        type="password"
        placeholder="Contraseña"
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
