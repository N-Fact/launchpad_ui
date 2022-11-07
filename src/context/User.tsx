import { createContext, useState } from "react";

type props = {
    children: any;
}

const User = createContext({} as any);

export const UserProvider = ({ children }: props) => {
    const [user, setUser] = useState();

    const values = {
        user,
        setUser
    }

    return <User.Provider value={values}>{children}</User.Provider>
}

export default User;