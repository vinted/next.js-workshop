'use client'

import { useState, useEffect } from 'react'

export default function DatyButton() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('/api/items')
      const result = await response.json()

      setItems(result.items)
    }

    fetchItems()
  }, [])

  console.log('<DatyButton /> called')

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      I contain data: {items}
    </button>
  )
}
