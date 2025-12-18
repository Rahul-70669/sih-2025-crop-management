export interface BadgeProps {
  /**
   * How the badge should be displayed.
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'warning' | 'danger';

  /**
   * The size of the badge.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The text to display in the badge.
   */
  text: string;

  /**
   * Sets the `aria-live` attribute for the badge to announce updates to screen readers.
   */
  ariaLive?: 'polite' | 'assertive' | 'off';
}
