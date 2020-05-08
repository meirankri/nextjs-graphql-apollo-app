import 'isomorphic-unfetch'
import '@/styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "@/components/shared/Navbar"
import Hero from "@/components/shared/Hero";

// first component to be executed before all pages of the pages
// this code is executed on the server
const MyApp = ({Component, pageProps}) =>{
  const isHomePage=() => Component.name === 'Home';
  return (
    <>
      <Navbar/>
      {/* check if component.name is home and display the hero component  */}
      {isHomePage() && <Hero/>}
      {Component.name}
      <div className="container">
        {/* Component correspond au component present dans pages qui est
        appelé par la route ex: si l'url est / le Component est Home  */}
        <Component  {...pageProps} />
      </div>
      {isHomePage() && <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
      <div className="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
      </footer>}
    </>
  )

}
// when getInitialProps from _app is call, the getInitialprops from other pages/component not be called
// we have to call the initialProps from the page component and send into the pageProps
// MyApp.getInitialProps = async (context) =>{

//   console.log('get initial app');
//   const initialProps = App.getInitialProps && await App.getInitialProps(context)
//   console.log(initialProps);

//   return {pageProps:
//     {appData: 'hello app data', ...initialProps.pageProps}
//   }
// }
export default MyApp

