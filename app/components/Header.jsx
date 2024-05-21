import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-purple-600 text-white py-4">
        <div className="container mx-auto">
            <div className='flex justify-between'>
                <Link href='/' alt='home'>
                <h1 className="text-2xl font-bold">Plant2Cash</h1>
                </Link>
                <ul className='flex justify-end items-center font-bold space-x-5 tracking-wide'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/'>About</Link></li>
                <li><Link href='/login'>Log in</Link></li>
                <li><Link href='/register'>Register</Link></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header