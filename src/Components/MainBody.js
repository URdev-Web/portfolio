import _ from 'lodash'
import React, { Component } from 'react'
import left from '../images/left.png'
import right from '../images/right.png'
import {Link} from 'react-router-dom'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'


const overlayStyle = {
    float: 'left',
    margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
    ...overlayStyle,
    position: 'fixed',
    top: '80px',
    zIndex: 10,
}

const overlayMenuStyle = {
    position: 'relative',
    left: 0,
    transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: '800px',
}

const LeftImage = () => (
    <Image
        floated='left'
        size='medium'
        src={right}
        style={{ margin: '2em 2em 2em -4em' }}
    />
)

const RightImage = () => (
    <Image
        floated='right'
        size='medium'
        src={left}
        style={{ margin: '2em -4em 2em 2em' }}
    />
)

const Paragraph1 = () => (
    <p>
        {[
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
            'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
        ].join('')}
    </p>
)


const Paragraph = () => (
    <p>
        {[
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
            'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
            'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
            'accumsan porttitor, facilisis luctus, metus',
        ].join('')}
    </p>
)

export default class StickyLayout extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
        activeItem: 'RocDev',
    }

    handleOverlayRef = (c) => {
        const { overlayRect } = this.state

        if (!overlayRect) {
            this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
        }
    }

    stickOverlay = () => this.setState({ overlayFixed: true })

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickOverlay = () => this.setState({ overlayFixed: false })

    unStickTopMenu = () => this.setState({ menuFixed: false })


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { menuFixed, overlayFixed, overlayRect } = this.state

        return (
            <div>
                {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
                <style>
                    {`
          html, body {
            background: #fff;
          }
        `}
                </style>


                {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}


                <Container text>
                    {_.times(1, (i) => (
                        <Paragraph1 key={i} />
                    ))}

                    {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.

              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
                    <Visibility
                        offset={80}
                        once={false}
                        onTopPassed={this.stickOverlay}
                        onTopVisible={this.unStickOverlay}
                        style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
                    />

                    <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
                        <Menu
                            icon='labeled'
                            style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
                            vertical
                        >
                            <Menu.Item>
                                <Icon name='facebook' />
                                FaceBook
                            </Menu.Item>

                            <Menu.Item>
                                <Icon name='github' />
                                GitHub
                            </Menu.Item>

                            <Menu.Item>
                                <Icon name='mail' />
                                Email
                            </Menu.Item>
                        </Menu>
                    </div>



                    <Paragraph />
                    <RightImage />

                    {_.times(2, (i) => (
                        <Paragraph key={i} />
                    ))}
                    <LeftImage />

                    <Paragraph />
                    <RightImage />

                    {_.times(2, (i) => (
                        <Paragraph key={i} />
                    ))}
                </Container>

                <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
                    <Container textAlign='center'>
                        <Grid columns={4} divided stackable inverted>
                            <Grid.Row>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 1' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 2' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Group 3' />
                                    <List link inverted>
                                        <List.Item as='a'>Link One</List.Item>
                                        <List.Item as='a'>Link Two</List.Item>
                                        <List.Item as='a'>Link Three</List.Item>
                                        <List.Item as='a'>Link Four</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header inverted as='h4' content='Footer Header' />
                                    <p>
                                        Extra space for a call to action inside the footer that could help re-engage
                                        users.
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Divider inverted section />
                        <Image src='/logo.png' centered size='mini' />
                        <List horizontal inverted divided link size='small'>
                            <List.Item as='a' href='#'>
                                Site Map
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                            </List.Item>
                        </List>
                    </Container>
                </Segment>
            </div>
        )
    }
}
