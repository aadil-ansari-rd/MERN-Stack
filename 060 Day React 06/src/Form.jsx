import { useState } from "react";





//COMMON HANDLER FOR ALL INPUT : Second type of handler is also defined in this page at the bottom .


export default function Form(){
    let [formData , setFormData]=useState({
        name : "",
        username : "",
    })
    

    // LEVEL 1  : HandleChange

    // let handleChange = (event)=>{
    //     let fieldName = event.target.name ;
    //     let newValue = event.target.value ;

    //     //Each time setFormData get a new object to set its new value
    //     setFormData((currData)=>{
    //         return{ ...currData , [fieldName] : newValue}
    //     })
    // }
    

    //LEVEL 2 : HandleChange
    let handleChange = (event)=>{
        //Each time setFormData get a new object to set its new value
        setFormData((currData)=>{
            return{ ...currData , [event.target.name] : event.target.value}
        })
    }



    let handleSubmit = (event)=>{
        event.preventDefault(); // Default :  When form is submitted the input field got empty . 
        // This function keep values in the input box on submitting and prevent all default behavior of the form on submitiing.
    

        //But if we want to make of formData object empty on submission for that we will have to 
        //write following lines :-
        setFormData({
            name : "",
            username : "",
        })  
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <div>
                <label htmlFor="name" >Name : </label>
                <input type="text" name="name" value={formData.name} id="name" onChange={handleChange}/> : {formData.name}
                </div>
                <br />
                <div>
                <label htmlFor="username" >Username : </label>
                <input type="text" name="username" value={formData.username} id="username" onChange={handleChange} /> :{formData.username}
                </div>
                <br />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}








//FOR INDIVIDUAL HANDLER OF EACH INPUT

// export default function Form(){
//     let [name , setName]= useState("");
//     let [username, setUsername]= useState("");
//     let handleName= (e)=>{
//         setName(e.target.value);
//     }
//     let handleUserame= (e)=>{
//         setUsername(e.target.value);
//     }
//     return (
//         <div>
//             <form action="">
//                 <div>
//                 <label htmlFor="name" >Name : </label>
//                 <input type="text" name="name" value={name} id="name" onChange={handleName}/> : {name}
//                 </div>
//                 <br />
//                 <div>
//                 <label htmlFor="username" >Username : </label>
//                 <input type="text" name="username" value={username} id="username" onChange={handleUserame} /> :{username}
//                 </div>
//             </form>
//         </div>
//     );
// }
