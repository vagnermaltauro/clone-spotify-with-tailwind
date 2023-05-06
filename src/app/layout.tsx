import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'apply tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800"></body>
    </html>
  )
}
