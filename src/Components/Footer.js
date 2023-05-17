
import { Link } from 'react-router-dom'
function Footer(){
    return(
        <footer> 
               <div className="footer__bottom bg-theme py-2">
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-12">
                           <div className="footer__copyright d-flex justify-content-center lign-iems-center">
                           {/* <Link href="https://hnhtechsolutions.com/">   <p className='text-light'>© 2023 Bussiness Agent. Design by HNH Tech Solution </p></Link> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>   
         </footer>
    )
}
export default Footer