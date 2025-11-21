const touristSpots = [
    {
        name: "Shillong",
        location: "Meghalaya",
        description: "Known as the 'Scotland of the East', Shillong is famous for its rolling hills, waterfalls, and vibrant culture.",
        image: "images/shillong.jpg"
    },
    {
        name: "Tawang Monastery",
        location: "Arunachal Pradesh",
        description: "India's largest monastery, set amidst towering mountains and serene landscapes, offering spiritual tranquility and stunning views.",
        image: "images/tawang.jpg"
    },
    {
        name: "Kaziranga National Park",
        location: "Assam",
        description: "A UNESCO World Heritage Site renowned for its population of one-horned rhinoceroses and rich wildlife.",
        image: "images/kaziranga.jpg"
    }
];

const container = document.getElementById('tourist-spots');
touristSpots.forEach(spot => {
    const card = document.createElement('div');
    card.className = 'spot-card';
    card.innerHTML = `
        <img src="${spot.image}" alt="${spot.name}">
        <h2>${spot.name}</h2>
        <h4>${spot.location}</h4>
        <p>${spot.description}</p>
    `;
    container.appendChild(card);
});
