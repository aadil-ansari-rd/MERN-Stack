let url = "https://catfact.ninja/fact"
let url2 = "https://dog.ceo/api/breeds/image/random"
// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         console.log("This is fact1 : ", res.data.fact)
//         let res2 = await axios.get(url);
//         console.log("This is fact2 : ", res2.data.fact)
//     }catch(err){
//         console.log(err);
//     }
// }
// getFacts();

let btn = document.querySelector('#btn1');
let fact1 = document.querySelector('#fact1')
let fact2 = document.querySelector('#fact2')

btn.addEventListener('click', async()=>{
    try{
        let res = await axios.get(url);
        fact1.innerText = "Fact 1 : " + res.data.fact ;
        let res2 = await axios.get(url);
        fact2.innerText = "Fact 2 : " + res2.data.fact ;

    }catch(err){
        console.log(err);
    }
})

let btn2 = document.querySelector("#btn2")
let image = document.querySelector('img')

btn2.addEventListener('click', async()=>{
    try{
        let res = await axios.get(url2);
        image.setAttribute('src',res.data.message);
        image.style.width="300px"
        image.style.height="300px"

    }catch(err){
        console.log(err);
    }
})


let url3 = "http://universities.hipolabs.com/search?name="
let btn3 = document.querySelector('#btn3')
let ol = document.querySelector('#ol1')

btn3.addEventListener('click', async()=>{
    let country = document.querySelector('#i1').value;
    let colleges = await getColleges(country);
    console.log(colleges)
    ol.innerText = ""
    for( col of colleges){
        let li =document.createElement('li')
        li.innerText = `College Name : ${col.name}`
        ol.appendChild(li)
    }

})

async function getColleges(country){
    try{
        let res = await axios.get(url3+country)
        return res.data;
    }catch(err){
        console.log(err)
        return [];
    }
}



let url4 = "http://universities.hipolabs.com/search?state-province="
let btn4 = document.querySelector('#btn4')
let ol2 = document.querySelector('#ol2')

btn4.addEventListener('click', async()=>{
    let state = document.querySelector('#i2').value;
    let colleges = await getColleges2(state);
    console.log(colleges)
    ol2.innerText = ""
    for( col of colleges){
        let li =document.createElement('li')
        li.innerText = `College Name : ${col.name}`
        ol2.appendChild(li)
    }

})

async function getColleges2(state){
    try{
        let res = await axios.get(url3+state)
        return res.data;
    }catch(err){
        console.log(err)
        return [];
    }
}
