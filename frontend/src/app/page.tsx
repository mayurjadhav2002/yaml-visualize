import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
    <Link href="/authentication/login">Login</Link>
    <Link href="/authentication/register">Register</Link>
   </main>
  )
}
