// ASYNC AWAIT Fetch

const requestURL = "https://lingarner.github.io/wdd230/chamber/data.json";


async function getBusiness(requestURL) {
    // can only use the await keyword with async
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const business = jsObject['business'];
        console.log(business[0].name);
        business.forEach(displayBusiness);
    }
};

getBusiness(requestURL)

function displayBusiness(item) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let img = document.createElement('img');

    
    name.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    website.textContent = item.website;
    img.textContent = item.image;
    // 
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(img);
    
    // img.setAttribute('src', item.imageurl);
    // img.setAttribute('alt', `${item.name} ${item.lastname}`)
    document.querySelector('.cards').appendChild(card);
}




// card.style.display = "none";