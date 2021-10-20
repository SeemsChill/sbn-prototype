//  stylePlugins: check mode and return styles.
const stylePlugins = (mode, dark, light) => {
    return !mode ? (light ? light : '') : (dark);
};

export default stylePlugins;