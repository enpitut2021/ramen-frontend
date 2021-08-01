<<<<<<< HEAD
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web"

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  )
}

export default MyApp
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
>>>>>>> refs/remotes/origin/main
