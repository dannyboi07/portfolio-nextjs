import { styled } from "../../stitches.config";
import { grayDark } from "@radix-ui/colors";

export const StyledMain = styled("main", {
    variants: {
        type: {
            dark: {
                "& h1:not(.section-title)": {
                    fontSize: "2.25rem",
                    color: "$textDarkColor",
                    fontFamily: "$accentFont"
                },
                "& h2": {
                    fontSize: "1.125rem",
                    color: "$textDarkColor",
                    fontFamily: "$accentFont"
                },
                "& p": {
                    color: "$textAccentDarkColor",
                    fontFamily: "$mainFont",

                    "&.inferences": {
                        color: "$textDarkColor"
                    }
                },

                "& li": {
                    "&::before": {
                        content: "-",
                        color: "$textAccentDarkColor",
                        fontSize: "1rem",
                        margin: "0 0.75em"
                    },
                    // "& > span": {
                    //     color: "$textAccentDarkColor"
                    // }
                }
            },

            light: {
                "& p": {
                    color: "$textLightColor",
                    fontFamily: "$mainFont",
                },
                "& span": {
                    color: "$textAccentDarkColor"
                }
            }
        }
    }
})

export const StyledSection = styled("section", {
    position: "relative",
    minWidth: "99vw",
    display: "flex",
    justifyContent: "center",
    padding: "0 15em",
    border: "1px solid white",

    variants: {
        sectionType: {
            about: {
                height: "clamp(300px, 70vw, 600px)"
            },
            projects: {
                height: "clamp(300px, 70vw, 600px)",
            }
        }
    },

    "& > div.about-me-ctn": {
        display: "flex",
        justifyContent: "space-between",
        // border: "1px solid red",
        // objectFit: "",

        "& > div": {
            // maxWidth: "750px",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // border: "1px solid white",

            "& > div:first-child": {    // Name and title container
                marginBottom: "1.5em",

                "& > h2": {
                    marginTop: "0.15em",
                    fontWeight: "400",
                }
            }
        },
    
        "& > div:last-child": {
            width: 250,
            height: 250,
            // marginRight: "3em",
            // minWidth: 300,
            borderRadius: "50%",
            overflow: "hidden",

            "& img": {
                objectFit: "cover"
            }
        }
    },

    "& p": {
        lineHeight: "1.5em"
    },

    "& > div": {
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",

        "& > h1.section-title": {
            position: "absolute",
            fontSize: "5rem",
            top: "1.75em",
            left: "-7vw",
            "background-image": "linear-gradient(to right, $titleDarkerColor, $titleDarkColor)",
            "-webkit-background-clip": "text",
            "-moz-background-clip": "text",
            "background-clip": "text",
            "-webkit-text-fill-color": "transparent", 
            "-moz-text-fill-color": "transparent",
            zIndex: -1,

            "&--proj": {
                top: 0
            }
        },

        "& > a[data-hs-anchor]": {
            position: "absolute",
            top: 0,
            left: 0
        }
    },

    "& > div.projects-ctn": {
        "& > div": {
            position: "relative",
            display: "flex",
            minWidth: "100%",
            minHeight: "100%",
            overflow: "hidden",

            "& > div.project": {
                position: "absolute",
                transition: "left",
                minWidth: "100%",

                "& > div": {

                    "& > h1": {
                        marginBottom: "0.15em",
    
                        "& > span": {
                            fontSize: "1.25rem"
                        }
                    },
                    "& > h2": {
                        fontWeight: 400
                    },
                    "& > p": {
                        marginTop: "0.5em",
                    }
                },
            },

            // "& > div.project > div": {
            //     "& > h1": {
            //         marginBottom: "0.15em",

            //         "& > span": {
            //             fontSize: "1.25rem"
            //         }
            //     },
            //     "& > h2": {
            //         fontWeight: 400
            //     },
            //     "& > p": {
            //         marginTop: "0.5em",
            //     }
            // },

            "& > div:nth-child(2)": {
                marginTop: "1em",

                "& > ul > li": {
                    // paddingLeft: "2em",
                    display: "flex",
                    // "&::before": {
                    //     content: "-",
                    //     color: "white"
                    // }
                }
            }
        },
    }
});