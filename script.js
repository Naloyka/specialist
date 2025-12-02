
const specialist = [
    {
        id: 1,
        title: "The Ultimate Google Ads Training Course",
        image: "./img/image_1.png",
        badge: "Marketing",
        price: 100,
        author: "by Jerome Bell",
        color: "#03CEA4"
    },
    {
        id: 2,
        title: "Prduct Management Fundamentals",
        image: "./img/image_2.png",
        badge: "Management",
        price: 480,
        author: "by Marvin McKinney",
        color: "#F52F6E"
    },
    {
        id: 3,
        title: "HR  Management and Analytics",
        image: "./img/image_3.png",
        badge: "HR & Recruting",
        price: 200,
        author: "by Leslie Alexander Li",
        color: "#5A87FC"
    },
    {
        id: 4,
        title: "Brand Management & PR Communications",
        image: "./img/image_4.png",
        badge: "Marketing",
        price: 530,
        author: "by Kristin Watson",
        color: "#7772F1"
    },
    {
        id: 5,
        title: "Graphic Design Basic",
        image: "./img/image_5.png",
        badge: "Design",
        price: 1650,
        author: "by Guy Hawkins",
        color: "#F89828"
    },
    {
        id: 6,
        title: "Business Development Management",
        image: "./img/image_6.png",
        badge: "Management",
        price: 400,
        author: "by Dianne Russell",
        color: "#F52F6E"
    },
    {
        id: 7,
        title: "Highload Software Architecture",
        image: "./img/image_7.png",
        badge: "Development",
        price: 600,
        author: "by Brooklyn Simmons",
        color: "#7772F1"
    },
    {
        id: 8,
        title: "Human Resources – Selection and Recruitment",
        image: "./img/image_8.png",
        price: 150,
        badge: "HR & Recruting",
        author: "by Kathryn Murphy",
        color: "#F89828"
    },
    {
        id: 9,
        title: "User Experience. Human-centered Design",
        image: "./img/image_9.png",
        badge: "Design",
        price: 240,
        author: "by Cody Fisher",
        color: "#F52F6E"
    }
];


// Функция для создания карточки
function createCard(specialist) {
    return `
        <div tabindex="0" class="card" data-id="${specialist.id}">
            <div class="card-image">
                <img src="${specialist.image}" alt="${specialist.title}">
            </div>
            <div class="card-content">
                
                <span class="badge" style="background-color: ${specialist.color}">${specialist.badge}</span>
                <h3 class="card-title">${specialist.title}</h3>
                <div class="card-info">
                    <div class="price">${`$ ` + specialist.price}</div>
                    <p class="author"> ${specialist.author}</p>
                </div>
            </div>
        </div>
    `;
}

// Функция для отображения всех карточек
function renderCards() {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';

    specialist.forEach(specialist => {
        cardsContainer.innerHTML += createCard(specialist);
    });

    totalBooksElement.textContent = specialist.length;
}

document.addEventListener('DOMContentLoaded', function () {
    renderCards();
});