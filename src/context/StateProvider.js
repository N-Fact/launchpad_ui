import axios from "axios";
import { createContext, useState } from "react";
const getUser = async (value) => {
    const res = await axios.get('https://blockchain.novemyazilim.com/api/v1/user/' + sessionStorage.id);
    value.user = res.data;
};


const UserContext = createContext();
export const UserProvider = ({ children }) => {
    // console.log("wqewqe");
    const [user, setUser] = useState(null);

    const values = {
        user,
        setUser,
    };
    if (sessionStorage.id != null) {
        getUser(values);
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;

