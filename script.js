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
        title: "Product Management Fundamentals",
        image: "./img/image_2.png",
        badge: "Management",
        price: 480,
        author: "by Marvin McKinney",
        color: "#F52F6E"
    },
    {
        id: 3,
        title: "HR Management and Analytics",
        image: "./img/image_3.png",
        badge: "HR & Recruiting",
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
        badge: "HR & Recruiting",
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

let currentCategory = 'all';
let currentSearch = '';


function createCard(specialist) {
    return `
        <div tabindex="0" class="card" data-id="${specialist.id}" data-category="${specialist.badge}">
            <div class="card-image">
                <img src="${specialist.image}" alt="${specialist.title}">
            </div>
            <div class="card-content">
                <span class="badge" style="background-color: ${specialist.color}">${specialist.badge}</span>
                <h3 class="card-title">${specialist.title}</h3>
                <div class="card-info">
                    <div class="price">${'$' + specialist.price}</div>
                    <p class="author">${specialist.author}</p>
                </div>
            </div>
        </div>
    `;
}

// Функция фильтрации специалистов
function filterSpecialists() {
    return specialist.filter(item => {
        let categoryMatch = false;
        if (currentCategory === 'all') {
            categoryMatch = true;
        } else {
            const itemCategory = item.badge.toLowerCase().replace(/\s+/g, '');
            const selectedCategory = currentCategory.toLowerCase().replace(/\s+/g, '');
            categoryMatch = itemCategory.includes(selectedCategory);
        }
        
        let searchMatch = false;
        if (currentSearch === '') {
            searchMatch = true;
        } else {
            const searchLower = currentSearch.toLowerCase();
            searchMatch = item.title.toLowerCase().includes(searchLower) ||
                         item.author.toLowerCase().includes(searchLower) ||
                         item.badge.toLowerCase().includes(searchLower);
        }
        
        return categoryMatch && searchMatch;
    });
}

function updateTabCounters() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        const category = tab.getAttribute('data-category');
        let count = 0;
        
        if (category === 'all') {
            count = specialist.length;
        } else {
            const categoryLower = category.toLowerCase().replace(/\s+/g, '');
            count = specialist.filter(item => {
                const itemCategory = item.badge.toLowerCase().replace(/\s+/g, '');
                return itemCategory.includes(categoryLower);
            }).length;
        }
        
        const counterSpan = tab.querySelector('.tab-counter');
        if (counterSpan) {
            counterSpan.textContent = count;
        }
    });
}

function renderCards() {
    const cardsContainer = document.getElementById('cardsContainer');
    const filteredSpecialists = filterSpecialists();
    
    cardsContainer.innerHTML = '';
    
    if (filteredSpecialists.length === 0) {
        cardsContainer.innerHTML = `
            <div class="no-results" style="text-align: center; width: 100%; padding: 40px;">
                <h3 style="color: #777; font-family: 'Lato', sans-serif;">
                    No courses found.
                </h3>
            </div>
        `;
        return;
    }
    
    filteredSpecialists.forEach(specialist => {
        cardsContainer.innerHTML += createCard(specialist);
    });
}

function setActiveTab(category) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const activeTab = document.querySelector(`[data-category="${category}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    currentCategory = category;
}

document.addEventListener('DOMContentLoaded', function () {
    updateTabCounters();
    renderCards();
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            setActiveTab(category);
            renderCards();
        });
    });
    
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value.trim();
        renderCards();
    });
    
    document.querySelector('[data-category="all"]').addEventListener('click', function() {
        searchInput.value = '';
        currentSearch = '';
    });
});