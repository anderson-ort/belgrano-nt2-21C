import { useEffect, useState } from "react";
import { appConfig } from "../constants/apiConfig";

export const useRecetas = () => {
    const [recetas, setRecetas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecetas = async () => {
            try {
                const response = await fetch(appConfig.URL);

                if (!response.ok) {
                    throw new Error("Fail to retrieve recetas");
                }

                const data = await response.json();

                setRecetas(data.recetas);
            } catch (error) {
                setError(error.message || "Error desconocido");
            } finally {
                setLoading(false);
            }
        };

        fetchRecetas();
    }, []);

    return { recetas, loading, error };
};
