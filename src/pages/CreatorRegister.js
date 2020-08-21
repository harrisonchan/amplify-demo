import React from 'react';
import {InputGroup, InputGroupAddon, InputGroupText, Input, Button, NavItem, NavLink} from 'reactstrap';

class CreatorRegister extends React.Component{

    render() {
        return(
            <div>
                <text>註冊會員</text>
                <text>名字</text>
                <InputGroup>
                    <Input placeholder="請輸入姓氏"/>
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <Input placeholder="請輸入名字"/>
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <text>電子郵件地址</text>
                <InputGroup>
                    <Input placeholder="請輸入電子郵件作為您的帳號"/>
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <text>密碼</text>
                <text>請輸入8到16位字元，英數字混合，並包含符號之密碼</text>
                <InputGroup>
                    <Input placeholder="請設定登入密碼"/>
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <InputGroup>
                    <Input placeholder="請再輸入一次密碼"/>
                    <InputGroupAddon addonType="append">
                    </InputGroupAddon>
                </InputGroup>
                <text>生日</text>
                <text>性別</text>
                <text>已經有帳號嗎？</text>
                <NavLink href='./Login'>馬上登入</NavLink>
            </div>
        )
    }
}

export default CreatorRegister;