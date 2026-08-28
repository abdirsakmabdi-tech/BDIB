import fs from "node:fs";

const raw = fs.readFileSync("public/Overlay Final.svg", "utf8");
const svg = raw
  .replace(/<\?xml[^>]*>/, "")
  .replace(/<!DOCTYPE[^>]*>/, "")
  .replace(/width="100%" height="100%" /, "")
  .trim();

const src = `export default function OverlayLogo({ className }: { className?: string }) {
  return (
    <span
      className={\`inline-block [&_svg]:block [&_svg]:h-full [&_svg]:w-auto \${className ?? ""}\`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: ${JSON.stringify(svg)},
      }}
    />
  );
}
`;

fs.writeFileSync("components/OverlayLogo.tsx", src);
console.log("wrote OverlayLogo.tsx", svg.length);
