import '../styles/globals.css';

export const metadata = {
  title: 'Larry Hussey | Senior Software Engineer & Team Lead',
  description:
    'Senior software engineer and team lead building scalable products, practical AI, cloud architecture, and high-performing engineering teams.',
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
