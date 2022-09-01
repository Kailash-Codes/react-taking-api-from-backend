import React , { useEffect ,useState} from "react";
import axios from 'axios';



const App = ()=>{

    const [products,setProducts] = useState([]);


    useEffect(()=>{
        axios.get("http://192.168.147.37:8000/dashboard/")
        .then(res=>{
          
          setProducts(res.data.products);
            
        }).catch(err=>{
          console.log(err);
        })
          },[])

          console.log(products[2])
    return(
<>
<h1>Hello</h1>

<ul>
{products.map((product)=>

   

    <li> {product.product_name}</li>

)}
</ul>
</>
   
)
}

export default App;