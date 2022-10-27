import { createContext } from "react"


const AuthContext = createContext();

export const UserContext = ({children}) => {
    const user = {displayName: 'Abu Sufi'}
    const authInfo = {user: user};
    return(

        <AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
        );
}