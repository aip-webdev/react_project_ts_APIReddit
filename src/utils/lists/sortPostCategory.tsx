import React from 'react';
import { EIcon, Icon } from '../../shared/Components/ReusedComponents/Icon';

export const sortingPostList = [
	{
		id: 'best',
		element:
      <span>
      	<Icon width={14} height={16} type={EIcon.SortBest} pathFill="#CC6633" />
        &nbsp;&nbsp;Лучшие
      </span>
		,
	},
	{
		id: 'hot',
		element:
      <span>
      	<Icon width={12} height={16} type={EIcon.SortHot} pathFill="#CC6633" />
        &nbsp;&nbsp;Жаркие
      </span>
		,
	},
	{
		id: 'new',
		element:
      <span>
      	<Icon width={16} height={17} type={EIcon.SortNew} pathFill="#CC6633" />
        &nbsp;&nbsp;Новые
      </span>
		,
	},
	{
		id: 'top',
		element:
      <span>
      	<Icon width={17} height={16} type={EIcon.SortTop} pathFill="#CC6633" />
        &nbsp;&nbsp;Топовые
      </span>
		,
	},
	{
		id: 'rising',
		element:
      <span>
      	<Icon width={16} height={16} type={EIcon.Sort_Rising} pathFill="#CC6633" />
        &nbsp;&nbsp;Длительные
      </span>
		,
	},
]
