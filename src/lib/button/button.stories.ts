import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Componentes/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'danger', 'text'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    label: { control: 'text' },
    iconBefore: { control: 'text' },
    iconAfter: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { type: 'primary', size: 'medium', label: 'Button', disabled: false },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {};

/* ---- Tipos ---- */
export const Primary: Story = { args: { type: 'primary' } };
export const Secondary: Story = { args: { type: 'secondary' } };
export const Ghost: Story = { args: { type: 'ghost' } };
export const Danger: Story = { args: { type: 'danger' } };
export const Text: Story = { args: { type: 'text' } };

/* ---- Tamanhos ---- */
export const Small: Story = { args: { size: 'small' } };
export const Medium: Story = { args: { size: 'medium' } };
export const Large: Story = { args: { size: 'large' } };

/* ---- Ícones (Font Awesome) ---- */
export const IconBefore: Story = { args: { iconBefore: 'fa-regular fa-user', label: 'Perfil' } };
export const IconAfter: Story = { args: { iconAfter: 'fa-solid fa-chevron-down', label: 'Opções' } };
export const IconBoth: Story = { args: { iconBefore: 'fa-regular fa-user', iconAfter: 'fa-solid fa-chevron-down', label: 'Conta' } };

/* ---- Estado ---- */
export const Disabled: Story = { args: { disabled: true } };

/* ---- Showcase: tipos e tamanhos ---- */
export const Showcase: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex;flex-direction:column;gap:16px">
        <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
          <ds-button type="primary" label="Primary"></ds-button>
          <ds-button type="secondary" label="Secondary"></ds-button>
          <ds-button type="ghost" label="Ghost"></ds-button>
          <ds-button type="danger" label="Danger"></ds-button>
          <ds-button type="text" label="Text"></ds-button>
        </div>
        <div style="display:flex;gap:12px;align-items:center">
          <ds-button size="small" label="Small"></ds-button>
          <ds-button size="medium" label="Medium"></ds-button>
          <ds-button size="large" label="Large"></ds-button>
        </div>
      </div>
    `,
  }),
};
