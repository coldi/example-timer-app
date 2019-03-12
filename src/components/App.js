import React, { useState } from 'react';
import Timer from './Timer';
import InputList from './InputList';

const styles = {
    list: {
        display: 'grid',
        position: 'relative',
        marginTop: '1em',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1em',
    },
};

let timerCount = 0;

function makeTimer (name) {
    timerCount += 1;
    return { id: timerCount, name };
}

export default function App() {
    const [timers, setTimers] = useState([]);

    function handleAdd (name) {
        setTimers(value => [
            ...value,
            makeTimer(name),
        ]);
    }

    function handleRemove (id) {
        setTimers(value => value.filter(item => item.id !== id));
    }

    return (
        <div>
            <InputList onSubmit={handleAdd} />
            <div style={styles.list}>
                {timers.map(timer => (
                    <Timer
                        key={timer.id}
                        {...timer}
                        onRemove={() => handleRemove(timer.id)}
                    />
                ))}
            </div>
        </div>
    );
}
