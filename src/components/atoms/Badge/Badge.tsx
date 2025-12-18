import React from 'react';
import type {BadgeProps} from './BadgeProps';

const defaultBadgeProps: Partial<BadgeProps> = {
  variant: 'default',
  size: 'medium',
};

const Badge: React.FC<BadgeProps> = (props) => {
  const p: BadgeProps = { ...defaultBadgeProps, ...props } as BadgeProps;
  const { variant, size, text, ariaLive, ...rest } = p;

  const classes = [
    'badge',
    variant ? `badge-${variant}` : '',
    size ? `badge-${size}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} aria-live={ariaLive} {...rest}>
      {text}
    </span>
  );
};

export default Badge;
