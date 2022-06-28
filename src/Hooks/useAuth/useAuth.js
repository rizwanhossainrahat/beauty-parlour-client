import { useContext } from "react";
import { AuthContex } from "../../Contex/AuthProvider/AuthProvider";


const useAuth=()=>{
    return useContext(AuthContex)
}

export default useAuth;