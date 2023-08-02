import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
    <Link href="/authentication/login" className='px-5 py-2.5 mx-4 bg-amber-200 rounded-lg'>Login</Link>
    <Link href="/authentication/register" className='px-5 py-2.5 mx-4 bg-blue-200 rounded-lg'>Register</Link>
   </main>
  )
}
