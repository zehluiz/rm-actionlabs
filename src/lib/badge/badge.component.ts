import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Cor — eixo "Color" do Figma. Os nomes seguem o Figma 1:1 e mapeiam
 * para os tokens semânticos color/badge/*:
 *   yellow -> warning | green -> success | red -> error
 *   blue   -> info    | neutral -> neutral | brand -> surface/brand + texto branco
 */
export type BadgeColor = 'yellow' | 'green' | 'red' | 'blue' | 'neutral' | 'brand';

/** Elemento antes do texto — eixo "Elements" do Figma. */
export type BadgeElement = 'none' | 'bullet' | 'icon';

@Component({
  selector: 'ds-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  @Input() color: BadgeColor = 'neutral';
  @Input() element: BadgeElement = 'none';

  /** Texto do badge (Figma: "Text Label"). */
  @Input() label = '';

  /** Classe Font Awesome usada quando element === 'icon'. */
  @Input() icon?: string;
}
