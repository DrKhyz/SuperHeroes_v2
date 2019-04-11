import React from 'react';
import { Button } from 'reactstrap';

const ButtonRandomHero = ({ selectHero }) => {
    return (
        <div>
            <Button color="primary">Get random hero</Button>
        </div>
    );
};
export default ButtonRandomHero;