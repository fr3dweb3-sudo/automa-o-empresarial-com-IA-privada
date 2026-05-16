function fontFactory(name) {
  return function loadFont(options = {}) {
    return {
      className: `${name.toLowerCase()}-font`,
      variable: options.variable || `--font-${name.toLowerCase()}`,
      style: { fontFamily: name }
    };
  };
}
export const Inter = fontFactory("Inter");
export const Space_Grotesk = fontFactory("Space Grotesk");
