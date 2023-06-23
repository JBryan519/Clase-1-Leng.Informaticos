const sumar = ()=> {
    const n1 = document.getElementById("txtn1").value
    const n2 = document.getElementById("txtn2").value
    const s = parseFloat(n1)+parseFloat(n2)
    document.getElementById("res").innerHTML=s

}

function mostrar(){
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars){
        text += x + "<br>";
    }

    document.getElementById("demo").innerHTML = text;
}

let orders = [
    {
        orderNum: 1,
        total: 100,
        customer: {
            name: "Bryan Cantillo"
        }
    },{
        orderNum: 2,
        total: 200,
        customer: {
            name: "Carlos Reygoza"
        }
    },{
        orderNum: 3,
        total: 300,
        customer: {
            name: "Andres Bedoya"
        }
    }
]
let simpleOrders = orders.map(order =>  
    {
        console.log("orderNum => ", order.orderNum)
        console.log("total => ", order.total)
        console.log("customerName => ", order.customer.name)
        return{
            orderNum: order.orderNum, total:order.total, customName:order.customer.name

        }
    })
    console.log("simpleOrders => ", simpleOrders)

/*
const sumar = function (){
    const n1 = document.getElementById("txtn1").value
    const n2 = document.getElementById("txtn2").value
    const s = parseFloat(n1)+parseFloat(n2)
    document.getElementById("res").innerHTML=s

}
*/

/*
function sumar(){
    const n1 = document.getElementById("txtn1").value
    const n2 = document.getElementById("txtn2").value
    const s = parseFloat(n1)+parseFloat(n2)
    document.getElementById("res").innerHTML=s

}
*/