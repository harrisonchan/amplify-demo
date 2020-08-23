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

class CreatorRegister extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            pwInput: '',
            pwCheckInput: '',
            pwValid: false,
            pwMatch: true,
            currDate: '',
            dateValid: true,
            yearInput: 0,
            monthInput: 0,
            dayInput: 0,
            genderDropdownOpen: false,
            genderInput: '',
            validGender: false,
        }
    }

    componentDidMount() {
        this.setState({currDate: this.parseDate()})
    }

    parseDate() {
        let date = new Date()
        let year = date.getFullYear().toString()
        let month = (date.getMonth() + 1).toString()
        let day = date.getDate().toString()
        if (/^(?!0)[\d]{1}$/.test(month)) {
            month = '0' + month
        }
        if (/^(?!0)[\d]{1}$/.test(day)) {
            day = '0' + day
        }
        date = year + '-' + month + '-' + day
        return date
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
        if(
            dateArr.length == 1 ||
            Date.parse(this.state.currDate) < Date.parse(date) ||
            Date.parse(date) < Date.parse('1930-01-01')) {
            this.setState({dateValid: false})
        } else {
            this.setState({yearInput: dateArr[0], monthInput: dateArr[1], dayInput: dateArr[2], dateValid: true})
        }
    }

    checkEmail(email) {

    }

    testStuff() {
        // let d1 = new Date(1, 8, 1)
        // let d2 = new Date().getDate()
        // let ddd = d1.getMonth()
        // console.log(d2)
    }

    render() {
        return(
            <div className='CreatorRegister'>
                <div className='Display1'>
                    <text className='header1 alignFlexStart'>註冊會員</text>
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
                        <Input placeholder="請輸入電子郵件作為您的帳號" className='input1' type='email' 
                        onChange={(val) => console.log(val.target.value)}
                        />
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
                        <Input className='input1' type='date' min='1930-01-01' max={this.state.currDate}
                            onChange={(val) => this.handleDate(val.target.value)}/>
                            <InputGroupAddon addonType='append'></InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>性別</text>
                    <InputGroup>
                        <Input className='input1' type='select' onChange={(val) => this.setState({genderInput: val.target.value}, () => {
                            if(this.state.genderInput == '') {
                                this.setState({validGender:false})
                            } else {
                                this.setState({validGender:true})
                            }
                        })}> 
                                <option value=''>選擇性別</option>
                                <option value='男性'>男性</option>
                                <option value='女性'>女性</option>
                                <option value='其他'>其他</option>
                        </Input>
                    </InputGroup>
                    <Button style={{marginTop:'4vh'}} onClick={() => this.testStuff()}>註冊會員</Button>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'1vh', alignSelf:'flex-start'}}>
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