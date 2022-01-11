import React from 'react';
import { EIcon, Icon } from '../../../../../ReusedComponents/Icon';
import { ActionButton } from '../ActionButton';

interface IStatistics {
  text?: string
  textHide?: boolean
  btnClassName?: string
}

export const Statistics = React.memo(
  ({ text = 'Статистика публикации', textHide, btnClassName, }: IStatistics): JSX.Element =>
    <ActionButton className={btnClassName} text={text} textIsHide={textHide}>
      <Icon type={EIcon.statistics} width={13} height={8} />
    </ActionButton>
);

