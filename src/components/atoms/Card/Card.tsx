import type { FC } from 'react';
import type { CardProps } from './CardProps';
import { defaultCardProps } from './CardProps';

export const Card: FC<CardProps> = (props) => {
  const {
    children,
    figure,
    title,
    body,
    actions,
    hoverable,
    bordered,
    appearance,
    className,
    ...rest
  } = { ...defaultCardProps, ...props } as CardProps;

  const classList = [
    'card bg-base-100 w-96 shadow-sm',
    (hoverable || appearance === 'hover') ? 'hover:shadow-lg transition-transform transform hover:-translate-y-1' : '',
    bordered ? 'border' : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classList} {...rest}>
      {figure ? <figure>{figure}</figure> : null}

      <div className="card-body">
        {title ? (
          <h2 className="card-title">{title}</h2>
        ) : null}

        {body ? (
          <div className="card-content">{body}</div>
        ) : children ? (
          <div className="card-content">{children}</div>
        ) : (
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        )}

        {actions ? (
          <div className="card-actions justify-end">{actions}</div>
        ) : null}
      </div>
    </div>
  );
};
