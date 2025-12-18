import { Story, type Meta } from "@storybook/react";
import Select from "./Select";
import type {SelectProps} from "./SelectProps";

export default {
  title: "Atoms/Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args: SelectProps) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
  value: "1",
  label: "Select an option",
  placeholder: "Choose one...",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
