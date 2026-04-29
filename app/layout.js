import "./globals.css";

export const metadata = {
  title: "Alex's Birthday Bash 🎉",
  description:
    "You're invited! Alex's jungle-themed birthday party — Saturday 23rd May 2026, 5pm onwards at 156 Eredine Crescent, Milton Keynes, MK5 6GZ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
