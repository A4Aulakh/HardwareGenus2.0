
import Head from 'next/head'
import Footer from '../../Components/Footer'
import TopNavbar from '../../Components/TopNavbar'
import './globals.css'


export const metadata = {
  generator: 'Hardware Genus',
  applicationName: 'Hardware Genus',
  title: {
    default: 'Hardware Genus - Trending News of the Growing Tech',
    template: `%s - Hardware Genus`,
  },
  description: 'Welcome to Hardware Genus - Your Ultimate Source for PC Tech Industry News! Stay up-to-date with the latest trends, reviews, and breakthroughs in the world of computer technology. From gaming gear to cutting-edge hardware releases, our expert team brings you unbiased insights and in-depth analysis. Join our community of tech enthusiasts and explore the future of PCs. Get the latest scoop on Hardware Genus, your one-stop destination for all things PC tech. Click now for reliable and genuine reporting on the Homepage!',
  keywords: ['hardwaregenus', 'hardwaregenus news', 'hardawre genus', 'hardware genus news india', 'hardware genus india', 'gaming news', 'nvidia', 'amd', 'intel'],
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0",
  verification: {
    google: "CSMiCUgPj96VI3pcu6_vil6u-zSnTsFN2_dzxa41w5I"
    // google: "s4VFYOP86jD8GrEF9MlP_30FQCGNQTpheDuu2axYIPY"
  },

  creator: 'Sukhmanpreet Singh',
  publisher: 'Hardware Genus Group',

  alternates: {
    canonical: 'https://www.hardwaregenus.online/',
  },
  openGraph: {
    images: '/icon.png',
  },

}



export default async function RootLayout({ children }) {

  return (
    <html lang="en" >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <body style={{overflowX: 'hidden'}} >
        <TopNavbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}


