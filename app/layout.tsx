import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeToggleProvider } from './StyledRoot';
import Header from './components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeToggleProvider>
          <Header />
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </ThemeToggleProvider>
      </body>
    </html>
  );
}