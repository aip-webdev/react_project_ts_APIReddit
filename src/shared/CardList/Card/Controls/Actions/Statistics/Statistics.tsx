import React from 'react';
import {ActionButton} from "../ActionButton";
import {EIcon, Icon} from "../../../../../Components/Icon";

interface IStatistics {
    text?: string;
    textHide?: boolean;
    btnClassName?: string;
}

export function Statistics({text = 'Статистика публикации', textHide, btnClassName}: IStatistics) {
    return (
        <ActionButton
            className={btnClassName}
            children={ <Icon type={EIcon.statistics} width={13} height={8} /> }
            text={text}
            textIsHide={textHide}
        />
    );
}
