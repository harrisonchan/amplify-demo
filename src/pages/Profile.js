import React, {useContext, useEffect, useState, useCallback} from 'react';
import {UserContext} from '../providers/UserProvider';
import {Button} from 'reactstrap';
import {useHistory} from 'react-router-dom';
import '../StyleSheet.css'
//import {auth, getUserDocument} from '../Firebase'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const Profile = () => {
    let history = useHistory()
    const user = useContext(UserContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')
    const redirectLogin = () => {history.push('./Login')}

    // const memoizedCallback = useCallback(
    //     () => {
    //       doSomething(a, b);
    //     },
    //     [a, b],
    //   );

    useEffect(() => {
        console.log(user)
        if(user) {
            setFirstName(user.firstName)
            setLastName(user.lastName)
            setEmail(user.email)
            setDate(user.date)
            setGender(user.gender)
        }
    }, [user])

    const getUser = () => {
        var user = firebase.auth().currentUser;
        console.log(user)
    }

    return(
        <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
            {/* {
                user ? 
                    <div>
                        <text style={{fontSize:'2rem'}}>this is the your profile dashboard</text> 
                        <Button onClick={() => {
                            console.log(user)
                        }}>get user</Button>
                    </div>
                    :
                    <text style={{fontSize:'2rem'}}>not logged in</text>
            } */}
            <div style={{display:'flex', flexDirection:'column'}}>
                <text className='header1'>Profile</text>
                    <text>{'名字: '+ lastName + firstName}</text>
                    <text>{'Email: '+ email}</text>
                    <text>{'生日: '+ date}</text>
                    <text>{'gender: '+ gender}</text>
                    {/* <Button onClick={() => getUser()}>press me</Button> */}
            </div>
           
        </div>
    )
}

export default Profile;