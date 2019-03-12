import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

const styles = {
    container: {
        padding: '1em',
        border: '.1em grey solid',
        boxSizing: 'border-box',
    },
    body: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default function Timer (props) {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(true);
    const [baseTime, setBaseTime] = useState(Date.now());
    const interval = 50;

    useInterval(() => {
        if (active) {
            setTime(Date.now() - baseTime);
        }
    }, interval);

    const handleToggle = active
        ? () => { setActive(false); }
        : () => {
            setBaseTime(Date.now() - time);
            setActive(true);
        };

    const formattedTime = (time / 1000).toFixed(1);

    return (
        <div style={styles.container}>
            <header>{props.name}</header>
            <hr />
            <div style={styles.body}>
                <div><strong>{formattedTime}</strong></div>
                <div>
                    <button onClick={handleToggle}>{active ? 'Stop' : 'Resume'}</button>
                    <button onClick={props.onRemove}>Delete</button>
                </div>
            </div>
        </div>
    );
}
