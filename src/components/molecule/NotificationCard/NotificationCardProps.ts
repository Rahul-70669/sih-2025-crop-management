import type { ReactNode } from 'react';

export type NotificationType = 'alert' | 'notification';

export interface NotificationCardProps {
  type: NotificationType;
  message: string;
  action?: ReactNode;
  onDismiss?: () => void;
  icon?: ReactNode;
}
