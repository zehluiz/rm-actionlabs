import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Componentes/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['solid', 'outline', 'text'] },
    color: { control: 'inline-radio', options: ['primary', 'secondary', 'danger'] },
    size: { control: 'inline-radio', options: ['medium', 'large'] },
    label: { control: 'text' },
    iconBefore: { control: 'text' },
    iconAfter: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Botão',
    variant: 'solid',
    color: 'primary',
    size: 'medium',
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

/* ---- Default ---- */
export const Default: Story = {};

/* ---- Variantes ---- */
export const Solid: Story = { args: { variant: 'solid' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Text: Story = { args: { variant: 'text' } };

/* ---- Cores ---- */
export const Primary: Story = { args: { color: 'primary' } };
export const Secondary: Story = { args: { color: 'secondary' } };
export const Danger: Story = { args: { color: 'danger' } };

/* ---- Tamanhos ---- */
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

/* ---- Ícones (Font Awesome) ---- */
export const IconBefore: Story = {
  args: { iconBefore: 'fa-solid fa-plus', label: 'Adicionar' },
};
export const IconAfter: Story = {
  args: { iconAfter: 'fa-solid fa-arrow-right', label: 'Avançar' },
};
export const IconOnly: Story = {
  args: { label: '', iconBefore: 'fa-solid fa-gear' },
};

/* ---- Estado ---- */
export const Disabled: Story = { args: { disabled: true } };

/* ---- Showcase: matriz cor x variante ---- */
export const Showcase: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex;flex-direction:column;gap:16px">
        <div style="display:flex;gap:12px;align-items:center">
          <ds-button color="primary" variant="solid" label="Primary"></ds-button>
          <ds-button color="primary" variant="outline" label="Outline"></ds-button>
          <ds-button color="primary" variant="text" label="Text"></ds-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center">
          <ds-button color="secondary" variant="solid" label="Secondary"></ds-button>
          <ds-button color="secondary" variant="outline" label="Outline"></ds-button>
          <ds-button color="secondary" variant="text" label="Text"></ds-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center">
          <ds-button color="danger" variant="solid" label="Danger"></ds-button>
          <ds-button color="danger" variant="outline" label="Outline"></ds-button>
          <ds-button color="danger" variant="text" label="Text"></ds-button>
        </div>
      </div>
    `,
  }),
};
