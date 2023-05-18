type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">{children}</div>
    </main>
  )
}
