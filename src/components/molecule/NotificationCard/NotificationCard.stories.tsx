import type { Meta, StoryFn } from '@storybook/react';
import { NotificationCard, type NotificationCardProps } from './NotificationCard';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';

export default {
  title: 'Molecules/NotificationCard',
  component: NotificationCard,
} as Meta;

const Template: StoryFn<NotificationCardProps> = (args) => <NotificationCard {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  type: 'alert',
  message: 'This is an alert message!',
  icon: <Icon name="alert-triangle" />,
  action: <Button>Take Action</Button>,
  onDismiss: () => alert('Dismissed!'),
};

export const Notification = Template.bind({});
Notification.args = {
  type: 'notification',
  message: 'This is a notification message.',
  icon: <Icon name="info" />,
  onDismiss: () => alert('Dismissed!'),
};
