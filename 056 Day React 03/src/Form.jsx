function Form(){

    function submit(event){
        event.preventDefault(); // It will prevent all default functions
        console.log("Form submitted"); //At default : this is shown on console for a small fragment of seceond
    }


    return(
        // <form onSubmit={submit} > {/* If you want to make a submit type button then you will have to use onSubmit in form tag */}
        //     <input type="text"  placeholder="Write something"/>
        //     <button onClick={submit}>Submit</button>
        // </form>
        <form > 
            <input type="text"  placeholder="Write something"/>
            <button onClick={submit}>Submit</button>
        </form>
    );
}

export default Form ; 