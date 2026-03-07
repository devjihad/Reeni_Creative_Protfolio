import React, { Children, createContext, useState } from 'react';

export const contextData = createContext()
const Context = ({children}) => {
    const [togglevalue, settogglevalue] =useState(true)
    const data ={
        togglevalue,
        settogglevalue
    }
    return (
        <contextData.Provider value={data}>
            {children}
        </contextData.Provider>
    );
};

export default Context;