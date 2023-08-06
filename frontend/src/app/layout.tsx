import './globals.css'
import { Inter } from 'next/font/google'
import store from '../app/Axios/store'
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>YAML Visualizer</title>

      </head>

      <Provider store={store}>

        <body className={inter.className}>

          {children}

        </body>

      </Provider>
    </html>
  )
}
