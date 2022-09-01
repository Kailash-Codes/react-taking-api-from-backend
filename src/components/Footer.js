
import React from 'react';
import '../assets/css/footerStyle.css'
class Footer extends React.Component{
    constructor(){
        super();
        console.log("yes it is called");
    }
render(){
    console.log("render is now called");
    return (
    <>
    <div className='f-0'>
    <div>&copy; King Kd 2022</div>
    <a href='https://facebook.com'>Facebook</a>&ensp;
    <a href='https://instagram.com'>Instagram</a>&ensp;
    <a href='https://github.com/kailash-codes'>Github</a>
    </div>
    </>)
}
}
export default Footer;