import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
  component: Card,
  title: 'Atoms/Card',
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithFigure: Story = {
  args: {
    figure: (
      <img src="/vite.svg" alt="Vite" style={{ width: '100%', maxHeight: 180, objectFit: 'cover' }} />
    ),
    title: 'Card with figure',
    body: 'A simple card that displays a figure image on top and some body content below.',
  }
};

export const WithTitleBodyActions: Story = {
  args: {
    title: 'Project status',
    body: 'Build passing — all checks green. This shows a typical title + body + actions layout.',
    actions: (
      <>
        <button className="btn btn-sm btn-primary">Details</button>
        <button className="btn btn-sm">Dismiss</button>
      </>
    ),
  }
};

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    body: 'This card uses the `hoverable` prop to enable a subtle lift on hover.',
    hoverable: true,
  }
};

export const Bordered: Story = {
  args: {
    title: 'Bordered Card',
    body: 'This card has `bordered` enabled which adds a border around the card container.',
    bordered: true,
  }
};

export const WithChildren: Story = {
  args: {
    title: 'Card with children',
    children: (
      <>
        <p>This card uses <code>children</code> instead of the <code>body</code> prop.</p>
        <ul>
          <li>Custom list item 1</li>
          <li>Custom list item 2</li>
        </ul>
      </>
    ),
  }
};

export const AppearanceHover: Story = {
  args: {
    appearance: 'hover',
    title: 'Appearance: hover',
    body: 'Using the `appearance` prop set to "hover" triggers the same hover style as `hoverable`.',
  }
};
