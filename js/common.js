// Function to create navbar
function createNavbar() {
    return `
    <nav class="main-navigation">
        <div class="nav-container">
            <div class="logo">
                <a href="index.html">
                    <img src="images/logo.png" alt="Лого на Властелинът на пръстените" class="logo-img">
                </a>
            </div>
            
            <button class="mobile-menu-toggle" aria-label="Меню">
                <span class="toggle-bar"></span>
                <span class="toggle-bar"></span>
                <span class="toggle-bar"></span>
            </button>
            
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link">Начало</a></li>
                <li class="nav-item"><a href="history.html" class="nav-link">История</a></li>
                <li class="nav-item"><a href="ring.html" class="nav-link">Пръстенът</a></li>
                <li class="nav-item dropdown">
                    <a href="races.html" class="nav-link">Раси <span class="dropdown-arrow">›</span></a>
                    <ul class="dropdown-menu">
                        <li><a href="races.html#hobbits">Хобити</a></li>
                        <li><a href="races.html#elves">Елфи</a></li>
                        <li><a href="races.html#dwarves">Джуджета</a></li>
                        <li><a href="races.html#humans">Хора</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="characters.html" class="nav-link">Персонажи</a></li>
                <li class="nav-item"><a href="locations.html" class="nav-link">Места</a></li>
                <li class="nav-item"><a href="battles.html" class="nav-link">Битки</a></li>
                <li class="nav-item"><a href="secrets.html" class="nav-link">Тайните</a></li>
                <li class="nav-item"><a href="quiz.html" class="nav-link">Викторина</a></li>
            </ul>
        </div>
    </nav>
    `;
}

// Function to create footer
function createFooter() {
    return `
    <footer class="site-footer">
        <p>&copy; ${new Date().getFullYear()} Lord of the Rings Fan Site</p>
    </footer>
    `;
}

// Function to highlight current page
function setActivePage() {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// When DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Insert navbar if element exists
    if (document.getElementById('navbar')) {
        document.getElementById('navbar').innerHTML = createNavbar();
    }
    
    // Insert footer if element exists
    if (document.getElementById('footer')) {
        document.getElementById('footer').innerHTML = createFooter();
    }
    
    // Set active page
    setActivePage();
});

// Функция за мобилното меню
function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    toggle?.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Затваряне на менюто при клик извън него
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        }
    });

    // Dropdown функционалност за мобилни устройства
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        link?.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
    setActivePage();
    setupHeroSection();
});


function setActivePage() {
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        // Специален случай за началната страница
        if (currentPage === '' && linkPage === 'index.html') {
            link.classList.add('active');
        }
    });
}

// Добавете след setupMobileMenu()
function setupHeroSection() {
    const scrollIndicator = document.querySelector('.hero-scroll');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
}
