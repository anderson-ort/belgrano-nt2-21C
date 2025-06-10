import React, { useRef, useState } from 'react';
import styles from "./SignIn.module.css"
import { useNavigate } from 'react-router';
import { signIn } from '../../auth/auth.service';
import { useUserStorage } from '../../stores/useUserStorage';
import { supabase } from '../../auth/supabase.auth';

export default function SignIn() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser, setFavorites } = useUserStorage()

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {

      const { user } = await signIn(emailRef.current.value, passwordRef.current.value);

      setUser(user)

      const { data: fav, error } = await supabase
        .from("favorites")
        .select("recipe_id")
        .eq("user_id", user.id)


      let setInitData = fav ? fav.map(f => f.recipe_id) : []

      setFavorites(setInitData)

      navigate("/profile")
    } catch (err) {
      console.error(err.message);
      setError(err.message);
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
