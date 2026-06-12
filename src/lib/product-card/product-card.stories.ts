import type { Meta, StoryObj } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';

const meta: Meta<ProductCardComponent> = {
  title: 'Componentes/Card Produtos',
  component: ProductCardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    icon: { control: 'text' },
    enabled: { control: 'boolean' },
    enableLabel: { control: 'text' },
    totalLabel: { control: 'text' },
    total: { control: 'text' },
    emptyValue: { control: 'text' },
    stats: { control: 'object' },
    toggle: { action: 'toggle' },
  },
  args: {
    title: 'Registro de Máquinas',
    icon: 'fa-solid fa-tractor',
    enabled: true,
    enableLabel: 'Habilitar',
    totalLabel: 'Total de pedidos',
    total: 42,
    emptyValue: '--',
    stats: [
      { label: 'Aguardando', value: 4 },
      { label: 'Reprovado', value: 2 },
      { label: 'Validado', value: 36 },
    ],
  },
  decorators: [
    (story) => ({
      ...story(),
      template: `<div style="max-width:755px">${story().template ?? '<ds-product-card></ds-product-card>'}</div>`,
    }),
  ],
};
export default meta;

type Story = StoryObj<ProductCardComponent>;

/* ---- Type = Registro de Máquina ---- */
export const RegistroHabilitado: Story = {};

export const RegistroDesabilitado: Story = {
  args: { enabled: false },
};

/* ---- Type = TabelaMaq ---- */
export const TabelaHabilitado: Story = {
  args: {
    title: 'TabelaMaq',
    icon: 'fa-solid fa-table-list',
    total: 12,
    stats: [
      { label: 'Aguardando', value: 5 },
      { label: 'Concluído', value: 7 },
    ],
  },
};

export const TabelaDesabilitado: Story = {
  args: {
    title: 'TabelaMaq',
    icon: 'fa-solid fa-table-list',
    enabled: false,
    total: 12,
    stats: [
      { label: 'Aguardando', value: 5 },
      { label: 'Concluído', value: 7 },
    ],
  },
};

/* ---- Com selo (badge "100%") ---- */
export const ComSelo: Story = {
  args: {
    title: 'Registro de Máquinas',
    total: 42,
    stats: [
      { label: 'Aguardando', value: 4 },
      { label: 'Reprovado', value: 2 },
      { label: 'Validado', value: 36, badge: '100%' },
    ],
  },
};

/* ---- Showcase: as 4 variantes empilhadas ---- */
export const Showcase: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;max-width:755px">
        <ds-product-card
          title="Registro de Máquinas"
          icon="fa-solid fa-tractor"
          [enabled]="true"
          [total]="42"
          [stats]="[
            { label: 'Aguardando', value: 4 },
            { label: 'Reprovado', value: 2 },
            { label: 'Validado', value: 36 }
          ]"
        ></ds-product-card>

        <ds-product-card
          title="Registro de Máquinas"
          icon="fa-solid fa-tractor"
          [enabled]="false"
          [total]="42"
          [stats]="[
            { label: 'Aguardando', value: 4 },
            { label: 'Reprovado', value: 2 },
            { label: 'Validado', value: 36 }
          ]"
        ></ds-product-card>

        <ds-product-card
          title="TabelaMaq"
          icon="fa-solid fa-table-list"
          [enabled]="true"
          [total]="12"
          [stats]="[
            { label: 'Aguardando', value: 5 },
            { label: 'Concluído', value: 7 }
          ]"
        ></ds-product-card>
      </div>
    `,
  }),
};
