import { useState } from "react";
import { useFormik } from 'formik';

//For Validation Tutorial with Formik : https://formik.org/docs/tutorial

export default function CommentForm({addNewComment}) {


   

    const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15) {
        errors.username = 'Username can not be empty';
    }
    
    if (!values.remarks) {
        errors.remarks = 'Remarks can not be empty';
    }
    
    if (!values.rating) {
        errors.rating = 'Required';
    } 
    
    return errors;
    };
    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
          },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    


    // let handleSubmit  = (event)=>{
    //     console.log(formData);
    //     addNewComment(formData);// this form data take the comment to parent component
    //     event.preventDefault();
    //     setFormData({
    //         username : "",
    //         remarks : "",
    //         rating : 5,
    //     })
    // }
    return (
        <div style={{textAlign: "center"}}>

            <h2>Give a comment!</h2>


            <form onSubmit={formik.handleSubmit} action="">
                
                <div>
                    <label htmlFor="username" >Username : </label>
                    <input type="text" name="username"  id="username" value={formik.values.username}  onChange={formik.handleChange} /> 
                    {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
                </div>
                <br />
                <div>
                    <label htmlFor="remarks" >Remarks : </label>
                    <textarea name="remarks" id="remarks"   onChange={formik.handleChange} value={formik.values.remarks} ></textarea>
                    {formik.errors.remarks ? <div style={{color:"red"}}>{formik.errors.remarks}</div> : null}
                </div>
                <br />
                <div>
                    <label htmlFor="rating" >Rating : </label>
                    <input type="number" name="rating"  id="rating" min={1} max={5} value={formik.values.rating}   onChange={formik.handleChange}  /> 
                    {formik.errors.rating ? <div style={{color:"red"}}>{formik.errors.rating}</div> : null}
                </div>
                <br />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}




// export default function CommentForm({addNewComment}) {

//     let [formData , setFormData]= useState({
//         username : "",
//         remarks : "",
//         rating : 5,
//     })

//     let handleInputChange = (event)=>{
//         setFormData((currData)=>{
//             return{...currData , [event.target.name]: event.target.value}
//         })
//     }


//     let handleSubmit  = (event)=>{
//         console.log(formData);
//         addNewComment(formData);// this form data take the comment to parent component
//         event.preventDefault();
//         setFormData({
//             username : "",
//             remarks : "",
//             rating : 5,
//         })
//     }
//     return (
//         <div style={{textAlign: "center"}}>

//             <h2>Give a comment!</h2>


//             <form onSubmit={handleSubmit} action="">
                
//                 <div>
//                     <label htmlFor="username" >Username : </label>
//                     <input type="text" name="username"  id="username" value={formData.username} onChange={handleInputChange} /> {formData.username}
//                 </div>
//                 <br />
//                 <div>
//                     <label htmlFor="remarks" >Remarks : </label>
//                     <textarea name="remarks" id="remarks"  onChange={handleInputChange} value={formData.remarks} ></textarea>{formData.remarks}
//                 </div>
//                 <br />
//                 <div>
//                     <label htmlFor="rating" >Rating : </label>
//                     <input type="number" name="rating"  id="rating" min={1} max={5} value={formData.rating}  onChange={handleInputChange}  /> {formData.rating}
//                 </div>
//                 <br />
//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// }