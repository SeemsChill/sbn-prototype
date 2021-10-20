//  Import global tyles.
import "../styles/globals.scss";

//  Import context hook.
import { AuthProvider } from "../lib/sbn-context";


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
