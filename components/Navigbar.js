import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image'
import styles from '../styles/Navigbar.module.css'

const Navigbar = () => {
    return (
      <>
         <Navbar sticky="top" collapseOnSelect expand="lg" bg="white" variant="light">
           <Navbar.Brand className={styles.endMargin} href="/">
            <Image
              src='/assets/toro-logo.png' 
              width="120%" 
              height="80%" 
              alt="toro" 
              objectFit="contain"
              />
           </Navbar.Brand>
           <Navbar.Toggle className={styles.endMargin} aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className={styles.routes}>
              <Nav.Link href="/">Welcome</Nav.Link>
              <Nav.Link href="/order">Order</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
              <Nav.Link href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F171694852715%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink">Contact</Nav.Link>
           </Nav>
           </Navbar.Collapse>
         </Navbar>
     </>
    )
}

export default Navigbar
