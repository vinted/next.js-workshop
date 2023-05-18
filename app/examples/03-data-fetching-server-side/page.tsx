async function getItems() {
  const response = await fetch('http://localhost:3000/api/items', {
    // cache: 'no-store',
    // next: { revalidate: 5 },
  })
  const result = await response.json()

  return result.items
}

export default async function DataFetchingServerSidePage() {
  console.log('03-data-fetching-server-side rendered')
  const items = await getItems()

  console.log({ items })

  return (
    <div>
      <div>Rendered server side with data {items}!</div>
    </div>
  )
}
