/**
 * Button Component
 *
 * This is a typed, accessible React button that uses ButtonProps for configuration.
 */
import React from 'react';
import { defaultButtonProps, type ButtonProps } from './ButtonProps';

export const Button: React.FC<ButtonProps> = (props) => {
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

  // Build classes, including support for responsive props
  const classList: (string | undefined)[] = ['btn'];
  if (variant) classList.push(`btn-${variant}`);

  // Handle 'size' prop (string or responsive object)
  if (typeof size === 'object' && size !== null) {
    Object.entries(size).forEach(([bp, s]) => {
      if (s) {
        // e.g., 'btn-lg' for base, or 'btn-md-lg' for medium breakpoint
        classList.push(bp === 'base' ? `btn-${s}` : `btn-${bp}-${s}`);
      }
    });
  } else if (size) {
    classList.push(`btn-${size}`);
  }

  // Handle 'fullWidth' prop (boolean or responsive object)
  if (typeof fullWidth === 'object' && fullWidth !== null) {
    Object.entries(fullWidth).forEach(([bp, fw]) => {
      if (fw) {
        // e.g., 'btn-full' for base, or 'btn-md-full' for medium breakpoint
        classList.push(bp === 'base' ? 'btn-full' : `btn-${bp}-full`);
      }
      // Note: Handling `false` to override a wider breakpoint is more complex
      // and often requires separate 'not-full' classes.
    });
  } else if (fullWidth) {
    classList.push('btn-full');
  }

  if (loading) classList.push('is-loading');
  if (className) classList.push(className);

  const classes = classList.filter(Boolean).join(' ');

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
