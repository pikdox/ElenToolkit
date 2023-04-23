import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className={'flex flex-col min-w-full min-h-screen'}>
        <header className={'bg-blue-600 flex-grow py-10'}>
            <h1 className={'text-6xl text-center text-blue-100'}>Elen Toolkit</h1>
        </header>
        <nav className={'flex flex-row bg-blue-500 text-center text-blue-100'}>
            <Link href="tutorial" className={'bg-blue-400 flex-grow p-5'}>Tutorial</Link>
            <Link href="home" className={'bg-blue-400 flex-grow p-5'}>Home</Link>
            <Link href="login" className={'bg-blue-400 flex-grow p-5'}>Login</Link>
        </nav>
        <Main />
        <footer>
            <h2><Link href="https://github.com/kleber-code/ElenToolkit">kleber-code(github)</Link></h2>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}
