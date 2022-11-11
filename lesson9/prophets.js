// ASYNC AWAIT Fetch

const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

async function getProphets(requestURL) {
    // can only use the await keyword with async
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const prophets = jsObject['prophets'];
        console.log(prophets[0].lastname);
        prophets.forEach(displayProphets);
    }
};

getProphets(requestURL)

function displayProphets(item) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img');

    
    h2.textContent = `${item.name} ${item.lastname}`;
    dob.textContent = item.birthdate;
    pob.textContent = item.birthplace;
    // 
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);
    
    img.setAttribute('src', item.imageurl);
    img.setAttribute('alt', `${item.name} ${item.lastname}`)
    document.querySelector('.cards').appendChild(card);
}