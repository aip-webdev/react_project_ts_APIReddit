import React, {ReactNode} from 'react';

interface IItem {
  text?: string;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
  listClassName?: string;
}

export function GenericList({list, listClassName}: IGenericListProps) {
  return (
      <div className={listClassName}>
        {list.map(({
                     As= 'div',
                     text,
                     onClick = () => {},
                     className,
                     id,
                     href
        }) => (
         <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
          >
            {text}
          </As>
        ))}
      </div>
  );
}
