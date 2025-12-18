import type { HTMLAttributes, ReactNode } from 'react';

/** Visual appearance options for Card components. */
export type CardAppearance = 'default' | 'hover';

/**
 * Props for the Card component.
 *
 * Semantic structure / recommended usage:
 * - `figure` — visual media (img, video, SVG) wrapped in a <figure> element
 * - `title` — heading content (string or element, rendered as a heading inside the card body)
 * - `body` — main content of the card (paragraphs, lists, etc.)
 * - `actions` — actions region (buttons, links); place inside a toolbar-like container
 *
 * Visual flags:
 * - `hoverable` — enables hover elevation/interaction styles (often the `hover` appearance)
 * - `bordered` — adds a bordered style around the card
 * - `appearance` — maps to named visual styles (defaults to `default`)
 */
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Card children (shorthand for `body` content). If both `children` and `body` are provided, `children` is used. */
  children?: ReactNode;

  /** Optional media/content area (renders inside a <figure>). */
  figure?: ReactNode;

  /** Optional title/heading content for the card body. */
  title?: ReactNode;

  /** Explicit body slot. Use this when you want to separate body from `children`. */
  body?: ReactNode;

  /** Actions slot (buttons, badges, links). Rendered in the card actions area. */
  actions?: ReactNode;

  /** When true, apply hover interaction styles. Default: false. */
  hoverable?: boolean;

  /** When true, display a border around the card. Default: false. */
  bordered?: boolean;

  /** Named appearance for the card. Default: 'default' */
  appearance?: CardAppearance;

  /** Extra CSS classes to pass to the root card element. */
  className?: string;
}

/** Default props for `Card`. Components can import this to fill in missing values. */
export const defaultCardProps: Partial<CardProps> = {
  hoverable: false,
  bordered: false,
  appearance: 'default',
};
