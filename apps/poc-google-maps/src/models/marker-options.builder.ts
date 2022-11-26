import { CursorEnum } from "./cursor.enum";
import { MarkerOptionsConst } from "./marker-options.const";

export class MarkerOptionsBuilder {

  markerOptions?: google.maps.MarkerOptions;

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
   * @description Adiciona um rótulo ao marcador. O rótulo pode ser uma `string` ou um MarkerLabel
   * @param opacity
   * @returns
   */
  setOpacity(opacity: number): this {
    this.markerOptions = { ...this.markerOptions, opacity };
    return this;
  }

  private validateIsObject(markerLabel: google.maps.MarkerOptions): markerLabel is google.maps.MarkerOptions {
    return typeof markerLabel === 'object';
  }
}