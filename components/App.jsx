import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Banner from './Banner'
import Lay from './Lay'
import Footer from './Footer'

const App = ({ children }, props) => {
   console.log(props)
   return (
      <>
         <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
            <title>Prueba técnica</title>
         </Head>
         <Navbar />
         <Banner />
         <Lay/>
         <Footer/>
         <div>
            {children}
         </div>
      </>
   )
}

export default App