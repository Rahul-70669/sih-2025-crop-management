import type {Meta, StoryFn} from '@storybook/react';
import LanguageToggle from './LanguageToggle';
import type {LanguageToggleProps} from './LanguageToggleProps';

export default {
  title: 'Atoms/LanguageToggle',
  component: LanguageToggle,
} as Meta;

const Template: StoryFn<LanguageToggleProps> = (args) => <LanguageToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentLang: 'en',
  onChange: (lang) => console.log(`Language changed to: ${lang}`),
};
