import type { FC } from 'react';
import { Card } from '../../atoms/Card/Card';
import Badge from '../../atoms/Badge/Badge';
import {Button} from '../../atoms/Button/Button';
import type { CropCardProps } from './CropCardProps';

export const CropCard: FC<CropCardProps> = ({
  title,
  imageUrl,
  description,
  status,
  statusVariant = 'default',
  onAction,
  actionLabel = 'View Details',
}) => {
  const figure = imageUrl ? (
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-48 object-cover"
    />
  ) : null;

  const actions = onAction ? (
    <Button
      variant="primary"
      size="sm"
      onClick={onAction}
    >
      {actionLabel}
    </Button>
  ) : null;

  return (
    <Card
      figure={figure}
      title={
        <div className="flex justify-between items-center w-full">
          <span>{title}</span>
          {status && (
            <Badge
              text={status}
              variant={statusVariant}
              size="small"
            />
          )}
        </div>
      }
      body={
        description ? (
          <p className="text-sm text-gray-600 line-clamp-3">
            {description}
          </p>
        ) : null
      }
      actions={actions}
      hoverable
      bordered
      className="w-full max-w-sm"
    />
  );
};
