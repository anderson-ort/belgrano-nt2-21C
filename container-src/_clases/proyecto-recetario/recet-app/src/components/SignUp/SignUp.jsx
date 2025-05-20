import React, { useRef, useState } from 'react';
import styles from './SignUp.module.css';
import { signUp } from '../../auth/auth.service';
// import { signUp } from '../services/auth.service';

export default function SignUp() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null);

    const handleSignUp = async () => {
        setLoading(true);
        setError(null);
        try {
            const { message } = await signUp(emailRef.current.value, passwordRef.current.value);;
            setMessage(message)
            console.log(message);
        } catch (err) {
            console.error(err.message);
            setError('Email o contraseña incorrectos');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>SignUp</h2>

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
                onClick={handleSignUp}
                disabled={loading}
                className={styles.button}
            >
                {loading ? 'Cargando...' : 'Crear cuenta'}
            </button>

            {error && <p className={styles.error}>{error}</p>}
            {message && <p> {message}</p>}
        </div>
    );
}
