

import React, { Component } from 'react'
import {Container, Dropdown, Image, Menu, Segment, Visibility} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import right from "../images/right.png";
const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

export default class TopAppBar extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
        activeItem: 'RocDev',
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={this.state.menuFixed ? 'top' : undefined}
                        style={this.state.menuFixed ? fixedMenuStyle : menuStyle}
                    >
                        <Container text>
                            <Menu.Item>
                                <Image size='mini' src={right} />
                            </Menu.Item>

                            <Link to="/MainBody">
                                <Menu.Item
                                    name='RocDev'
                                    active={this.state.activeItem === 'RocDev'}
                                    onClick={this.handleItemClick}
                                />
                            </Link>
                            <Link to="/Contact">
                                <Menu.Item
                                    name='Contact'
                                    active={this.state.activeItem === 'Contact'}
                                    onClick={this.handleItemClick}
                                />
                            </Link>

                            <Menu.Menu position='right'>
                                <Dropdown text='Dropdown' pointing className='link item'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Header>Header Item</Dropdown.Header>
                                        <Dropdown.Item>
                                            <i className='dropdown icon' />
                                            <span className='text'>Submenu</span>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>List Item</Dropdown.Item>
                                                <Dropdown.Item>List Item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </Visibility>


            </div>
        )
}
}