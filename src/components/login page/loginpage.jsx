import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db} from "../../../firebase";
import { Fingerprint, LogIn } from "lucide-react";
import { setDoc } from "firebase/firestore";

const Loginpage = (props) => {
  const setislogged = props.setislogged;
  const navigate = useNavigate();
  async function createUser(userInfo) {
    const userObj = userInfo.user;
    const { displayName, email, photoURL, uid } = userObj;
    const timeStamp = Date.now();
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: displayName,
      email: email,
      profile: photoURL,
      createdAt: timeStamp,
      status: "Hi, I am busy rn",
    });
  }

  useEffect(() => {
    if (props.islogged) {
      navigate("/");
    }
  }, [props.islogged, navigate]);

  const handleLogin = async () => {
    try {
      const userData = await signInWithPopup(auth, new GoogleAuthProvider());
      await createUser(userData);
      setislogged(true);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="h-[220px] bg-[#04a784]">
        <div className="flex items-center pl-30 pt-10 gap-1">
          <img className="h-8" src="icons8-whatsapp-48.png" alt="icon " />
          <div className="text-white uppercase">WhatsApp</div>
        </div>
      </div>

      <div className="bg-[#eff2f5] h-[calc(100vh-220px)] flex justify-center relative">
        <div className="bg-white h-[80%] w-[60%] flex flex-col items-center justify-center absolute top-[-100px] gap-4 shadow-xl">
          {/* fingerprint */}
          <Fingerprint
            className="h-20 w-20 text-[#04a784]"
            strokeWidth={1.5}
          ></Fingerprint>
          <div className="text-xl">Sign In</div>
          <div className="text-gray-500">
            Sign in with your google account to get started
          </div>
          <button
            className="bg-[#04a784] text-white flex gap-2 p-4 rounded-xl hover:opacity-90"
            onClick={handleLogin}
          >
            <div> Sign in with google</div>
            <LogIn></LogIn>
          </button>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
