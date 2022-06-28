/*
 * The RGB color model is an additive color model in which red, green, and blue light are added
 * together in various ways to reproduce a broad array of colors. The name of the model comes from
 * the initials of the three additive primary colors, red, green, and blue. Meanwhile, the HSV
 * representation models how colors appear under light. In it, colors are represented using three
 * components: hue, saturation and (brightness-)value. This file provides functions for converting
 * colors from one representation to the other. (description adapted from
 * https://en.wikipedia.org/wiki/RGB_color_model and https://en.wikipedia.org/wiki/HSL_and_HSV).
 */

/**
 * Conversion from the HSV-representation to the RGB-representation.
 *
 * @param hue Hue of the color.
 * @param saturation Saturation of the color.
 * @param value Brightness-value of the color.
 * @return The tuple of RGB-components.
 */
export function hsvToRgb(hue, saturation, value) {
    if (hue < 0 || hue > 360) {
        throw new Error('hue should be between 0 and 360');
    }

    if (saturation < 0 || saturation > 1) {
        throw new Error('saturation should be between 0 and 1');
    }

    if (value < 0 || value > 1) {
        throw new Error('value should be between 0 and 1');
    }

    const chroma = value * saturation;
    const hueSection = hue / 60;
    const secondLargestComponent = chroma * (1 - Math.abs((hueSection % 2) - 1));
    const matchValue = value - chroma;

    return getRgbBySection(hueSection, chroma, matchValue, secondLargestComponent);
}

/**
 * Conversion from the RGB-representation to the HSV-representation.
 *
 * @param red Red-component of the color.
 * @param green Green-component of the color.
 * @param blue Blue-component of the color.
 * @return The tuple of HSV-components.
 */
export function rgbToHsv(red, green, blue) {
    if (red < 0 || red > 255) {
        throw new Error('red should be between 0 and 255');
    }

    if (green < 0 || green > 255) {
        throw new Error('green should be between 0 and 255');
    }

    if (blue < 0 || blue > 255) {
        throw new Error('blue should be between 0 and 255');
    }

    const dRed = red / 255;
    const dGreen = green / 255;
    const dBlue = blue / 255;
    const value = Math.max(Math.max(dRed, dGreen), dBlue);
    const chroma = value - Math.min(Math.min(dRed, dGreen), dBlue);
    const saturation = value === 0 ? 0 : chroma / value;
    let hue;

    if (chroma === 0) {
        hue = 0;
    } else if (value === dRed) {
        hue = 60 * ((dGreen - dBlue) / chroma);
    } else if (value === dGreen) {
        hue = 60 * (2 + (dBlue - dRed) / chroma);
    } else {
        hue = 60 * (4 + (dRed - dGreen) / chroma);
    }

    hue = (hue + 360) % 360;

    return [hue, saturation, value];
}

export function approximatelyEqualHsv(hsv1, hsv2) {
    const bHue = Math.abs(hsv1[0] - hsv2[0]) < 0.2;
    const bSaturation = Math.abs(hsv1[1] - hsv2[1]) < 0.002;
    const bValue = Math.abs(hsv1[2] - hsv2[2]) < 0.002;

    return bHue && bSaturation && bValue;
}

function getRgbBySection(hueSection, chroma, matchValue, secondLargestComponent) {
    function convertToInt(input) {
        return Math.round(255 * input);
    }

    let red;
    let green;
    let blue;

    if (hueSection >= 0 && hueSection <= 1) {
        red = convertToInt(chroma + matchValue);
        green = convertToInt(secondLargestComponent + matchValue);
        blue = convertToInt(matchValue);
    } else if (hueSection > 1 && hueSection <= 2) {
        red = convertToInt(secondLargestComponent + matchValue);
        green = convertToInt(chroma + matchValue);
        blue = convertToInt(matchValue);
    } else if (hueSection > 2 && hueSection <= 3) {
        red = convertToInt(matchValue);
        green = convertToInt(chroma + matchValue);
        blue = convertToInt(secondLargestComponent + matchValue);
    } else if (hueSection > 3 && hueSection <= 4) {
        red = convertToInt(matchValue);
        green = convertToInt(secondLargestComponent + matchValue);
        blue = convertToInt(chroma + matchValue);
    } else if (hueSection > 4 && hueSection <= 5) {
        red = convertToInt(secondLargestComponent + matchValue);
        green = convertToInt(matchValue);
        blue = convertToInt(chroma + matchValue);
    } else {
        red = convertToInt(chroma + matchValue);
        green = convertToInt(matchValue);
        blue = convertToInt(secondLargestComponent + matchValue);
    }

    return [red, green, blue];
}
