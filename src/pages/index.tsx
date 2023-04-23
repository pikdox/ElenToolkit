import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
          <h1>Olá, nome.</h1>
          <div className={`flex flex-row gap-1 p-24`}>
              <div className={'flex flex-col gap-1'}>
                <Link href="imc" className={"bg-blue-600 p-20 flex-grow"} draggable="false">IMC</Link>
                <Link href="#" className={"bg-blue-600 p-20 flex-grow"} draggable="false">...</Link>
                <Link href="#" className={"bg-blue-600 p-20 flex-grow"} draggable="false">...</Link>
              </div>
              <div className={'flex flex-col gap-1'}>
                <Link href="#" className={"bg-blue-600 p-20 flex-grow"} draggable="false">...</Link>
                <Link href="#" className={"bg-blue-600 p-20 flex-grow"} draggable="false">...</Link>
                <Link href="logout" className={"bg-red-600 p-20 flex-grow"} draggable="false">Sair</Link>
              </div>
          </div>
    </main>
  )
}
