const dataset = Array.from({ length: 100 }, (_, i) => i + 1);
const itemsPerPage = 10;
let currentPage = 1;

// generado de una galleria
const gallery = document.getElementById('gallery');
const pagination = document.getElementById('pagination');

const showSpinner = () => document.getElementById('spinner').style.display = 'flex';
const hideSpinner = () => document.getElementById('spinner').style.display = 'none';



const loadImages = (ids) => {

    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Opcional: limpiar antes de cargar
    let loaded = 0;

    ids.forEach(id => {
        const img = document.createElement('img');
        img.classList.add('img');
        img.src = `https://picsum.photos/id/${id}/300/300`;
        img.onerror = () => {
            img.src = 'https://via.placeholder.com/300x300?text=Image+not+found';
        };
        img.onload = () => {
            loaded++;
            if (loaded === ids.length) hideSpinner();
        };
        gallery.appendChild(img);
    });
};


const renderPagina = page => {
    const spinner = document.getElementById('spinner');
    if (spinner) spinner.style.display = 'flex';

    gallery.innerHTML = "";

    currentPage = page; 
    renderPaginado();
    
    // Desactivar botones de paginación y marcar el botón actual
    const buttons = document.querySelectorAll('.pagination button');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('loading-page');
        if (btn.textContent === page.toString()) {
            btn.classList.add('loading-page');
        }
    });

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToShow = dataset.slice(start, end);

    setTimeout(() => {
        let loaded = 0;

        itemsToShow.forEach(id => {
            const img = document.createElement('img');
            img.classList.add('img');
            img.src = `https://picsum.photos/id/${id}/200/300`;

            img.onerror = () => {
                img.src = 'https://via.placeholder.com/200x300?text=No+Image';
            };

            img.onload = () => {
                loaded++;
                if (loaded === itemsToShow.length) {
                    if (spinner) spinner.style.display = 'none';

                    addObserver();

                    // Reactivar botones y limpiar estilos
                    const newButtons = document.querySelectorAll('.pagination button');
                    newButtons.forEach(btn => {
                        btn.disabled = false;
                        btn.classList.remove('loading-page');
                    });
                }
            };

            gallery.appendChild(img);
        });
    }, 500);
};



const renderPaginado = () => {
    pagination.innerHTML = '';
    // busco la cantidad de paginas que vamos a estar trabajando
    const totalPages = Math.ceil(dataset.length / itemsPerPage);

    const prev = document.createElement('button');
    prev.textContent = 'Anterior';
    prev.disabled = currentPage === 1;
    prev.onclick = () => {
        currentPage--;
        renderPagina(currentPage);
    };

    pagination.appendChild(prev);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.disabled = true;
        btn.onclick = () => {
            currentPage = i;
            renderPagina(currentPage);
        };
        pagination.appendChild(btn);
    }
    const next = document.createElement('button');
    next.textContent = 'Siguiente';
    next.disabled = currentPage === totalPages;
    next.onclick = () => {
        currentPage++;
        renderPagina(currentPage);
    };
    pagination.appendChild(next);
}




const addObserver = () => {
    const images = document.querySelectorAll('.gallery img');
    const gallery = document.querySelector('.gallery');
    const galleryWidth = gallery.offsetWidth;
    const cellSize = parseFloat(getComputedStyle(gallery).getPropertyValue('--cell'));
    const columns = Math.max(1, Math.floor(galleryWidth / (cellSize + 10))); // 10px gap

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const img = entry.target;
            const index = [...images].indexOf(img);

            let animType = 'middle';

            if (columns === 1) {
                animType = index % 2 === 0 ? 'right' : 'left';
            } else if (columns === 2) {
                animType = index % 2 === 0 ? 'middle' : 'right';
                if (Math.floor(index / 2) % 2 === 1) {
                    animType = index % 2 === 0 ? 'middle' : 'left';
                }
            } else {
                const pos = index % columns;
                animType = pos === 0 ? 'left' : (pos === 1 ? 'middle' : 'right');
            }

            if (entry.isIntersecting) {
                img.classList.add(`animate-from-${animType}`);
            } else {
                img.classList.remove(`animate-from-${animType}`);
            }
        });
    }, {
        threshold: 0.2
    });

    images.forEach(img => observer.observe(img));
};


renderPagina(currentPage);