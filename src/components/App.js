import React, { useState } from 'react';
import Timer from './Timer';

const styles = {
    input: {
        display: 'block',
        padding: '.5em',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '1.5em',
    },
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

    function handleAdd (e) {
        e.preventDefault();

        const name = e.target.name.value;
        setTimers(value => [
            ...value,
            makeTimer(name),
        ]);

        e.target.reset();
    }

    function handleRemove (id) {
        setTimers(value => value.filter(item => item.id !== id));
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <input
                    name="name"
                    type="text"
                    style={styles.input}
                    placeholder="Enter name for timer ..."
                    autoComplete="off"
                />
            </form>
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
