import * as AntColors from "@ant-design/colors";

// Customize light-theme here
const themeConfig = {
    primary: [AntColors.blue[5]],
    secondary: [],
    heading: [],
    font: [],
    info: [],
    success: [],
    danger: [],
    warning: [],
};

// Customize dark-theme here
// Use AntColors.presetDarkPalettes.COLORNAME[INDEX] for dark palletes
const themeConfigDark = {
    primary: [AntColors.presetDarkPalettes.blue[5]],
    secondary: [],
    heading: [],
    font: [],
    info: [],
    success: [],
    danger: [],
    warning: [],
};

const BRNTheme = {
    ...AntColors,
    ...themeConfig,
    presetDarkPalettes: { ...AntColors.presetDarkPalettes, ...themeConfigDark },
};

export default BRNTheme;
