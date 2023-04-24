import { Inter } from 'next/font/google'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={`flex flex-col items-center justify-between p-1`}>
      <h1 className={'text-3xl my-10'}>Olá, nome.</h1>
      <div className={`grid grid-cols-2 gap-1`}>
        <Link href="imc" className={"bg-blue-400 px-10 py-5 flex-grow rounded"} draggable="false">IMC</Link>
        <Link href="#" className={"bg-blue-400 px-10 py-5 flex-grow rounded"} draggable="false">...</Link>
        <Link href="#" className={"bg-blue-400  flex-grow rounded"} draggable="false">...</Link>
        <Link href="#" className={"bg-blue-400  flex-grow rounded"} draggable="false">...</Link>
        <Link href="#" className={"bg-blue-400 flex-grow rounded"} draggable="false">...</Link>
        <Link href="logout" className={"bg-red-400 flex-grow rounded"} draggable="false">Sair</Link>
      </div>
    </div>
  )
}
