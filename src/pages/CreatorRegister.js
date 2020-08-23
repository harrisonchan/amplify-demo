import React, {useState} from 'react';
import {
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Input, 
    Button, 
    NavItem, 
    NavLink, 
    Dropdown, 
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroupButtonDropdown
} from 'reactstrap';
import './CreatorRegister.css';
import '../StyleSheet.css';

const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
const year = []

class CreatorRegister extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            pwInput: '',
            pwCheckInput: '',
            pwValid: false,
            pwMatch: true,
            dateValid: true,
            yearInput: 0,
            monthInput: 0,
            dayInput: 0,
            // dayDropdownOpen: false,
            // dayInput: '日',
            // monthDropdownOpen: false,
            // monthInput:'月',
            // yearDropdownOpen: false,
            // yearInput:'年',
            genderDropdownOpen: false,
            genderInput: '選擇性別',
        }
    }

    componentDidMount() {
        let currYear = new Date().getFullYear().valueOf()
        for(var i = 0; i <= 100 ; i++) {
            year.push(currYear - i)
        }
    }

    checkPwValid() {
        this.setState({pwValid: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(this.state.pwInput)})
    }

    matchPw() {
        if(this.state.pwInput == this.state.pwCheckInput
            || this.state.pwInput == '' 
            || this.state.pwCheckInput == '') {
            this.setState({pwMatch: true})
        } else {
            this.setState({pwMatch: false})
        }
    }

    handleDate(date) {
        let dateArr = date.split('-')
        if(dateArr.length == 1) {
            this.setState({dateValid: false})
        } else {
            this.setState({yearInput: dateArr[0], monthInput: dateArr[1], dayInput: dateArr[2]})
        }
    }

    render() {
        return(
            <div className='CreatorRegister'>
                <div className='Display1'>
                    <text className='header1'>註冊會員</text>
                    <text className='header2 alignFlexStart'>名字</text>
                    <InputGroup>
                        <Input placeholder="請輸入姓氏" className='input1'/>
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="請輸入名字" className='input1'/>
                        <InputGroupAddon addonType="append">
                        </InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>電子郵件地址</text>
                    <InputGroup>
                        <Input placeholder="請輸入電子郵件作為您的帳號" className='input1' type='email' />
                        <InputGroupAddon addonType="append"></InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>密碼</text>
                    <text className='font1 alignFlexStart' 
                        style={this.state.pwValid ? {color:'#46AB55'} : {color:'#FF9191'}}>
                        請輸入8到16位字元，英數字混合，並包含符號之密碼</text>
                    {!this.state.pwMatch && <text className='font1 alignFlexStart' 
                        style={{color:'#FF9191'}}>
                        密碼不合</text>  }                  
                    <InputGroup>
                        <Input placeholder="請設定登入密碼" className='input1' type='password'
                            onChange={(val) => {this.setState({pwInput:val.target.value}, () => {
                                this.checkPwValid();
                                this.matchPw();
                            })}}/>
                        <InputGroupAddon addonType="append"></InputGroupAddon>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="請再輸入一次密碼" className='input1' type='password'
                            onChange={(val) => {this.setState({pwCheckInput:val.target.value}, () => this.matchPw())}}/>
                        <InputGroupAddon addonType="append">
                        </InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>生日</text>
                    {!this.state.dateValid && <text className='font1 alignFlexStart' 
                        style={{color:'#FF9191'}}>
                        日期錯誤</text>  }   
                    <InputGroup>
                        <Input className='input1' type='date'
                            onChange={(val) => this.handleDate(val.target.value)}/>
                            <InputGroupAddon addonType='append'></InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>性別</text>
                    <Dropdown 
                        isOpen={this.state.genderDropdownOpen} toggle={
                            () => this.setState({genderDropdownOpen: !this.state.genderDropdownOpen})
                        }>
                        <DropdownToggle caret>{this.state.genderInput = '' ? 'select gender' : this.state.genderInput}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.setState({genderInput: '男性'})}>男性</DropdownItem>
                            <DropdownItem onClick={() => this.setState({genderInput: '女性'})}>女性</DropdownItem>
                            <DropdownItem onClick={() => this.setState({genderInput: '其他'})}>其他</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Button>註冊會員</Button>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'1vh'}}>
                        <text>已經有帳號嗎？</text>
                        <NavLink href='./Login' style={{padding:0}}>馬上登入</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatorRegister;



{/* <InputGroup>
<Dropdown
    direction='down'
    isOpen={this.state.dayDropdownOpen} toggle={
        () => this.setState({dayDropdownOpen: !this.state.dayDropdownOpen})
    }>
    <DropdownToggle caret>{this.state.dayInput = '' ? 'select day' : this.state.dayInput}</DropdownToggle>
    <DropdownMenu style={{overflowY: 'scroll', height:'30vh'}}>
        {day.map((day) => <DropdownItem onClick={() => this.setState({dayInput: day})}>{day}</DropdownItem>)}
    </DropdownMenu>
</Dropdown>
<Dropdown
    direction='down'
    isOpen={this.state.monthDropdownOpen} toggle={
        () => this.setState({monthDropdownOpen: !this.state.monthDropdownOpen})
    }>
    <DropdownToggle caret>{this.state.monthInput = '' ? 'select month' : this.state.monthInput}</DropdownToggle>
    <DropdownMenu style={{overflowY: 'scroll', height:'30vh'}}>
        {month.map((month) => <DropdownItem onClick={() => this.setState({monthInput: month})}>{month}</DropdownItem>)}
    </DropdownMenu>
</Dropdown>
<Dropdown
    direction='down'
    isOpen={this.state.yearDropdownOpen} toggle={
        () => this.setState({yearDropdownOpen: !this.state.yearDropdownOpen})
    }>
    <DropdownToggle caret>{this.state.yearInput = '' ? 'select year' : this.state.yearInput}</DropdownToggle>
    <DropdownMenu style={{overflowY: 'scroll', height:'30vh'}}>
        {year.map((year) => <DropdownItem onClick={() => this.setState({yearInput: year})}>{year}</DropdownItem>)}
    </DropdownMenu>
</Dropdown>
</InputGroup> */}