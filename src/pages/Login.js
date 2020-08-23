import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, Button, NavItem, NavLink} from 'reactstrap';
import './Login.css'
import '../StyleSheet.css'

const emailInput = [];
const tempUserInput = [];

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    testUserInput = () => {
        console.log("hello")
    }

    render() {
        return(
            <div className="Login">
                <div className='Display1'>
                    <text className='header1'>登入會員</text>
                    <text className='header2 alignFlexStart'>電子郵件</text>
                    <InputGroup>
                        <Input placeholder="請輸入電子郵件"/>
                        <InputGroupAddon addonType="append">
                        </InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>密碼</text>
                    <InputGroup>
                        <Input placeholder="請輸入密碼" />
                        <InputGroupAddon addonType="append">
                        </InputGroupAddon>
                    </InputGroup>
                    <NavLink href='./PasswordRetrieval' className='alignFlexStart' style={{padding:0}}>忘記密碼？</NavLink>
                    <Button>登入</Button>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'1vh'}}>
                        <text>還沒有會員帳號嗎？</text>
                        <NavLink href='./RoleSelection' style={{padding:0}}>馬上註冊</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;