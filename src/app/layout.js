import "./globals.css";

export const metadata = {
  title: "Banking App",
  description: "A banking application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
