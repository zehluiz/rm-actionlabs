import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Variante visual (eixo "State" do Figma, parte estrutural):
 * - solid   -> State=Default
 * - outline -> State=Outline
 * - text    -> State=Text
 * Os estados de interação (Hover, Focused, Disable) NÃO são props:
 * são tratados via :hover / :focus-visible / [disabled] no SCSS,
 * conforme o cssMapping retornado pelo Figma.
 */
export type ButtonVariant = 'solid' | 'outline' | 'text';

/**
 * Cor — inferida dos grupos de token color/button/{primary,secondary,danger}.
 * ⚠ O component set "Medium"/"Large" do Figma NÃO expõe cor como eixo de
 * variante. Confirmar com o time se cor é trocada por token/instância.
 */
export type ButtonColor = 'primary' | 'secondary' | 'danger';

/** Tamanho — sets "Medium" e "Large" do Figma. */
export type ButtonSize = 'medium' | 'large';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'solid';
  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'medium';

  /** Texto do botão (Figma: Label=True). Vazio => botão icon-only. */
  @Input() label = '';

  /** Classe Font Awesome do ícone à esquerda (Figma: Icon before=True). */
  @Input() iconBefore?: string;

  /** Classe Font Awesome do ícone à direita (Figma: Icon after=True). */
  @Input() iconAfter?: string;

  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  get isIconOnly(): boolean {
    return !this.label && (!!this.iconBefore || !!this.iconAfter);
  }
}
