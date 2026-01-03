import { ThemeProvider } from '../components/theme-provider';
import './globals.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  locale?: string;
};

export default function RootLayout({ children,locale}: Props) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          // attribute="class"
          // defaultTheme="system"
          // enableSystem
          // disableTransitionOnChange
          attribute="class" defaultTheme="light" enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
