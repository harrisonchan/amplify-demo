import React, {useState, useContext, useEffect} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import './NavigationBar.css';
import {UserContext} from '../providers/UserProvider'
import {auth} from '../Firebase'
//import {Link} from 'react-router-dom';

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const user = useContext(UserContext)

    useEffect(() => {
      console.log('mounted')
    }, [])
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">StarAtlas</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div className='NavContent1'>
                <UncontrolledDropdown nav inNavbar className='NavItem'>
                  <DropdownToggle nav caret>創業者</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className='NavItem'>
                  <DropdownToggle nav caret>投資者</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem className='NavItem'>
                  <NavLink href="/About">關於星圖</NavLink>
                </NavItem>
              </div>
              <NavItem>
                {user ? <NavLink href="/" onClick={() => {auth.signOut()}}>登出</NavLink> : <NavLink href="/Login">登入</NavLink>}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavigationBar;