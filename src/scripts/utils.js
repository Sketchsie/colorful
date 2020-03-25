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

function generateRandomColorPalette(userColor = {}, userVariant = {}) {
    const { color: defaultColor } = generateRandomColor();
    const defaultVariant = { vR: 15, vG: 15, vB: 15, vA: 200 };

    const color = Object.assign({}, defaultColor, userColor);
    const variant = Object.assign({}, defaultVariant, userVariant);

    const { r, g, b, a } = color;
    const { vR, vG, vB, vA } = variant;

    const palette = {
        r: getVariant({ variant: vR, num: r }),
        g: getVariant({ variant: vG, num: g }),
        b: getVariant({ variant: vB, num: b }),
        a: getVariant({ variant: vA, num: a * 1000, max: 1000, min: 0 }).map(item => item / 1000),
    }

    function getVariant(userConfig = {}) {
        const defaultConfig = {
            min: 0,
            max: 255,
            num: generateRandomNumber(0, 255),
            variant: 15
        }
        const config = Object.assign({}, defaultConfig, userConfig);

        let { num, min, max, variant } = config;

        if (num + variant >= max) {
            num = [num - variant, max];
        } else if (num - variant < min) {
            num = [min, num + variant];
        } else {
            num = [num - variant, num + variant]
        }
        return num;
    }

    return palette;
}

function firstLetterUppercase(string) {
    return string.replace(/^./, string[0].toUpperCase())
}

export {
    generateRandomNumber,
    generateRandomColor,
    generateRandomColorPalette,
    firstLetterUppercase
}