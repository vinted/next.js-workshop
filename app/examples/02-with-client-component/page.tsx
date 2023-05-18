import ClickyButton from '@/components/ClickyButton'

export default function WithClientComponentPage() {
  console.log('02-with-client-component rendered')

  return (
    <div>
      <div>Rendered server side!</div>
      <ClickyButton />
    </div>
  )
}
