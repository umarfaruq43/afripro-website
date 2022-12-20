import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";

const ActiveNav = createContext();

const Context = ({ children }) => {
    const navigate = useRouter();
    const [active, setActive] = useState(1);
    const handleService = (des, activeBar) => {
        console.log(activeBar, des);
        setActive(activeBar);
        navigate.push(`${des}`);
    };
    const values = {
        handleService,
        active,
        setActive,
    };
    return (
        <ActiveNav.Provider value={values}>
            ActiveNav
            {children}
        </ActiveNav.Provider>
    );
};

export default Context;

export function useCurrent() {
    return useContext(ActiveNav);
}
