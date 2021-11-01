import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/movies">
                    Movies
                </Link>
            </li>
            <li>
                <Link href="/create">
                    Add Movies
                </Link>
            </li>
        </ul>
    </nav>
  )
}
