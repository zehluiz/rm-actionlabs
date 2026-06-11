import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Componentes/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['yellow', 'green', 'red', 'blue', 'neutral', 'brand'],
    },
    element: { control: 'inline-radio', options: ['none', 'bullet', 'icon'] },
    label: { control: 'text' },
    icon: { control: 'text' },
  },
  args: { label: 'Text Label', color: 'neutral', element: 'none' },
};
export default meta;

type Story = StoryObj<BadgeComponent>;

export const Default: Story = {};

/* ---- Cores ---- */
export const Yellow: Story = { args: { color: 'yellow' } };
export const Green: Story = { args: { color: 'green' } };
export const Red: Story = { args: { color: 'red' } };
export const Blue: Story = { args: { color: 'blue' } };
export const Neutral: Story = { args: { color: 'neutral' } };
export const Brand: Story = { args: { color: 'brand' } };

/* ---- Elementos ---- */
export const WithBullet: Story = { args: { element: 'bullet', color: 'green' } };
export const WithIcon: Story = {
  args: { element: 'icon', icon: 'fa-solid fa-check', color: 'green' },
};

/* ---- Showcase: matriz cor x elemento ---- */
export const Showcase: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <ds-badge color="yellow" label="Yellow"></ds-badge>
          <ds-badge color="green" label="Green"></ds-badge>
          <ds-badge color="red" label="Red"></ds-badge>
          <ds-badge color="blue" label="Blue"></ds-badge>
          <ds-badge color="neutral" label="Neutral"></ds-badge>
          <ds-badge color="brand" label="Brand"></ds-badge>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <ds-badge color="green" element="bullet" label="Ativo"></ds-badge>
          <ds-badge color="red" element="bullet" label="Inativo"></ds-badge>
          <ds-badge color="yellow" element="icon" icon="fa-solid fa-clock" label="Pendente"></ds-badge>
          <ds-badge color="blue" element="icon" icon="fa-solid fa-circle-info" label="Info"></ds-badge>
        </div>
      </div>
    `,
  }),
};
