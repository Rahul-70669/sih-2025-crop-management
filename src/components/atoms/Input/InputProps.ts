import type { InputHTMLAttributes } from 'react';

/**
 * Allowed visual variants for the Input component.
 * - default: standard input
 * - focus: input with focus
 * - error: input with a validation error
 * - disabled: disabled input
 */
export type InputVariant = 'default' | 'focus' | 'error' | 'disabled';

/**
 * Props for the shared Input component.
 * Extends native input attributes so it can be used like a normal <input> element.
 *
 * Accessibility notes:
 * - Always provide a `label` for screen readers, either visually or via `aria-label`.
 * - Use `error` to programmatically associate the input with an error message.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Visual variant of the input. Default: 'default' */
  variant?: InputVariant;

  /** The value of the input element. */
  value?: string;

  /** When true, indicates that the input has an error. */
  error?: boolean;

  /** When true, the input is visually and functionally disabled. */
  disabled?: boolean;

  /** The label for the input. */
  label?: string;

  /** Extra CSS class names to pass through to the input element. */
  className?: string;
}

/**
 * Default props for Input. Components can import this to fill in missing values.
 */
export const defaultInputProps: Partial<InputProps> = {
  variant: 'default',
  disabled: false,
  error: false,
};
