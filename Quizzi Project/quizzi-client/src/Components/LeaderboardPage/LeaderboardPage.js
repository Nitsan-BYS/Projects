import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import styles from './LeaderboardPage.module.css';
import httpService from '../../Services/httpService';

const LeaderboardPage = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(httpService.getUrl('api/players'), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const sortDataWithRank = data
            .sort((a, b) => {
              if (a.gamesWins > b.gamesWins) {
                return -1;
              }
              if (a.gamesWins < b.gamesWins) {
                return 1;
              }
              return 0;
            })
            .map((item, idx) => {
              const newItem = { ...item };
              newItem['rank'] = idx + 1;
              return newItem;
            });
          setPlayers(sortDataWithRank);
        });
    };
    fetchData();
  }, []);

  const columns = [
    { id: 'rank', label: 'Rank', align: 'left', minWidth: 1 },
    { id: 'player', label: 'Player', align: 'left', minWidth: 1 },
    { id: 'score', label: 'Points', align: 'left', minWidth: 1 },
  ];

  return (
    <TableContainer sx={{ maxWidth: 1200 }} className={styles.container}>
      <Typography variant='h4' component='h4' align='center' id={styles.title}>
        <b>LEADERBOARD </b>
      </Typography>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                sx={{ minWidth: 80, color: '#F84570', fontWeight: 'bold' }}
                key={column.id}
                align={column.align}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => {
            return (
              <TableRow key={player.id} hover role='checkbox' tabIndex={-1}>
                {['rank', 'name', 'pointsEarned'].map((field) => {
                  return (
                    <TableCell
                      key={field}
                      align={'left'}
                      sx={{ color: '#F84570' }}
                    >
                      {player[field]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderboardPage;
