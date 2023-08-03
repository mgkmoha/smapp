import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {

    const signUserOut = async () => {
        await signOut(auth);
    }

    const [user] = useAuthState(auth);

    return (
    <div>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>

        <div>
            {user && (
                <>
                    <p>{user?.displayName}</p>
                    <img src={user?.photoURL || ""} width="20" height="20"/>
                    <button onClick={signUserOut}> Logout </button>
                </>
            )}
        </div>
    </div>
    
    );
};