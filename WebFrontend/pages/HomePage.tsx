import React from "react";
import { useAuth } from "../src/auth/AuthContext";

const HomePage:React.FC = () => {
    const{user,logout}=useAuth();

    return (
        <div style={{maxWidth:"600px",margin:"0 auto",padding:"20px"}}>
            <h1>Ana Sayfa</h1>
                <div>
                    <p>Hoşgeldiniz, {user?.fullName || user?.email}!</p>
                    <button onClick={logout}>Çıkış Yap</button>
                </div>
        </div>  
    );
}
export default HomePage;