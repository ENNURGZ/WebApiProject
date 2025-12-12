import React from "react"
import { useAuth } from "../src/auth/AuthContext"; 
import { useNavigate } from "react-router-dom";
import api from "../src/lib/api";

const LoginPage: React.FC = () => {
    const{login}=useAuth();

    const navigate = useNavigate();

    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const[loading,setLoading]=React.useState(false);
    const[error,setError]=React.useState<string|null>(null);

    const onSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();  //parantezi unutursan sayfa yenilenir çalışmaz.
        setLoading(true);
        setError(null);

        try{
            const res = await api.post("/api/auth/login",{email,password});
            const {token,email:outEmail,fullName}=res.data;
            login(token,{email:outEmail,fullName});
            navigate("/");
        }   
        catch(err:any){
            setError(err.response?.data?.message || "Giriş başarisiz.");
        }
        finally{
            setLoading(false);
        }
    };

    return (
        <div style={{maxWidth:"400px",margin:"0 auto",padding:"20px"}}>
            <h2>Giriş Yap</h2>
            <form onSubmit={onSubmit}>
                <div style={{marginBottom:"10px"}}>
                    <label>Email:
                        <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </label>
                    <label>Password:
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </label>
                    {error && <div style={{color:"red"}}>{error}</div>}
                    <button type="submit" disabled={loading}>
                        {loading ? "Yükleniyor..." : "Giriş Yap"}
                    </button>
                    </div>
                    </form>
                    <p>Hesabınız yok mu? <a href="/register">Kayıt Ol</a></p>
                </div>
     );
};
export default LoginPage;
