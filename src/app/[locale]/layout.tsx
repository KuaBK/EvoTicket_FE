import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { notFound, redirect } from 'next/navigation';
import { locales, defaultLocale, LocaleType } from '@/src/i18n/request';
import { Header } from '@/src/components/header';

type Props = {
  children: ReactNode;
  params: { locale?: string };
};

// Hàm load messages tương ứng locale
async function getMessages(locale: LocaleType) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound(); // fallback empty messages
  }
}

export default async function LocaleLayout({ children, params }: Props) {
    // unwrap params
  const unwrappedParams = await params; 
  const requested = unwrappedParams.locale;
  // const requested = params?.locale;

  // Nếu không có param locale → redirect về defaultLocale
  if (!requested || !locales.includes(requested as LocaleType)) {
    redirect(`/${defaultLocale}/auth/login`);
  }


  const locale: LocaleType = requested as LocaleType;
  const messages = await getMessages(locale);

  return (
    // <html lang={locale}>
    //   <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          
        </NextIntlClientProvider>
    //   {/* </body>
    // </html> */}
  );
}
