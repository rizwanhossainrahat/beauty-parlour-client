import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase/useFirebase';

export const AuthContex=createContext(null)
const AuthProvider = ({children}) => {
    const allContext=useFirebase()
    return (
        <AuthContex.Provider value={allContext}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;