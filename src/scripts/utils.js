function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomColor(userConfig = {}) {
    const defaultConfig = {
        r: [0, 255],
        g: [0, 255],
        b: [0, 255],
        a: [1, 1],
    }
    const config = Object.assign({}, defaultConfig, userConfig);

    let { r, g, b, a } = config;

    let [minR, maxR] = r;
    let [minG, maxG] = g;
    let [minB, maxB] = b;
    let [minA, maxA] = a;

    maxA *= 1000;
    minA *= 1000;

    r = generateRandomNumber(minR, maxR);
    g = generateRandomNumber(minG, maxG);
    b = generateRandomNumber(minB, maxB);
    a = generateRandomNumber(minA, maxA) / 1000;

    return {
        string: `rgba(${r}, ${g}, ${b}, ${a})`,
        color: {
            r, g, b, a
        }
    };
}

function generateRandomColorPalette(userColor = {}, userletiant = {}) {
    const { color: defaultColor } = generateRandomColor();
    const defaultletiant = { vR: 15, vG: 15, vB: 15, vA: 200 };

    const color = Object.assign({}, defaultColor, userColor);
    const letiant = Object.assign({}, defaultletiant, userletiant);

    const { r, g, b, a } = color;
    const { vR, vG, vB, vA } = letiant;

    const palette = {
        r: getletiant({ letiant: vR, num: r }),
        g: getletiant({ letiant: vG, num: g }),
        b: getletiant({ letiant: vB, num: b }),
        a: getletiant({ letiant: vA, num: a * 1000, max: 1000, min: 0 }).map(item => item / 1000),
    }

    function getletiant(userConfig = {}) {
        const defaultConfig = {
            min: 0,
            max: 255,
            num: generateRandomNumber(0, 255),
            letiant: 15
        }
        const config = Object.assign({}, defaultConfig, userConfig);

        let { num, min, max, letiant } = config;

        if (num + letiant >= max) {
            num = [num - letiant, max];
        } else if (num - letiant < min) {
            num = [min, num + letiant];
        } else {
            num = [num - letiant, num + letiant]
        }
        return num;
    }

    return palette;
}

function firstLetterUppercase(string) {
    return string.replace(/^./, string[0].toUpperCase())
}

function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed'; //avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
function rgbToHex(rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};
function fullColorHex(r, g, b) {
    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);
    return red + green + blue;
};

function debounce(func, wait = 100, immediate) {
    let timeout;

    return function executedFunction() {
        let context = this;
        let args = arguments;

        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        let callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};
function createUniqueId() {
    let dt = new Date().getTime();
    let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
        c
    ) {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return "palette-id-" + uuid;
}
function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {

        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        return 'light';
    }
    else {

        return 'dark';
    }
}
export {
    generateRandomNumber,
    generateRandomColor,
    generateRandomColorPalette,
    firstLetterUppercase,
    copyToClipboard,
    rgbToHex,
    fullColorHex,
    debounce,
    createUniqueId,
    lightOrDark
}