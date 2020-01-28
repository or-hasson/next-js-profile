import React from 'react';
import ActiveLink from '../ActiveLink';
import '../../styles/_header.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu} from 'reactstrap';


const BsNavLink = (props) => {
    const { route, title } = props;
    const className = props.className || "";

    return (
        <ActiveLink activeClassName="active" route={route}>
            <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
        </ActiveLink>
    )
}



export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    renderBlogMenu() {
            return (
                <Dropdown className="port-navbar-link port-dropdown-menu" nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle className="port-dropdown-toggle" nav caret>
                        Blog
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            <BsNavLink className="port-dropdown-item"
                                       route="/blogs"
                                       title="Blogs" />
                        </DropdownItem>
                        <DropdownItem>
                            <BsNavLink className="port-dropdown-item"
                                       route="/blogs/new"
                                       title="Create a Blog" />
                        </DropdownItem>
                        <DropdownItem>
                            <BsNavLink className="port-dropdown-item"
                                       route="/blogs/dashboard"
                                       title="Blogs Dashboard" />
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )


        return (
            <NavItem className="port-navbar-item">
                <BsNavLink route="/blogs" title="Blog" />
            </NavItem>
        )
    }

    render() {
        const { className } = this.props;
        const { isOpen } = this.state;

        const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

        return (
            <div>
                <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} color="transparent" dark expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">Or Hasson</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/" title="Home" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/about" title="About" />
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/portfolios" title="Portfolio" />
                            </NavItem>
                            {this.renderBlogMenu()}
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/cv" title="Cv" />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}




