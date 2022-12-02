import { CursorEnum } from "./cursor.enum";
import { MarkerOptionsConst } from "./marker-options.const";

export class MarkerOptionsBuilder {

  markerOptions!: google.maps.MarkerOptions;

  constructor(markerOptions?: google.maps.MarkerOptions) {

    if (this.validateIsObject(markerOptions)) {
      this.markerOptions = markerOptions;
      return;
    }
    this.markerOptions = MarkerOptionsConst;
  }

  /**
   * @description Qual animação reproduzir quando o marcador é adicionado a um mapa.
   * @param animation
   */
  setAnimation(animation: number): this {
    this.markerOptions = { ...this.markerOptions, animation };
    return this;
  }

  /**
   * @description Se for `true`, o marcador recebe eventos de mouse e toque.
   * @param clickable
   */
  setClickable(clickable: boolean): this {
    this.markerOptions = { ...this.markerOptions, clickable };
    return this;
  }

  /**
   * @description Se for `false`, desativa a cruz que aparece abaixo do marcador ao arrastar.
   * @param crossOnDrag
   */
  setCrossOnDrag(crossOnDrag: boolean): this {
    this.markerOptions = { ...this.markerOptions, crossOnDrag };
    return this;
  }

  /**
   * @description Cursor do mouse para mostrar ao passar o mouse.
   * @param cursor
   */
  setCursor(cursor: CursorEnum.POINTER): this {
    this.markerOptions = { ...this.markerOptions, cursor };
    return this;
  }

  /**
   * @description Se for `true`, o marcador recebe eventos de mouse e toque.
   * @param draggable
   */
  setDraggable(draggable: boolean): this {
    this.markerOptions = { ...this.markerOptions, draggable };
    return this;
  }

  /**
   * @description Ícone para o primeiro plano. Se uma `string` for fornecida,
   * ela será tratada como embora fosse um {@link Icon} com a `string` como {@link Icon#url url}.
   * @param icon
   * @returns
   */
  setIcon(icon: string | google.maps.Icon): this {
    this.markerOptions = { ...this.markerOptions, icon };
    return this;
  }

  /**
   * @description Adiciona um rótulo ao marcador. O rótulo pode ser uma `string` ou um MarkerLabel
   * @param label
   * @returns
   */
  setLabel(label: google.maps.MarkerLabel): this {
    this.markerOptions = { ...this.markerOptions, label };
    return this;
  }

  /**
   * @description Adiciona um rótulo ao marcador. O rótulo pode ser uma `string` ou um MarkerLabel
   * @param opacity
   * @returns
   */
  setOpacity(opacity: number): this {
    this.markerOptions = { ...this.markerOptions, opacity };
    return this;
  }

  /**
   * @description Adiciona um texto de rolagem
   * @param title
   * @returns
   */
  setTitle(title: string): this {
    this.markerOptions = { ...this.markerOptions, title };
    return this;
  }

  /**
   * @description A otimização renderiza muitos marcadores como um único elemento estático. Otimizado
    * a renderização é habilitada por padrão. Desative a renderização otimizada para animação
    * GIFs ou PNGs, ou quando cada marcador deve ser renderizado como um DOM separado
    * elemento (somente uso avançado).
   * @param optimized
   */
  setOptimized(optimized: boolean): this {
    this.markerOptions = { ...this.markerOptions, optimized };
    return this;
  }

  private validateIsObject(markerLabel?: google.maps.MarkerOptions): markerLabel is google.maps.MarkerOptions {
    return typeof markerLabel === 'object';
  }
}