import "./globals.css";

export const metadata = {
  title: "Matrix",
  description: "Matrix Corporate Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
