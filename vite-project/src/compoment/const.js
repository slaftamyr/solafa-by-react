// const.js
import { useState } from 'react';

export const useSwitchKey = () => {
    const [switchKey, setSwitchKey] = useState(0);
    return { switchKey, setSwitchKey };
};