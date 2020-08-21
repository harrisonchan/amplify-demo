import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, Button, NavItem, NavLink} from 'reactstrap';

const emailInput = [];

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    

    render() {
        return(
            <div className="Login">
                <text>登入會員</text>
                <text>電子郵件</text>
                <InputGroup>
                    <Input placeholder="請輸入電子郵件"/>
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <text>密碼</text>
                <InputGroup>
                    <Input placeholder="請輸入密碼" />
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <NavLink href='./PasswordRetrieval'>忘記密碼？</NavLink>
                <Button>登入</Button>
                <div style={{display:'flex', justifyContent:'center', marginTop:'1vh'}}>
                    <text>還沒有會員帳號嗎？</text>
                    <NavLink href='./RoleSelection' style={{padding:0}}>馬上註冊</NavLink>
                </div>
            </div>
        )
    }
}

export default Login;