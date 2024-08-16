let graph = document.querySelector(".graph");
let balance = document.querySelector(".balance");
let monthlyPrice = document.querySelector(".monthly");

let items = 0;
fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            let bar = document.createElement("div");
            bar.classList.add("bar");
            
            let chart = document.createElement("div");
            chart.classList.add("chart");

            let box = document.createElement("div");
            box.classList.add("box");
            box.innerHTML = "$";

            let price = document.createElement("span");
            price.classList.add("price");
            price.innerHTML = item.amount;
            items += item.amount;
            box.appendChild(price);
            chart.appendChild(box);
            bar.appendChild(chart);

            let day = document.createElement("div");
            day.classList.add("text");
            day.innerHTML = item.day;
            bar.appendChild(day);

            let height = item.amount * 2; 
            chart.style.height = `${height}px`;


            graph.appendChild(bar);
            monthlyPrice.innerHTML = (items*3).toFixed(2);
            balance.innerHTML = (items*4).toFixed(2);
        })
    });