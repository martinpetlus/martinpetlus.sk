import './globals.css';

export const metadata = {
  title: 'Martin Petluš',
  description: "Martin Petluš's personal website.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
