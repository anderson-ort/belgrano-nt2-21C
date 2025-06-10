import React, { useRef, useState } from 'react';
import styles from "./SignUp.module.css"
import { useNavigate } from 'react-router';
import { useUserStorage } from '../../stores/useUserStorage';
import { supabase } from '../../auth/supabase.auth';
import { signUp } from '../../auth/auth.service';

export default function SignUp() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser, setFavorites } = useUserStorage()

  const handleSignup = async () => {
    setLoading(true);
    setError(null);
    try {

      const { user } = await signUp(emailRef.current.value, passwordRef.current.value);

      console.log(user);

      navigate("/signin")

    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registrarse</h2>

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
        onClick={handleSignup}
        disabled={loading}
        className={styles.button}
      >
        {loading ? 'Cargando...' : 'Registrarse'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
