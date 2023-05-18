import DummyButton from '@/components/DummyButton'

export default function ExampleServerSidePage() {
  console.log('01-server-side rendered')

  return (
    <div>
      <div>Rendered server side!</div>
      <DummyButton />
    </div>
  )
}
