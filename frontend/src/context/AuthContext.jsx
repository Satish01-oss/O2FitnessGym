import axios from 'axios';
import { createContext , useContext , useEffect , useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () =>{
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/me` , {
                withCredentials : true
            });
            setUser(res.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchUser();
    }, [])

    return (
        <AuthContext.Provider value={{ user , setUser , fetchUser , loading }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);