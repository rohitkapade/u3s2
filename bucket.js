// On clicking remove button the item should be removed from DOM as well as localstorage.

let sum;


let lsData = JSON.parse(localStorage.getItem("coffee") ) || []
let box = document.getElementById("bucket")

lsData.forEach(function(ele,ind){

   

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
    addtocart.innerText="Delete"
    addtocart.setAttribute("id", "remove_coffee")
    addtocart.addEventListener("click", function(){
        // console.log(ele)

        event.target.parentNode.remove();
        // lsData.splice(ind,1)
        
    })

    sum =  ele.price

   

    

    card.append(imgdiv,type,price,addtocart)
    box.append(card)
    
});

let amount = document.getElementById("total_amount")
amount.innerText=sum



function CheckoutPage(){
    window.location.href="checkout.html"
}

