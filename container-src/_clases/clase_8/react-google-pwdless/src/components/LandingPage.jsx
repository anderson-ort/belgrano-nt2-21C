import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../auth/authClient";

const LandingPage = () => {
  const [session, setSession] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const navigate = useNavigate();

  // Detectar cambios de conexión
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Obtener sesión
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Fetch de tareas cuando haya sesión
  useEffect(() => {
    if (!session) return;

    const fetchTasks = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching tasks:", error.message);
      } else {
        setTasks(data);
      }
    };

    fetchTasks();
  }, [session]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    navigate("/signin");
  };

  if (!session) {
    return (
      <div className="text-center text-gray-700 dark:text-white py-10">
        <p>No estás logueado. Por favor iniciá sesión.</p>
      </div>
    );
  }

  return (
    <div className="p-6 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bienvenido, {session.user.email}</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Cerrar sesión
        </button>
      </div>

      {isOffline && (
        <div className="bg-yellow-300 text-black p-2 rounded mb-4">
          Estás offline. Mostrando datos en caché.
        </div>
      )}

      <h2 className="text-xl font-semibold mb-2">Tus tareas:</h2>
      {tasks.length === 0 ? (
        <p>No tenés tareas todavía.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? "line-through text-gray-500" : ""}>
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LandingPage;
