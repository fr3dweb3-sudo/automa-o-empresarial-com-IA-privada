const passthrough = new Proxy({}, { get: (_, tag) => tag });
export const motion = passthrough;
export default { motion };
