import type { Meta, StoryObj } from "@storybook/vue3";
import Input from './Input.vue';

const meta = {
    title: "Example/Input",
    component: Input,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    argTypes: {
      size: { control: "select", options: ["small", "medium", "large"] },
      backgroundColor: { control: "color" },
    },
  } satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default = () => ({
  components: { Input },
  template: '<Input />',
});
