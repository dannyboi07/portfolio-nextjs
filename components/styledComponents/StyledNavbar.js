import { styled } from "../../stitches.config";

export const StyledNavCtn = styled("nav", {
    position: "sticky",
    top: 0,
    width: "100%",
    height: "75px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    fontFamily: "$accentFont",
    zIndex: 999,

    "& > ul": {
        listStyleType: "none",
        padding: 0,
        display: "flex",

        "& > li:not(first-child):not(:last-child)": {
            margin: "0 0.5em",
            transition: "margin 0.25s"
        }
    }
});

export const StyledNavLink = styled("a", {
    position: "relative",
    fontSize: "1.125rem",
    padding: "0.25em 0.75em 0.25em 0.75em",
    border: 0,
    borderRadius: "0.25em",

    backgroundColor: "transparent",
    transition: "padding 0.25s",
    overflow: "hidden",

    "&::after": {
        content: "",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 1.5,
        margin: "0 auto",
        borderRadius: "0 0 0.5em 0.5em",

        transform: "scaleX(0)",
        transformOrigin: "100% 50%",
        transition: "transform 0.25s"
    },
    
    "&:not([data-active=true]):hover": {
        cursor: "pointer",
    },

    "&::before": {
        content: "",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: "100%",
        borderRadius: "0.15em 0 0 0.15em",
        transition: "width 0.25s"
    },

    "&[data-active=true]": {
        padding: "0.25em 0.75em 0.25em calc(0.75em + 7.5px)",

        "&::before": {
            width: "7.5px",
        }
    },

    variants: {
        type: {
            dark: {
                color: "$textDarkColor",
                borderLeft: "2px solid $accentDarkColor",

                "&::after": {
                    backgroundColor: "$accentDarkColor",
                },

                "&::before":{
                    backgroundColor: "$accentDarkColor"
                }
            },
            light: {
                color: "$textLightColor",
                borderLeft: "2px solid $accentLightColor",

                "&::after": {
                    backgroundColor: "$accentLightColor"
                },

                "&::before":{
                    backgroundColor: "$accentLightColor"
                }
            }
        }
    }
})