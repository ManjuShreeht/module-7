import React, {useEffect} from 'react'
import '../components/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {

    const[usermessage , setMessage]=React.useState('')
    const[messagelist,setMessagelist]=React.useState([])
    const[getmessagelist,setmessagelist]=React.useState(true)
    const message=(e)=>{
   
        setMessage(e.target.value)
    }

    const handling=()=>{
        console.log(usermessage)
         fetch('https://module7-b601e-default-rtdb.asia-southeast1.firebasedatabase.app/module7.json',
         
        //objects
        { method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify({
                
                 usermessage:usermessage
             })
         }
         ).then(res=>res.json())
         .then(data=>{
            
            
             setMessage('')
             setmessagelist(true)
         })
            
        
     
     }
/*
     useEffect(()=>{
        if(getmessagelist){
        fetch('https://testing-eed95-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const loaded=[];
            for(const key in data){
                loaded.push({id:key,
                username:data[key].username,
            usermessage:data[key].usermessage})
            }
            setMessagelist(loaded)
            
        })
        setmessagelist(false)
    }
    },[getmessagelist])
    */
  return (

    <div className='footer'>
       
        <div className='footer_head'>
            <h3>Acciojob</h3>
            <div className='icons'>
                <FacebookIcon  className='ico'/>
                <InstagramIcon className='ico'/>
                <TwitterIcon  className='ico'/>
            </div>
        </div>
        <hr></hr>
      <div className='footer_row'>
        <div className='footer_col'>
        <h5>Company Info </h5>
        <p>About Us</p>
        <p>Carrier</p>
        <p>We are hiring</p>
        <p>Blog</p>

        </div>

        <div className='footer_col'>
        <h5>Legal</h5>
        <p>About Us</p>
        <p>Carrier</p>
        <p>We are hiring</p>
        <p>Blog</p>

        </div>

        <div className='footer_col'>
        <h5>Features</h5>
        <p>Business Marketing</p>
        <p>User Analytic</p>
        <p>Live Chat</p>
        <p>Unlimited Support</p>

        </div>

        <div className='footer_col'>
        <h5>Resources</h5>
        <p>IOS & Android</p>
        <p>Watch a Demo</p>
        <p>Customers</p>
        <p>API</p>

        </div>
        <div className='footer_col'>
        <h5>Get In Touch</h5>
        <div className='form1'>
            <input type="text" placeholder='enter email'  value={usermessage} name="email"  onChange={message
          }/>
            <button  onClick={handling}>Subscribe</button>
        </div>
        <p>Lorem impsum dolor amit</p>
       

        </div>
      </div>
      <div className='ending'>
        <h6>Made With ❤️ at Acciojob</h6>
      </div>
    </div>
  )
}

export default Footer

