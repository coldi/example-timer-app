/* eslint-disable prefer-arrow-callback */
/* eslint-disable jsx-a11y/href-no-hash */
import React, { useState, useRef } from 'react';

const styles = {
    container: {
        position: 'relative',
    },
    input: {
        display: 'block',
        padding: '.5em',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '1.5em',
    },
    dropdown: {
        position: 'absolute',
        width: '100%',
        maxHeight: '10em',
        boxSizing: 'border-box',
        overflow: 'auto',
        boxShadow: '0 .5em .75em 0 rgba(0, 0, 0, .25)',
        color: '#ccc',
        background: '#333',
        zIndex: 1,
    },
    link: {
        color: '#ccc',
    },
};

const initialItems = [
    'Work',
    'Sports',
    'Programming',
    'Learning',
    'Crafting',
    'Sleeping',
    'Power napping',
    'Just another timer',
    'I AM EXAMPLE',
];

export default function InputList (props) {
    const input = useRef();
    const [value, setValue] = useState('');
    const [list, setList] = useState(initialItems);

    const regex = new RegExp(value, 'i');
    const results = list.filter(item => regex.test(item));
    const listVisible = value.length && results.length;

    function handleInput () {
        setValue(input.current.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (!list.includes(value)) {
            setList(items => [...items, value]);
        }
        props.onSubmit(value);
        setValue('');
    }

    function handleListSelect (e, item) {
        e.preventDefault();
        setValue(item);
        input.current.focus();
    }

    return (
        <form style={styles.container} onSubmit={handleSubmit}>
            <input
                name="name"
                type="text"
                ref={input}
                value={value}
                style={styles.input}
                placeholder="Enter name for timer ..."
                autoComplete="off"
                onChange={handleInput}
            />
            {listVisible ? (
                <div style={styles.dropdown}>
                    <ul style={styles.list}>
                        {results.map(item => (
                            <li key={item}>
                                <a style={styles.link} href="#" onClick={e => handleListSelect(e, item)}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </form>
    );
}
