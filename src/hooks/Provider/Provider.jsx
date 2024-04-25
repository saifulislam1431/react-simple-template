import React, { createContext, useState } from 'react';


export const WrapperContext = createContext(null);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerInfo = {
        user,
        setUser
    }
    return (
        <WrapperContext.Provider value={providerInfo}>
            {children}
        </WrapperContext.Provider>
    );
};

export default Provider;