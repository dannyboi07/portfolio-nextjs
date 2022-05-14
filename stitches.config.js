import { createStitches } from "@stitches/react";
import { mauveDark, gray, grayDark } from "@radix-ui/colors";

export const { styled } = createStitches({
    theme: {
        colors: {
            mainDarkColor: "black",
            //textDarkColor: gold.gold6,
            textDarkColor: "white",
            textAccentDarkColor: "lightgray",
            accentDarkColor: gray.gray9,

            mainLightColor: "white",
            textLightColor: "black",
            accentLightColor: mauveDark.mauve10,

            titleDarkerColor: grayDark.gray4,
            titleDarkColor: grayDark.gray6
        },
        shadows: {
            shadowDarkColor: gray.gray5,
            shadowLightColor: mauveDark.mauve10
        },
        fonts: {
            mainFont: "Inter, sans-serif",
            accentFont: "Inter, sans-serif"
        }
    }
})
