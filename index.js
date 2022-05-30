// Add the coffee to local storage with key "coffee"

let url = `http://masai-mock-api.herokuapp.com/coffee/menu`

dataFetching()

async function dataFetching(){
    

    let data = await fetch(url)
    let result =await data.json()
    // console.log(result)

    let res = result.menu.data
    // console.log(res)
    appendData(res)

}

let lsMenu = JSON.parse(localStorage.getItem("coffee"))  || []

function appendData(res){

    let menu = document.getElementById("menu")

    res.forEach(function(ele,i) {

        let count = document.getElementById("coffee_count")
        count.innerText= lsMenu.length
        // window.location.reload()

        let card = document.createElement("div")
        card.style="width:250px; height:370px; border:1px solid black; margin-top:30px;text-align:center;"

        let imgdiv = document.createElement("div")
        imgdiv.style= "width:80%; height:60%; margin-left:25px"
        

        let img = document.createElement("img")
        img.style="width:100%; height:100%"
        img.src=ele.image
        imgdiv.append(img)

        let type = document.createElement("p")
        type.innerHTML=ele.title


        let price = document.createElement("p")
        price.innerText=ele.price

        let addtocart = document.createElement("button")
        addtocart.innerText="Add to Bucket"
        addtocart.addEventListener("click", function(){

            lsMenu.push(ele)
            console.log(lsMenu)

            localStorage.setItem("coffee", JSON.stringify(lsMenu))
        })

        card.append(imgdiv,type,price,addtocart)
        menu.append(card)

        
    });
}





