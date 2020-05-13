import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {ToastsContainer, ToastsStore} from 'react-toasts';


import {Button, Form, TextArea} from "semantic-ui-react";


const useStyles = makeStyles(theme => ({
    root: {


        backgroundColor: theme.palette.background.paper,
        paddingTop: '7%',
        paddingBottom: '7%',
        paddingLeft: '20%',
        paddingRight: '20%',
    },


}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function Contact() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <List component="nav" aria-label="main contact list">
                <ListItem button  onClick=  {() => {window.open("https://www.instagram.com/shivakotipraphul/")}}
                >
                    <ListItemIcon>
                        <InstagramIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Instagram" />
                    <ListItemText secondary="shivakotipraphul" />
                </ListItem>
                <ListItem button  onClick=  {() => window.open("https://www.facebook.com/retra.tardigrades")}
                >
                    <ListItemIcon>
                        <FacebookIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Facebook" />
                    <ListItemText secondary="Praphul Shivakoti" />
                </ListItem>
                <ListItem button  onClick=  {() => window.open(" https://www.linkedin.com/in/praphuls/")}
                >
                    <ListItemIcon>
                       <LinkedInIcon/>
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                    <ListItemText secondary="praphuls" />

                </ListItem>
                <ListItem button  onClick=  {() => window.open(" https://github.com/ICARUS343")}
                >
                    <ListItemIcon>
                       <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                    <ListItemText secondary="icarus343" />

                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary contact folders">

                 <ListItemLink onClick={() => {navigator.clipboard.writeText("shivakotipraphul@gmail.com");
                     ToastsStore.success("Copied to clipboard!")}}>
                     <ToastsContainer store={ToastsStore}/>




                    <ListItemText primary="Email" /> <a>shivakotipraphul@gmail.com</a>
                </ListItemLink>
                <ListItemLink onClick={() =>  {navigator.clipboard.writeText("+1 4692355128");
                    ToastsStore.success("Copied to clipboard!")}}>
                    <ToastsContainer store={ToastsStore}/>

                    <ListItemText primary="Phone US" /> <a>+1 4692355128</a>

                </ListItemLink>
                <ListItemLink onClick={() =>  {navigator.clipboard.writeText("+44 07916724631");
                    ToastsStore.success("Copied to clipboard!")}}>
                    <ToastsContainer store={ToastsStore}/>
                    <ListItemText primary="Phone UK" /> <a>+44 07916724631</a>
                </ListItemLink>
            </List>

            <Form>


                <Form.Field
                    control={TextArea}
                    label='Want to send a message?'
                    placeholder='Leave a message...'
                />
                <Form.Field control={Button}>SEND</Form.Field>
            </Form>



        </div>

    );
}
