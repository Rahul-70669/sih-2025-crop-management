import type { ReactNode } from 'react';

export interface AdvisorySectionProps {
  /**
   * The title of the advisory section
   */
  title: string;
  
  /**
   * The content to be displayed when expanded
   */
  content: ReactNode;
  
  /**
   * Optional icon name to display next to the title
   */
  icon?: string;
  
  /**
   * Whether the section is expanded by default
   * @default false
   */
  defaultExpanded?: boolean;
  
  /**
   * Optional additional class names
   */
  className?: string;
}
