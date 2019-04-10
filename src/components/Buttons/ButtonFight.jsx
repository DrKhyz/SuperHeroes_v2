import React from 'react';
import { Button } from 'reactstrap';

const ButtonFight = ({ selectOpponent }) => {
    return (
        <div>
            <Button color="danger" onClick={selectOpponent}>Fight !</Button>
        </div>
    );
};

export default ButtonFight;