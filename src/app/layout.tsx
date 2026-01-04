import { ThemeProvider } from '../components/theme-provider';
import './globals.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
