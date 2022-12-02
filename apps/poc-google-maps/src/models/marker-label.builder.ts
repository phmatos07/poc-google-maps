import { MarkerLabel } from "./marker-label.const";

export class MarkerLabelBuilder {

  markerLabel!: google.maps.MarkerLabel;

  constructor(markerLabel: string | google.maps.MarkerLabel) {

    if (this.validateIsObject(markerLabel)) {
      this.markerLabel = markerLabel;
      return;
    }
    this.markerLabel = { ...MarkerLabel, text: markerLabel };
  }

  setClassName(className: string): this {
    this.markerLabel = { ...this.markerLabel, className };
    return this;
  }

  setColor(color: string): this {
    this.markerLabel = { ...this.markerLabel, color };
    return this;
  }

  setFontFamily(fontFamily: string): this {
    this.markerLabel = { ...this.markerLabel, fontFamily };
    return this;
  }

  setFontSize(fontSize: string): this {
    this.markerLabel = { ...this.markerLabel, fontSize };
    return this;
  }

  setFontWeight(fontWeight: string): this {
    this.markerLabel = { ...this.markerLabel, fontWeight };
    return this;
  }

  setText(text: string): this {
    this.markerLabel = { ...this.markerLabel, text };
    return this;
  }

  private validateIsObject(markerLabel: string | google.maps.MarkerLabel): markerLabel is google.maps.MarkerLabel {
    return typeof markerLabel === 'object' && typeof markerLabel.text === 'string';
  }
}
