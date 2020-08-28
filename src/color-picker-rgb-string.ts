import type { ColorModel } from './lib/types';
import { ColorPicker } from './lib/components/color-picker.js';
import { hsvToRgbString, rgbStringToHsv } from './lib/utils/convert.js';
import { equalColorString } from './lib/utils/compare.js';

const colorModel: ColorModel<string> = {
  defaultColor: 'rgb(0, 0, 0)',
  toHsv: rgbStringToHsv,
  fromHsv: hsvToRgbString,
  equal: equalColorString,
  toAttr: (color) => color,
  fromAttr: (color) => color,
  reflect: true
};

/**
 * A color picker custom element that uses RGB string format.
 *
 * @element color-picker-rgb-string
 *
 * @prop {string} color - Selected color in RGB string format.
 * @attr {string} color - Selected color in RGB string format.
 *
 * @fires color-changed - Event fired when color property changes.
 *
 * @csspart hue - A hue selector container.
 * @csspart saturation - A saturation selector container
 * @csspart pointer - A draggable pointer element.
 */
export class ColorPickerRgbString extends ColorPicker<string> {
  protected get colorModel(): ColorModel<string> {
    return colorModel;
  }
}

customElements.define('color-picker-rgb-string', ColorPickerRgbString);

declare global {
  interface HTMLElementTagNameMap {
    'color-picker-rgb-string': ColorPickerRgbString;
  }
}
