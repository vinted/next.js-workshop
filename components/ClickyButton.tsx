'use client'

export default function ClickyButton() {
  console.log('<ClickyButton /> called')

  function handleClick() {
    console.log('<ClickyButton /> clicked')

    alert('Thanks!')
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      onClick={handleClick}
    >
      Click Me
    </button>
  )
}
