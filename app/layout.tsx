import '../styles/globals.css';
import '../styles/studio.css';

export const metadata = {
  title: 'Larry Hussey | Independent AI Engineering for Small Business',
  description:
    'Practical AI tools, connected workflows, and custom software for small businesses. Work directly with Larry Hussey, an experienced hands-on engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
