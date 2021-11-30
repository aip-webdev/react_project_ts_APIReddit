import React, {ReactNode, useEffect, useState} from 'react';
import styles from './sortblock.scss';
import {Dropdown} from "../Dropdown";
import {findIndex, propEq} from "ramda";
import {stopPropagation} from "../../../../utils/react/stopPropagation";

import {preventDefault} from "../../../../utils/react/preventDefault";

interface IAction {
    id: string;
    element: ReactNode;
}

interface ISortBlockProps {
    sortList: IAction[];
    sortBlockStyle?: string;
    selectButtonStyle?: string;
    sortListStyle?: string;
    listLineStyle?: string;
}

export function SortBlock({
                              sortList,
                              selectButtonStyle = styles.selectButton,
                              sortBlockStyle = styles.sortBlock,
                              sortListStyle = styles.sortList,
                              listLineStyle = styles.listLine
                          }: ISortBlockProps) {

    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const [select, setSelect] = useState<string>('best');
    let [list, setList] = useState(sortList.filter(el => el.id !== select, sortList));
    let btn: ReactNode = (sortList)[findIndex(propEq('id', select))(sortList)].element;

    const style = {
        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 300ms ease',
        marginLeft: '7px'
    }

    useEffect(() => {
        setList(sortList.filter(el => el.id !== select, sortList))
    }, [select])

    return (
        <div className={sortBlockStyle}
             onClick={preventDefault(stopPropagation(() => setIsDropDownOpen(!isDropdownOpen)))}>
            <Dropdown
                isOpen={isDropdownOpen}
                button={
                    <button className={selectButtonStyle}>
                        {btn}

                        <svg style={style} width="14" height="8" viewBox="0 0 14 8" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M7 8L-3.16551e-07 0.712163L0.757932 2.72853e-07L7 6.49874L13.2421 1.36425e-06L14 0.712164L7 8Z"
                                  fill="#CC6633"/>
                        </svg>
                    </button>

                }
                children={
                    <ul className={sortListStyle}>
                        {list.map((action: IAction) => (
                            <li
                                className={listLineStyle}
                                key={action.id}
                                onClick={() => {
                                    setSelect(action.id)
                                }}
                            >
                                {action.element}
                            </li>
                        ))}
                    </ul>
                }
            />
        </div>
    );
}
