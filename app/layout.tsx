import '../styles/globals.css';

export const metadata = {
  title: 'Larry Hussey - Senior Software Engineer', // ✅ Sets page title globally
  description: 'Larry Hussey, Senior Software Engineer in West Palm Beach, FL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
