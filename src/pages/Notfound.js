import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

export function Notfound(){
    const navigate = useNavigate(); 

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }, [navigate])
    
    return <h2>Page not found</h2>
}
