import React , {useState} from 'react';

const FormTest = () => { 
    const [ productname , setproductname ] = useState('');
    const [ price, setprice ] = useState('');
    const [ stock, setstock ] = useState('');
    const [ mark, setmark] = useState('');
    const [ descr, setdescr ] = useState('');
    const [ image, setimage ] = useState('');
    const [ product , setproduct ] = useState([
        {
        "id" : "" , 
        "product_name" : "" , 
        "mark_product":"",
        "description":"",
        "prix":0 ,
        "stock":0 , 
        "image":""
        }
])


    const handlesubmit = (event) => {
        event.preventDefault();
        console.log('Pr_Name' , productname)
        console.log('Price' , price)
        console.log('Stock' , stock)
        console.log('Mark' , mark)
        console.log('Descr' , descr)

    };
    return (
        <form onSubmit={handlesubmit}>
            <div className='formAdd'>
                <table>
                <tr>
                <td><label htmlFor='setproductname'> Product Name :</label></td>
                <td><input type="text" id='name' value={productname} onChange={(e) => setproductname(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label htmlFor='setdescr' >description :</label></td>
                    <td><input type='text' id='descr' value={descr} onChange={(e) => setdescr(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label htmlFor='setprice' >Price :</label></td>
                    <td><input type='number' id='price' value={price} onChange={(e) => setprice(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label htmlFor='setStock' >Stock :</label></td>
                    <td><input type='number' id='stock' value={stock} onChange={(e) => setstock(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label htmlFor='setmark' >mark :</label></td>
                    <td><input type='text' id='decr' value={mark} onChange={(e) => setmark(e.target.value)} /></td>
                </tr>

                </table>
                
            </div>
           <button type='submit'>Submit</button>
        </form>
     )


    
}
export default FormTest ;

