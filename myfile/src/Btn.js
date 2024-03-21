import {useState} from 'react'
function Btn()
{
    const [status,setStetus] = useState(false)
    return(
        <div>
            {
                status ? <h1>Hello Wold</h1> : null
            }
            <h2>Welcome</h2>
            <h2>
                <button onClick={()=>setStetus(false)}>Hide</button>
                <button onClick={()=>setStetus(true)}>Show</button>
                <button onClick={()=>setStetus(!status)}>Toggle</button>
            </h2>
        </div>
    )
}
export default Btn