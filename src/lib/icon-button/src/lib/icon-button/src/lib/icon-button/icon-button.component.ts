import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Tipo — mesmos tokens do Button (color/button/{type}/*). */
export type IconButtonType = 'primary' | 'secondary' | 'ghost' | 'danger' | 'text';

/** Tamanho — quadrado: small 32×32 · medium 40×40 · large 48×48. */
export type IconButtonSize = 'small' | 'medium' | 'large';

/**
 * ds-icon-button — botão SÓ-ÍCONE (quadrado, circular via raio pill).
 *
 * Acessibilidade: `ariaLabel` é OBRIGATÓRIO — sem texto visível, o leitor de
 * tela depende dele para anunciar a ação. Use sempre um rótulo descritivo.
 */
@Component({
  selector: 'ds-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input() type: IconButtonType = 'primary';
  @Input() size: IconButtonSize = 'medium';

  /** Classe Font Awesome do ícone (ex.: 'fa-regular fa-user'). */
  @Input() icon = 'fa-regular fa-user';

  /** OBRIGATÓRIO — descreve a ação para leitores de tela. */
  @Input() ariaLabel = '';

  @Input() disabled = false;
  @Input() htmlType: 'button' | 'submit' | 'reset' = 'button';
}
