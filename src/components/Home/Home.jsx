import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
    const authInfo=useContext(AuthContext)
    console.log(authInfo);
    return (
        <div>
        <h2 className="text-3xl">This is Home: {authInfo.name} </h2>      
        </div>
    );
};

export default Home;