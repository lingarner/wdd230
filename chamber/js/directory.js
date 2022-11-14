// ASYNC AWAIT Fetch

const requestURL = "https://lingarner.github.io/wdd230/chamber/data.json";
let jsObject = '';

async function getBusiness(requestURL) {
    // can only use the await keyword with async
    const response = await fetch(requestURL);
    
    if (response.ok) {
        jsObject = await response.json();
        console.log(jsObject);
        const business = jsObject['business'];
        // console.log(business[0].name);
        business.forEach(displayBusiness);
        business.forEach(MakeTable)
    }  
    
};

getBusiness(requestURL);



function displayBusiness(item) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let img = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    
    name.textContent = item.name;
    imgs = item.image;
    img.setAttribute("src", imgs)
    img.setAttribute("alt", "logo")
    address.textContent = item.address;
    phone.textContent = item.phone;
    website.textContent = item.website;
    // 
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    document.querySelector('.cards').appendChild(card);
}




function MakeTable(item){
    
    let table = document.createElement('tr');
    let name = document.createElement('td');
    let address = document.createElement('td');
    let phone = document.createElement('td');
    let website = document.createElement('td');
    
    name.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    website.textContent = item.website;
    
    table.appendChild(name);
    table.appendChild(address);
    table.appendChild(phone);
    table.appendChild(website);
    document.querySelector('#myTable').appendChild(table);
    
}


hiddenCards = () => {
    
    // alert("I am an alert box!");
    document.querySelector(".cards").style.display = "none";
    document.querySelector("table").style.display = "block";
};

hiddenTable = () => {
    document.querySelector("table").style.display = "none";
    document.querySelector(".cards").style.display = "flex";

};



