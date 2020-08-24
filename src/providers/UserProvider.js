import React, { Component, createContext, useState, useContext, useEffect } from "react";
import { auth, createUserDocument } from "../Firebase";


export const UserContext = createContext({ user: null });

class UserProvider extends Component {
    state = {
        user: null
    };

    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {
        const user = await createUserDocument(userAuth);
        this.setState({ user });
        });
    };

    render() {
        const { user } = this.state;
        return (
            <UserContext.Provider value={user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

// const UserProvider = () => {
//     const [user, setUser] = useContext(null)

//     useEffect(() =>{
//         auth.onAuthStateChanged(async (userAuth) => {
//             const user = await createUserDocument(userAuth);
//             setUser(user);
//         })
//     }, [])

//     return(
//         <UserContext.Provider value={user}>
//                 {this.props.children}
//         </UserContext.Provider>
//     )
// }

export default UserProvider;