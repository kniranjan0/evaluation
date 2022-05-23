
let addbtn=document.createElement("button");

addbtn.setAttribute("id","add_product")

addbtn.addEventListener("click",addpod)
addbtn.innerHTML="Add Product"

function addpod(){
    window.location.href="/index.html"
}

document.querySelector("#navbar").append(addbtn)




let data = JSON.parse(localStorage.getItem("products"))
    data.forEach(function(ele,index){
        let div=document.createElement("div")
        div.setAttribute("id","box");
        
        let p1=document.createElement("p")
        
        p1.innerHTML=ele.type;
        
        let p2=document.createElement("p")
        p2.innerHTML=ele.desc;
        
        let p3=document.createElement("p")
        
        p3.innerText=ele.price;
        
        let divimag=document.createElement("div")
        let img=document.createElement("img");
        
        img.src=ele.image;
        
        divimag.append(img)

        let remove=document.createElement("button")

        remove.setAttribute("id","remove_product")

        remove.innerHTML="Remove";

        remove.addEventListener("click",function(){
        rem(ele,index)
        })


        
        div.append(divimag,p1,p2,p3,remove)
        document.querySelector("#all_products").append(div)
    })
    function rem(ele,index){
        console.log(index)
        let data=JSON.parse(localStorage.getItem("products")) ||[]

        let newdata=data.filter(function(e,i){
            console.log(e)
            return i!==index
        })
        console.log(newdata)

        localStorage.setItem("products",JSON.stringify(newdata))
        window.location.reload();
    }