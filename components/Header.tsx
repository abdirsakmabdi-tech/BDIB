import { readFileSync } from "node:fs";
import path from "node:path";
import HeaderBar from "./HeaderBar";

export default function Header() {
  const navLogoSvg = readFileSync(
    path.join(process.cwd(), "public", "logo for navigation.svg"),
    "utf8",
  )
    .replace(/<\?xml[\s\S]*?\?>/, "")
    .replace(/<!DOCTYPE[\s\S]*?>/, "")
    .replace(/\s(width|height)="100%"/g, "");

  return <HeaderBar navLogoSvg={navLogoSvg} />;
}
