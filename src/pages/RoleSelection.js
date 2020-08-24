import React from 'react';
import {Button, NavLink} from 'reactstrap';
import {withRouter} from 'react-router-dom'
import './RoleSelection.css';
import '../StyleSheet.css';

class RoleSelection extends React.Component{

    nextPath(path) {
        this.props.history.push(path);
      }

    render() {
        return(
            <div className='RoleSelection'>
                <div className='Display1'>
                    <text className='header1'>選擇註冊角色</text>
                    <div className='Display2'>
                        <text className='header2 alignFlexStart'>創業者帳號可：</text>
                        <text className='alignFlexStart'>新增、編輯、下架項目、管理項目團隊人員、進度編輯及管理營運計劃書版本</text>
                        <Button onClick={() => this.nextPath('./CreatorRegister')}>我是創業者</Button>
                    </div>
                    <div className='Display2'>
                        <text className='header2 alignFlexStart'>投資者帳號可：</text>
                        <text className='alignFlexStart'>搜尋、追蹤、投資項目線上即時通訊跟創業者聯絡</text>
                        <Button onClick={() => this.nextPath('./')}>我是投資者</Button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                        <text>已經有帳號嗎？</text>
                        <Button onClick={() => this.nextPath('./Login')}>馬上登入</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(RoleSelection);