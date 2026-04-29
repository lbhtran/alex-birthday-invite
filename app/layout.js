import "./globals.css";

export const metadata = {
  title: "Alex's Birthday Bash 🎉",
  description:
    "You're invited! Alex's jungle-themed birthday party — Saturday 23rd May 2026, 5pm onwards at 156 Eredine Crescent, Milton Keynes, MK5 6GZ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
