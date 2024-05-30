import ContentLoader from "react-content-loader";

export default function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={103}
      viewBox="0 0 400 103"
      backgroundColor="#dbd6d6"
      foregroundColor="#c7bebe"
    >
      <rect x="8" y="7" rx="3" ry="3" width="88" height="10" />
      <rect x="10" y="39" rx="0" ry="0" width="70" height="40" />
      <rect x="84" y="39" rx="0" ry="0" width="70" height="40" />
      <rect x="157" y="39" rx="0" ry="0" width="70" height="40" />
    </ContentLoader>
  )
}