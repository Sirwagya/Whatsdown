
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase'; 
import { useEffect } from 'react';

const loginpage = (props) => {
    const setislogged = props.setislogged;
    const navigate = useNavigate();
    
    useEffect(() => {
        if (props.islogged) {
            navigate("/");
        }
    }, [props.islogged, navigate]);

    const handleLogin = async() => {
        const result = await signInWithPopup(auth, new GoogleAuthProvider());
        console.log(result);
        
        setislogged(true);
        navigate("/");
        alert("User logged in")
    }
  return (
    <>
    <div>loginpage</div>
    <div class="flex gap-4">
    <button class="text-white h-12 w-24 bg-sky-500 hover:bg-sky-700 rounded-xl " onClick={handleLogin}>Login</button>
    </div>
    </>
  )
}

export default loginpage