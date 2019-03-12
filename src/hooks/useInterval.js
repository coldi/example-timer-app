/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

export default function useInterval(fn, interval = null) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = fn;
    }, [fn]);

    useEffect(() => {
        const handler = (...args) => savedCallback.current(...args);

        if (interval !== null) {
            const id = setInterval(handler, interval);
            return () => clearInterval(id);
        }
    }, [interval]);
}
