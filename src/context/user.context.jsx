import { createContext, useState } from 'react';
// Import the createContext method.

// Think of context as 2 pieces which is the context and provider.
// This creates a variable from the createContext.
// Contains a default variable that we want to access.
// We create a base empty context by setting the context to null.
export const UserContext = createContext({
    currentUser: null, //empty object
    setCurrentUser: () => null, //empty function
});

// Provider is the actual component.
// Provider sets and gets the value of any component in the App through the children prop.
// We create a base empty state by setting the initial value to 'null'
export const UserProvider = ({ children }) => {
    // Provider allows any child component
    const [ currentUser, setCurrentUser ] = useState(null);
    const value = { currentUser, setCurrentUser};


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}