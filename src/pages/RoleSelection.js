import React from 'react';
import {Button, NavLink} from 'reactstrap';
import './RoleSelection.css'
import '../StyleSheet.css';

class RoleSelection extends React.Component{

    render() {
        return(
            <div className='.RoleSelection'>
                <span style={{padding:10}}/>
                <h1>選擇註冊角色</h1>
                <span style={{padding:10}}>
                    <h5>創業者帳號可：</h5>
                    <text>新增、編輯、下架項目、管理項目團隊人員、進度編輯及管理營運計劃書版本</text>
                    <NavLink href='./CreatorRegister'><Button>我是創業者</Button></NavLink>
                </span>
                <span style={{padding:10}}>
                    <h5>投資者帳號可：</h5>
                    <text>搜尋、追蹤、投資項目線上即時通訊跟創業者聯絡</text>
                    <NavLink href='./InvestorRegister'><Button>我是創業者</Button></NavLink>
                </span>
                <span style={{ display: 'flex', justifyContent: 'center' }}>
                    <text>已經有帳號嗎？</text>
                    <NavLink href='./Login'><Button>馬上登入</Button></NavLink>
                </span>
            </div>
        )
    }
}

export default RoleSelection;