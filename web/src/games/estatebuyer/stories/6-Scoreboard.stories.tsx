import React from 'react';
import { IScore, IScoreboardProps, Scoreboard } from '../Scoreboard';

export default {
  title: 'Games/EstateBuyer/Scoreboard',
  component: Scoreboard,
};

const scoreboardData:IScoreboardProps = {
    scoreboard: [
        {
            playerID: "0",
            score: 40000,
        },
        {
            playerID: "1",
            score: 32000,
        },
        {
            playerID: "2",
            score: 12000,
        },
    ],
    players: [
        {
            playerID: 0,
            name: "Player 1",
        },
        {
            playerID: 1,
            name: "Player 2",
        },
        {
            playerID: 2,
            name: "Player 3",
        }
    ],
    playerID: "0"
}

export const TwoPlayer = () => <Scoreboard {...scoreboardData} />;