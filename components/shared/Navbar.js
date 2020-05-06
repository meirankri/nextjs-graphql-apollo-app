import Link from 'next/link'
import { Navbar, Nav} from 'react-bootstrap'

const AppLink = ({children, className,href}) =>
  <Link href={href}>
    <a className={className}> {children} </a>
  </Link>
const AppNavbar = () => {
  return (
   <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <AppLink className="navbar-brand" href="/">Meir Ankri</AppLink>
        <Navbar.Toggle/>
        <Navbar.Collapse>
         <Nav className="mr-auto">

            <AppLink href="/portfolios" className="mr-3 nav-link" >
              Portfolio
            </AppLink>
            <AppLink href="/forum/categories" className="mr-3 nav-link" >
              Forum
            </AppLink>
            <AppLink href="#" className="mr-3 nav-link" >
              CV
            </AppLink>
            <AppLink href="#" className="mr-3 nav-link" >
              Ask me
            </AppLink>


         </Nav>

         <Nav>
            <AppLink href="/register" className="mr-3 nav-link" >
                Sign Up
            </AppLink>
            <AppLink href="/login" className="mr-3 nav-link btn btn-success bg-green-2 bright">
                Sign In
            </AppLink>
         </Nav>

        </Navbar.Collapse>

      </Navbar>
    </div>
  )
}

export default AppNavbar
