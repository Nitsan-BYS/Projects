import { useState,useEffect } from "react";
import { Link, AppBar, IconButton, SwipeableDrawer, Divider, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GradeIcon from '@mui/icons-material/Grade';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import jwt from "jsonwebtoken";

const Header = () => {
    const navigate = useNavigate();

    const useStyles = makeStyles((theme) => ({
        link: {
            marginRight: '18vh',
            color: '#F84570',
        },
        paper:{
            backgroundColor: '#2A0D2E',
        },
    }));

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/login')
            }
        } else {
            navigate('/login')
        }
    }, []);


    const logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        navigate('/login')
    }
    const navigationLinks = [
        { name: "Home", href: "/", icon: <HomeIcon className={classes.icon} /> },
        { name: "Profile", href: "/profile", icon: <PersonIcon className={classes.icon} /> },
        { name: "Leaderboard", href: "/leaderboard", icon: <GradeIcon className={classes.icon} /> },
        { name: "logout", href: "/login", click: (logoutUser), icon: <ExitToAppIcon className={classes.icon} /> },

    ];
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    return (
        <AppBar id={classes.nav} position="sticky" >
            <Toolbar disableGutters>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon className={classes.menuIcon} />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Quizzi
                </Typography>
            </Toolbar>
            <SwipeableDrawer className={{ paper: makeStyles.paper }} anchor="left" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} >
                <div onClick={() => setOpen(false)} onKeyPress={() => setOpen(false)} role="button" tabIndex={0} >
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                </div>
                <Divider />
                <List >
                    {navigationLinks.map((item) => (
                        <ListItem key={item.name}>
                            {item.icon}
                            <Link
                                className={styles.link} color="textPrimary" variant="button" underline="none" href={item.href} icon={item.icon}
                                onClick={item.click} >
                                {item.name}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </AppBar>
    );
}
export default Header;