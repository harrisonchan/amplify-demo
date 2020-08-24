import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Main from './Main';
import About from './About';
import Login from './Login';
import Profile from './Profile'
import RoleSelection from './RoleSelection';
import CreatorRegister from './CreatorRegister';
import Register from './Register';
import PasswordRetrieval from './PasswordRetrieval';
import Footer from '../components/Footer'
import UserProvider, {UserContext} from '../providers/UserProvider'

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


function Application() {
  const user = useContext(UserContext)
  return (
      <BrowserRouter>
        <div className="Application">
          <NavigationBar/>
          <Route exact path='/' component = { Main }/>
          <Route exact path='/Profile' component = { Profile }/>
          <Route path='/About' component = { About }/>
          <Route path='/Login' component = { Login }/>
          <Route path='/RoleSelection' component = { RoleSelection }/>
          <Route path='/CreatorRegister' component = { CreatorRegister }/>
          <Route path='/PasswordRetrieval' component = { PasswordRetrieval }/>
          <Footer />
        </div>
      </BrowserRouter>

  );
}


// const firebaseConfig = {
//     apiKey: "AIzaSyDpQz_-XUllVcm93Nt64xEVEhAzbbo-DOc",
//     authDomain: "staratlas-demo.firebaseapp.com",
//     databaseURL: "https://staratlas-demo.firebaseio.com",
//     projectId: "staratlas-demo",
//     storageBucket: "staratlas-demo.appspot.com",
//     messagingSenderId: "389625505254",
//     appId: "1:389625505254:web:b25a1d85f83edeeafe2227",
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider)
// }

// export const createUserDocument = async (user, additionalData) => {
//     if(!user) {
//         return
//     }
//     const userRef = firestore.doc(`users/${user.uid}`)
//     const snapshot = await userRef.get()

//     if(!snapshot.exists) {
//         const { firstName, lastName, email, date, gender } = user
//         try {
//             await userRef.set({
//                 firstName,
//                 lastName,
//                 email,
//                 date,
//                 gender,
//                 ...additionalData
//             })
//         } catch(error) {
//             console.error("Error creating user document", error)
//         }
//     }
//     return getUserDocument(user.uid)
// }

// export const getUserDocument = async (uid) => {
//     var user = firebase.auth().currentUser;
    
//     if(!uid) {
//         return null
//     }
//     try {
//         const userDocument = await firestore.doc(`users/${uid}`).get()
//         return {
//             uid,
//             ...userDocument.data()
//         }
//     } catch (error) {
//         console.error("Error fetching user document", error)
//     }
// }

// export const signOut = () => {
//     auth.signOut()
// }

export default Application;
