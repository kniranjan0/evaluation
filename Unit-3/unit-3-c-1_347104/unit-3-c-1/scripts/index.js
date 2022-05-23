//store the products array in localstorage as "products"

let showbtn=document.createElement("button")
showbtn.setAttribute("id","show_products");
showbtn.innerHTML="Show product";

document.querySelector("#navbar").append(showbtn)

showbtn.addEventListener("click",showprod)

function showprod(){
    window.location.href="/inventory.html"
}


document.querySelector("#add_product").addEventListener("click",myfun);

var data=JSON.parse(localStorage.getItem("products")) || []
// var arr=[];
function myfun(){
    event.preventDefault();
    let obj={}
    let form=document.querySelector("#products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let img=form.image.value;

    obj={
        type:type,
        desc:desc,
        price:price,
        image:img
    }

    data.push(obj);
    localStorage.setItem("products",JSON.stringify(data))

    window.location.reload();

}