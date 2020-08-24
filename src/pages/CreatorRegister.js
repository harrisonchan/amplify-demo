import React, {useState, useEffect} from 'react';
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
import {auth, signInWithGoogle, createUserDocument} from '../Firebase';
import {useHistory} from 'react-router-dom'

const CreatorRegister = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [pwCheck, setPwCheck] = useState('')
    const [pwValid, setPwValid] = useState(false)
    const [pwMatch, setPwMatch] = useState(true)
    const [currDate, setCurrDate] = useState('')
    const [dateValid, setDateValid] = useState(true)
    const [year, setYear] = useState(0)
    const [month, setMonth] = useState(0)
    const [day, setDay] = useState(0)
    const [date, setDate] = useState(0)
    const [gender, setGender] = useState('')
    const [validGender, setValidGender] = useState(false)

    let history = useHistory()

    const resetFields = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPw('')
        setPwCheck('')
        setPwValid(false)
        setPwMatch(true)
        setDateValid(true)
        setYear(0)
        setMonth(0)
        setDay(0)
        setDate(0)
        setGender('')
        setValidGender(false)
    }

    useEffect(() => {
        setCurrDate(parseDate());
        //Check Gender Validity
        if(gender == '') {
            setValidGender(false)
        } else {
            setValidGender(true)
        }
        //Check PW Match
        if(pw == pwCheck || pw == '' || pwCheck == '') {
            setPwMatch(true)
            setPwCheck(pwCheck)
        } else {
            setPwMatch(false)
            setPwCheck(pwCheck)
        }
    }, [currDate, pwCheck, gender])

    const parseDate = () => {
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

    const checkPwValid = () => {
        setPwValid(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(pw))
    }

    const handleDate = (date) => {
        setDate(date)
        let dateArr = date.split('-')
        if(
            dateArr.length == 1 ||
            Date.parse(currDate) < Date.parse(date) ||
            Date.parse(date) < Date.parse('1930-01-01')) {
            setDateValid(false)
        } else {
            setYear(dateArr[0])
            setMonth(dateArr[1])
            setDay(dateArr[2])
            setDateValid(true)
        }
    }

    const checkEmail = (email) => {

    }

    const testStuff = () =>  {
        
    }

    const register = () => {
        let state = this.state
        console.log('First Name: ' + firstName + ', Last Name: ' + lastName, ', Email: ' + email + ', Password: ' + pw+ ', Date: ' + date + ', Gender: ' + gender)
    }

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault()
        if(pwValid && pwMatch && dateValid && validGender) {
            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password)
                createUserDocument(user, {firstName, lastName, date, gender})
                resetFields();
                history.push('./Profile')
            } catch(error) {
                console.log('Error creating user with password and email', error)
            }
        } else {
            console.log('Invalid Fields')
        }
    }

        return(
            <div className='CreatorRegister'>
                <div className='Display1'>
                    <text className='header1 alignFlexStart'>註冊會員</text>
                    <text className='header2 alignFlexStart'>名字</text>
                    <InputGroup>
                        <Input placeholder="請輸入姓氏" className='input1' 
                        onChange={(val) => setFirstName(val.target.value)}/>
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="請輸入名字" className='input1'  
                        onChange={(val) => setLastName(val.target.value)}/>
                        <InputGroupAddon addonType="append">
                        </InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>電子郵件地址</text>
                    <InputGroup>
                        <Input placeholder="請輸入電子郵件作為您的帳號" className='input1' type='email' 
                         onChange={(val) => setEmail(val.target.value)}
                        />
                        <InputGroupAddon addonType="append"></InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>密碼</text>
                    <text className='font1 alignFlexStart' 
                        style={pwValid ? {color:'#46AB55'} : {color:'#FF9191'}}>
                        請輸入8到16位字元，英數字混合，並包含符號之密碼</text>
                    {!pwMatch && <text className='font1 alignFlexStart' 
                        style={{color:'#FF9191'}}>
                        密碼不合</text>  }                  
                    <InputGroup>
                        <Input placeholder="請設定登入密碼" className='input1' type='password'
                            onChange={(val) => {checkPwValid(); setPw(val.target.value)}}/>
                        <InputGroupAddon addonType="append"></InputGroupAddon>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="請再輸入一次密碼" className='input1' type='password'
                            onChange={(val) => setPwCheck(val.target.value)}/>
                        <InputGroupAddon addonType="append">
                        </InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>生日</text>
                    {!dateValid && <text className='font1 alignFlexStart' 
                        style={{color:'#FF9191'}}>
                        日期錯誤</text>  }   
                    <InputGroup>
                        <Input className='input1' type='date' min='1930-01-01' max={currDate}
                            onChange={(val) => handleDate(val.target.value)}/>
                            <InputGroupAddon addonType='append'></InputGroupAddon>
                    </InputGroup>
                    <text className='header2 alignFlexStart'>性別</text>
                    <InputGroup>
                        <Input className='input1' type='select' onChange={(val) => setGender(val.target.value)}> 
                                <option value=''>選擇性別</option>
                                <option value='男性'>男性</option>
                                <option value='女性'>女性</option>
                                <option value='其他'>其他</option>
                        </Input>
                    </InputGroup>
                    <Button style={{marginTop:'4vh'}} onClick={(event) => {
                        createUserWithEmailAndPasswordHandler(event, email, pw)}}>註冊會員</Button>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'1vh', alignSelf:'flex-start'}}>
                        <text>已經有帳號嗎？</text>
                        <NavLink href='./Login' style={{padding:0}}>馬上登入</NavLink>
                    </div>
                    <div className='Display1' style = {{borderTop: '1px solid #bbb', marginTop:'3vh'}}>
                        <span style = {{marginTop:'3vh'}}/>
                        <Button onClick={() => console.log('hey')}>使用 Facebook 註冊</Button>
                        <Button style={{marginTop:'2vh'}} onClick={() => {
                            try {
                                signInWithGoogle()
                                history.push('./Profile')
                            } catch(error) {
                                console.log('Error signing in with Google', error)
                            }
                        }}>使用 Google 註冊</Button>
                    </div>
                </div>
            </div>
        )
}

export default CreatorRegister;
