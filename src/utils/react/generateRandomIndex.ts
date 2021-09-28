import {assoc} from "ramda";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateRandomString());

export const generateAnyKey = <O extends object>(obj: O) => {
    return {
        ...obj,
        key: Math.random().toString(36).substring(2, 15)
    }
};
