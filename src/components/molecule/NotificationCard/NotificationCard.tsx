import React, { useEffect, useRef, type ReactNode } from 'react';
import { Card } from '../../atoms/Card/Card';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

export type NotificationType = 'alert' | 'notification';

export interface NotificationCardProps {
  type: NotificationType;
  message: string;
  action?: ReactNode;
  onDismiss?: () => void;
  icon?: ReactNode;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  message,
  action,
  onDismiss,
  icon,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.focus();
    }
  }, []);

  return (
    <Card
      ref={cardRef}
      role={type === 'alert' ? 'alert' : 'status'}
      aria-live={type === 'alert' ? 'assertive' : 'polite'}
      tabIndex={-1}
      className={`notification-card notification-card--${type}`}
    >
      <div className="notification-card__content">
        {icon && <div className="notification-card__icon">{icon}</div>}
        <div className="notification-card__message">{message}</div>
      </div>
      <div className="notification-card__actions">
        {action}
        {onDismiss && (
          <Button onClick={onDismiss} aria-label="Dismiss">
            <Icon name="close" />
          </Button>
        )}
      </div>
    </Card>
  );
};
