import { redirect } from 'next/navigation';
import { defaultLocale } from '../i18n/request';

export default function RootPage() {
  redirect(`/${defaultLocale}/auth/login`);
    // return (
    //     <div className='text-2xl'>abc</div>
    // )
}
