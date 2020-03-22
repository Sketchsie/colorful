function generate() {
    const wrapper = document.getElementById("switch-colors");

    let palettes = [];

    palettes = Array.from({ length: 4 }).map((_, paletteIndex) => {
        const palette = document.createElement("div");
        palette.classList.add("palette");
        palette.id = `p-${paletteIndex + 1}`

        const colors = Array.from({ length: 4 }).map((_, colorIndex) => {
            const color = document.createElement("div");
            color.classList.add("color");
            color.id = `p-${paletteIndex + 1}-c-${colorIndex + 1}`;

            palette.appendChild(color);
            return colors;
        });

        wrapper.appendChild(palette);

        return {
            palette,
            colors
        }
    });
}

export default generate;