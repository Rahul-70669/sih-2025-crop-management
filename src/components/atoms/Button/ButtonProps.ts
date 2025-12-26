import type {ButtonHTMLAttributes, ReactNode} from 'react';

/**
 * Allowed visual variants for the Button component.
 * - primary: main CTA (use sparingly)
 * - secondary: secondary actions
 * - ghost: transparent/outline style for tertiary actions
 * - danger: destructive actions (delete, remove)
 * - success: positive actions (confirm)
 * - outline: outlined style
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'outline';

/**
 * Allowed sizes for the Button component. Sizes map to padding, font-size and touch target.
 * - sm: small (icon buttons, tight layouts)
 * - md: default (recommended)
 * - lg: large (prominent CTAs, mobile)
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the shared Button component.
 * Extends native button attributes so it can be used like a normal <button> element.
 *
 * Accessibility notes:
 * - Provide `ariaLabel` when the button has no visible text (icon-only buttons).
 * - Use `disabled` for non-interactive states; ensure to render an accessible loading state
 *   (announce progress via aria-live or use an accessible spinner when `loading` is true).
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button (controls color/style). Default: 'primary' */
  variant?: ButtonVariant;

  /** Size of the button. Default: 'md' */
  size?: ButtonSize;

  /** When true, show a loading indicator and disable interactions. Default: false */
  loading?: boolean;

  /** Icon node rendered inside the button (typically a <svg> or <Icon />). */
  icon?: ReactNode;

  /** Position of the icon relative to children. Default: 'left' */
  iconPosition?: 'left' | 'right';

  /** Make the button expand to the full width of its container. Default: false */
  fullWidth?: boolean;

  /** Accessible label for icon-only buttons. Required for icon-only buttons. */
  ariaLabel?: string;

  /** Visual children (usually the button text). For icon-only buttons this can be omitted. */
  children?: ReactNode;

  /** Extra CSS class names to pass through to the button element. */
  className?: string;

  /** Button type attribute. Defaults to 'button' to avoid accidental form submits. */
  type?: 'button' | 'submit' | 'reset';

  /** When true, the button is visually and functionally disabled. */
  disabled?: boolean;

  /** Optional click handler. Inherits signature from native button attributes, but re-declared for clarity. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Default props for Button. Components can import this to fill in missing values.
 */
export const defaultButtonProps: Partial<ButtonProps> = {
  variant: 'primary',
  size: 'md',
  loading: false,
  iconPosition: 'left',
  fullWidth: false,
  type: 'button',
  disabled: false,
};

