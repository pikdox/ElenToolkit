import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="application-name" content="ElenToolkit" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ElenToolkit" />
        <meta name="description" content="A toolkit for teacher Elen" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="ElenToolkit" />
        <meta name="twitter:description" content="A toolkit for teacher Elen" />
        <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ElenToolkit" />
        <meta property="og:description" content="A toolkit for teacher Elen" />
        <meta property="og:site_name" content="ElenToolkit" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />

        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
      </Head>
      <body className={'flex flex-col min-w-full min-h-screen'}>
        <header className={'bg-blue-400 py-5'}>
            <h1 className={'text-3xl text-center text-blue-100'}>Elen Toolkit</h1>
        </header>
        <nav className={'flex flex-row bg-blue-400 text-center text-blue-100'}>
            <Link href="tutorial" className={'bg-blue-500 flex-grow py-2 hover:bg-blue-600'}>Instalar</Link>
            <Link href="/" className={'bg-blue-500 flex-grow py-2 hover:bg-blue-600'}>Home</Link>
            <Link href="/sign/in" className={'bg-blue-500 flex-grow py-2 hover:bg-blue-600 h-'}>Entrar</Link>
        </nav>
        <main className={'flex-grow'}>
          <Main />
        </main>
        <footer className='bg-gray-700'>
            <h2 className='text-center text-blue-100'><Link href="https://github.com/kleber-code/ElenToolkit">kleber-code(github)</Link></h2>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
