import {merge} from "ramda";
export const generateRandomString = () => Math.random().toString(36).substring(2, 15);
export const addRandomId = <O extends object>(obj: O) => (withDefaults = merge(obj)) =>
    withDefaults( {key: generateRandomString()})

