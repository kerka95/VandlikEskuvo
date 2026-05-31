export default function githubPagesLoader({ src }) {
  const basePath = '/VandlikEskuvo';
  if (src.startsWith('http') || src.startsWith(basePath)) {
    return src;
  }
  return `${basePath}${src}`;
}
