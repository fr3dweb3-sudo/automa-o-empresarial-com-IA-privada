export default function Image(props) {
  const { src, alt = "", width, height, className, priority, ...rest } = props || {};
  return { type: "img", props: { src, alt, width, height, className, loading: priority ? "eager" : "lazy", ...rest } };
}
