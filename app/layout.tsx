import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'International Comrades Coffee Shop',
  description: 'Cafe in London. Savor London\'s coffee culture at our cozy shop, where rich artisanal brews blend with the city\'s vibrant atmosphere. Join us for a delightful caffeine experience in the heart of the capital.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
