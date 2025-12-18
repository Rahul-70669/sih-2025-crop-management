/**
 * Button Component
 *
 * This is a typed, accessible React button that uses ButtonProps for configuration.
 */
import React from 'react';
import { defaultButtonProps, type ButtonProps } from './ButtonProps';

const Button: React.FC<ButtonProps> = (props) => {
  // Merge provided props with defaults
  const p: ButtonProps = { ...defaultButtonProps, ...props } as ButtonProps;
  const {
    children,
    variant,
    size,
    loading,
    icon,
    iconPosition,
    fullWidth,
    ariaLabel,
    className,
    type,
    disabled,
    onClick,
    ...rest
  } = p;

  const isIconOnly = !children && !!icon;

  // Runtime accessibility check for icon-only buttons
  if (isIconOnly && !ariaLabel) {
    console.warn('Button: icon-only buttons should provide an `ariaLabel` for accessibility');
  }

  const computedDisabled = !!(disabled || loading);

  // Build classes conservatively to match existing project conventions
  const classes = [
    'btn',
    variant ? `btn-${variant}` : '',
    size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '',
    fullWidth ? 'btn-full' : '',
    loading ? 'is-loading' : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={computedDisabled}
      aria-label={ariaLabel}
      aria-busy={loading ? true : undefined}
      aria-disabled={computedDisabled ? true : undefined}
      onClick={onClick}
      {...rest}
    >
      {/* left icon or spinner */}
      {loading && (
        <span className="btn-spinner" aria-hidden="true" />
      )}

      {icon && iconPosition === 'left' && !loading && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}

      {children && <span className="btn-content">{children}</span>}

      {icon && iconPosition === 'right' && !loading && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}

      {/* For screen readers, announce loading state when present */}
      {loading && (
        <span className="sr-only" role="status" aria-live="polite">Loading...</span>
      )}
    </button>
  );
};

export default Button;