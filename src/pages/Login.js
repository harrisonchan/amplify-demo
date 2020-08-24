import React, {useState, useEffect, useContext} from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, Button, NavItem, NavLink} from 'reactstrap';
import './Login.css'
import '../StyleSheet.css'
import {auth, signInWithGoogle} from '../Firebase'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../providers/UserProvider'

const emailInput = [];
const tempUserInput = [];

const Login = () => {
    let history = useHistory()
    const user = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    useEffect(() => {
        if(user) {
            history.push('./Profile')
        }
    }, [user])

    const testUserInput = () => {
        console.log("hello")
    }

    const signInWithEmailAndPasswordHandler = (event, email, pw) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, pw)
            .then(() => history.push('./Profile'))
            .catch(error => {console.error("Error signing in with password and email", error)})
    }

    return(
        <div className="Login">
            <div className='Display1'>
                <text className='header1'>登入會員</text>
                <div className='Display1' style={{borderBottom: '1px solid #bbb', marginTop:'3vh'}}>
                    <Button style={{marginBottom:'2vh'}} onClick={() => {
                                try {
                                    signInWithGoogle()
                                } catch(error) {
                                    console.log('Error signing in with Google', error)
                                }
                            }}>使用 Google 登入</Button>
                </div>
                <text className='header2 alignFlexStart'>電子郵件</text>
                <InputGroup>
                    <Input placeholder="請輸入電子郵件"  onChange={(val) => setEmail(val.target.value)}  type='email'/>
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <text className='header2 alignFlexStart'>密碼</text>
                <InputGroup>
                    <Input placeholder="請輸入密碼" onChange={(val) => setPw(val.target.value)} type='password'/>
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <NavLink href='./PasswordRetrieval' className='alignFlexStart' style={{padding:0}}>忘記密碼？</NavLink>
                <Button onClick={(event) => signInWithEmailAndPasswordHandler(event, email, pw)}>登入</Button>
                <div style={{display:'flex', justifyContent:'center', marginTop:'1vh'}}>
                    <text>還沒有會員帳號嗎？</text>
                    <NavLink href='./RoleSelection' style={{padding:0}}>馬上註冊</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login;