import Image from 'next/image'
import Link from 'next/link'

function Navigation() {
  return (
    <footer className="p-4 bg-white md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 flex-none">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{' '}
        <a href="/#" className="hover:underline">
          Arda Baran Akdemir
        </a>
        .
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="/#">
            <a className="mr-4 hover:underline md:mr-6 ">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#whoami">
            <a className="mr-4 hover:underline md:mr-6">Who am I</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a className="mr-4 hover:underline md:mr-6">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/#skills">
            <a className="mr-4 hover:underline md:mr-6">Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/tools/lookup">
            <a className="mr-4 hover:underline md:mr-6">Discord Lookup</a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Navigation
