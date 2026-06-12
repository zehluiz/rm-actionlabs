import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Tipo (hierarquia visual) — espelha o eixo "Type" do Figma e os tokens color/button/{type}/*. */
export type ButtonType = 'primary' | 'secondary' | 'ghost' | 'danger' | 'text';

/** Tamanho — eixo "Size" do Figma. Alturas fixas: small 32 · medium 40 · large 48. */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * ds-button — botão com rótulo de texto.
 * Estados Hover/Focused são tratados em CSS (:hover / :focus-visible);
 * Disabled via [disabled]. Para botões só-ícone, use <ds-icon-button>.
 */
@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() label = 'Button';

  /** Classe Font Awesome do ícone à esquerda (ex.: 'fa-regular fa-user'). */
  @Input() iconBefore?: string;

  /** Classe Font Awesome do ícone à direita (ex.: 'fa-solid fa-chevron-down'). */
  @Input() iconAfter?: string;

  @Input() disabled = false;
  @Input() htmlType: 'button' | 'submit' | 'reset' = 'button';
}
