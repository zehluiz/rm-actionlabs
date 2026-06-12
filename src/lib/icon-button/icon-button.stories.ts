import type { Meta, StoryObj } from '@storybook/angular';
import { IconButtonComponent } from './icon-button.component';

const meta: Meta<IconButtonComponent> = {
  title: 'Componentes/Icon Button',
  component: IconButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'danger', 'text'] },
    size: { control: 'inline-radio', options: ['small', 'medium', 'large'] },
    icon: { control: 'text' },
    ariaLabel: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { type: 'primary', size: 'medium', icon: 'fa-regular fa-user', ariaLabel: 'Perfil', disabled: false },
  parameters: {
    docs: { description: { component: 'Botão só-ícone. **`ariaLabel` é obrigatório** para acessibilidade — sem ele, leitores de tela não anunciam a ação.' } },
  },
};
export default meta;

type Story = StoryObj<IconButtonComponent>;

export const Default: Story = {};

/* ---- Tipos ---- */
export const Primary: Story = { args: { type: 'primary' } };
export const Secondary: Story = { args: { type: 'secondary', icon: 'fa-solid fa-check', ariaLabel: 'Confirmar' } };
export const Ghost: Story = { args: { type: 'ghost', icon: 'fa-regular fa-bell', ariaLabel: 'Notificações' } };
export const Danger: Story = { args: { type: 'danger', icon: 'fa-solid fa-trash', ariaLabel: 'Excluir' } };
export const Text: Story = { args: { type: 'text', icon: 'fa-solid fa-ellipsis', ariaLabel: 'Mais opções' } };

/* ---- Tamanhos ---- */
export const Small: Story = { args: { size: 'small' } };
export const Large: Story = { args: { size: 'large' } };

/* ---- Estado ---- */
export const Disabled: Story = { args: { disabled: true } };

/* ---- Showcase ---- */
export const Showcase: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
        <ds-icon-button type="primary"   icon="fa-regular fa-user"  ariaLabel="Perfil"></ds-icon-button>
        <ds-icon-button type="secondary" icon="fa-solid fa-check"   ariaLabel="Confirmar"></ds-icon-button>
        <ds-icon-button type="ghost"     icon="fa-regular fa-bell"  ariaLabel="Notificações"></ds-icon-button>
        <ds-icon-button type="danger"    icon="fa-solid fa-trash"   ariaLabel="Excluir"></ds-icon-button>
        <ds-icon-button type="text"      icon="fa-solid fa-ellipsis" ariaLabel="Mais"></ds-icon-button>
      </div>
    `,
  }),
};
