import { useEffect, useState } from "react";
import { Link, Container, Button, Typography } from '@mui/material';
import httpService from '../../Services/httpService';
import styles from './Statistics.module.css';

const Statistics = () => {
    const [details, setDetails] = useState('');
    useEffect(() => {
        
        fetch(httpService.getUrl(`api/players/${localStorage.getItem('id')}`), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                localStorage.setItem('userName', data[0].name);
                setDetails(data[0]);
            })
    }, []);
    
    return (
        <Container maxWidth="xs">
            <Typography className={styles.typo} variant='h5'>Welcome, {details.name}!</Typography>
            <Typography className={styles.typo} variant='h5'>Games Won: {details.gamesWins}</Typography>
            <Typography className={styles.typo} variant='h5'>Games Lost: {details.gamesLosses}</Typography>
            <Typography className={styles.typo} variant='h5'>Total Points: {details.pointsEarned}</Typography>
            <Typography align='center'>
                <Button id={styles.editButton} href='./profile' variant="contained" color="secondary">
                Edit Account
            </Button>
            <Button id={styles.gameButt} href='./game' variant="contained" color="secondary">
                PLAY GAME
            </Button>
            </Typography>

        </Container>
    );
}

export default Statistics;