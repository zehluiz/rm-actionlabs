import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';

/**
 * Cor (tom) do número da caixa — espelha as cores semânticas do Figma:
 *   warning -> Aguardando | error -> Reprovado | success -> Validado/Concluído
 *   brand   -> azul-marinho | neutral -> texto padrão
 */
export type ProductCardTone = 'neutral' | 'brand' | 'success' | 'warning' | 'error';

/**
 * Uma caixa de status no rodapé do card (Figma: "Heading and number").
 *  - value: número grande (ex.: 42). Vira `emptyValue` quando o card está desabilitado.
 *  - label: rótulo abaixo do número (ex.: "Aguardando").
 *  - tone: cor do número por status (ex.: 'warning'). Padrão: neutral.
 *  - badge: texto opcional do selo verde (ex.: "100%"). Só aparece com o card habilitado.
 */
export interface ProductCardStat {
  label: string;
  value: string | number;
  tone?: ProductCardTone;
  badge?: string;
}

/**
 * ds-product-card — espelha o "Card / Produtos" do Figma.
 *
 * Eixos do Figma:
 *  - Type  -> conteúdo (título, ícone e lista de `stats`), dirigido por dados.
 *  - Status (Habilitado/Desabilitado) -> `enabled`: liga/desliga o switch,
 *    mostra o atalho "Habilitar" e troca os valores por `emptyValue` ("--").
 */
@Component({
  selector: 'ds-product-card',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  /** Título do card (Figma: "Product Title"). */
  @Input() title = '';

  /** Classe Font Awesome do ícone à esquerda do título (opcional). */
  @Input() icon?: string;

  /** Status do card. true = Habilitado (switch ligado); false = Desabilitado. */
  @Input() enabled = true;

  /** Texto do atalho mostrado quando desabilitado (Figma: "HABILITAR"). */
  @Input() enableLabel = 'Habilitar';

  /** Rótulo da linha de total (Figma: "Total de pedidos"). */
  @Input() totalLabel = 'Total de pedidos';

  /** Valor da linha de total. */
  @Input() total: string | number = 0;

  /** Caixas de status do rodapé. */
  @Input() stats: ProductCardStat[] = [];

  /** O que mostrar no lugar dos valores quando desabilitado. */
  @Input() emptyValue = '--';

  /** Emitido ao clicar/acionar o switch. Carrega o novo estado desejado. */
  @Output() toggle = new EventEmitter<boolean>();

  get displayTotal(): string | number {
    return this.enabled ? this.total : this.emptyValue;
  }

  displayValue(value: string | number): string | number {
    return this.enabled ? value : this.emptyValue;
  }

  onToggle(): void {
    this.toggle.emit(!this.enabled);
  }

  onToggleKey(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onToggle();
    }
  }
}
