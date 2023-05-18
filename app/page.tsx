import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/examples/01-server-side"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Server Side</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Page and component rendered server-side
          </p>
        </Link>

        <Link
          href="/examples/02-with-client-component"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Client Component</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Page rendered server-side with Client Component
          </p>
        </Link>

        <Link
          href="examples/03-data-fetching-server-side"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Data Fetching (SSR)</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Data fetched and rendered server-side
          </p>
        </Link>

        <Link
          href="examples/04-data-fetching-client-side"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">Data Fetching (CSR)</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Page rendered server-side and the data fetched and rendered client-side
          </p>
        </Link>
      </div>
    </main>
  )
}
