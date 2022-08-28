import '../styles/globals.css'
import { wrapper } from "../store";
import { FirstLayout} from '../layouts/first';
import {SecondLayout} from '../layouts/second';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  // return (
  //   <FirstLayout>
  //     <SecondLayout>
  //       <Component {...pageProps} />
  //     </SecondLayout>
  //   </FirstLayout>
  
  // )

  return getLayout(<Component {...pageProps} />)
}

export default wrapper.withRedux(MyApp);
