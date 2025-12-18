import clsx from 'clsx';
import type { InputProps } from './InputProps';
import { defaultInputProps } from './InputProps';

export const Input = ({
  variant = defaultInputProps.variant,
  disabled = defaultInputProps.disabled,
  error = defaultInputProps.error,
  label,
  className,
  ...props
}: InputProps) => {
  const baseStyles = 'input input-bordered w-full max-w-xs';

  const variantStyles = {
    default: 'input-primary',
    focus: 'input-primary',
    error: 'input-error',
    disabled: 'input-disabled',
  };

  const classes = clsx(
    baseStyles,
    variant && variantStyles[variant],
    className
  );

  return (
    <div className="form-control w-full max-w-xs">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        type="text"
        className={classes}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />
    </div>
  );
};
