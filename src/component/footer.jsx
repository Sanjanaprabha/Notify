import React from'react'
const footer = () =>{
    const currentYear = new Date().getFullYear()
    return(
        <footer>

        <p>
           &copy;Notify {currentYear} .All rights reserved
        </p>
        </footer>
    )
}
export default footer