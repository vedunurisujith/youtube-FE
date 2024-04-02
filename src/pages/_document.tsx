import { Html, Head, Main, NextScript } from "next/document";
import { AppBar } from "./components/AppBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <AppBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
