document.addEventListener('DOMContentLoaded', function() {
    
    // ... (Mantenha o código do Hero Slider aqui) ...


    // --- LÓGICA PARA O SCROLLER DE LICORES (ATUALIZADO) ---
    const scroller = document.getElementById('licores-scroller');
    
    if (scroller) {
        const scrollLeftBtn = document.getElementById('scroll-left-btn');
        const scrollRightBtn = document.getElementById('scroll-right-btn');
        const scrollAmount = 352;

        // Botões (Clique)
        scrollRightBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        scrollLeftBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        // ---------------------------------------------------------
        // 1. Lógica para RODA DO MOUSE (Mouse Wheel)
        // Transforma o scroll vertical em horizontal quando o mouse está em cima
        // ---------------------------------------------------------
        scroller.addEventListener('wheel', (evt) => {
            // Se a tela for grande (Desktop), prevenimos o scroll da página e movemos o carrossel
            if(window.innerWidth > 768) {
                evt.preventDefault();
                scroller.scrollLeft += evt.deltaY;
                // Remove o comportamento 'smooth' temporariamente para a roda ser responsiva
                scroller.style.scrollBehavior = 'auto'; 
            }
        });
        // Retorna o smooth scroll quando o mouse sai
        scroller.addEventListener('mouseleave', () => {
             scroller.style.scrollBehavior = 'smooth';
        });


        // ---------------------------------------------------------
        // 2. Lógica para ARRASTAR COM O MOUSE (Drag to Scroll)
        // Permite clicar e puxar como se fosse touch
        // ---------------------------------------------------------
        let isDown = false;
        let startX;
        let scrollLeft;

        scroller.addEventListener('mousedown', (e) => {
            isDown = true;
            scroller.style.scrollBehavior = 'auto'; // Remove suavidade para o arraste ser direto
            scroller.classList.add('active');
            startX = e.pageX - scroller.offsetLeft;
            scrollLeft = scroller.scrollLeft;
        });

        scroller.addEventListener('mouseleave', () => {
            isDown = false;
            scroller.classList.remove('active');
            scroller.style.scrollBehavior = 'smooth';
        });

        scroller.addEventListener('mouseup', () => {
            isDown = false;
            scroller.classList.remove('active');
            scroller.style.scrollBehavior = 'smooth';
        });

        scroller.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scroller.offsetLeft;
            const walk = (x - startX) * 2; // O número multiplica a velocidade do arraste
            scroller.scrollLeft = scrollLeft - walk;
        });
    }


    document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentSlide = 0;
    const slideInterval = 5000;
    let autoPlay;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    function startAutoPlay() {
        autoPlay = setInterval(nextSlide, slideInterval);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlay);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
    });

    showSlide(currentSlide);
    startAutoPlay();
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    let currentSlide = 0;
    const slideInterval = 5000; // Tempo em milissegundos para troca automática (5 segundos)
    let autoPlay;

    function showSlide(index) {
        // Remove a classe 'active' de todos os slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Adiciona a classe 'active' ao slide correto
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Inicia a troca automática
    function startAutoPlay() {
        autoPlay = setInterval(nextSlide, slideInterval);
    }
    
    // Para a troca automática
    function stopAutoPlay() {
        clearInterval(autoPlay);
    }

    // Event Listeners para os botões
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay(); // Opcional: para o automático quando o usuário interage
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay(); // Opcional
    });

    // Inicia o carrossel
    showSlide(currentSlide);
    startAutoPlay();
});

document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA PARA O CARROSSEL PRINCIPAL (HERO) ---
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        let currentSlide = 0;
        const slideInterval = 5000;
        let autoPlay;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        function startAutoPlay() {
            autoPlay = setInterval(nextSlide, slideInterval);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlay);
        }

        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
        });

        showSlide(currentSlide);
        startAutoPlay();
    }


    // --- NOVA LÓGICA PARA O SCROLLER DE LICORES ---
    const scroller = document.getElementById('licores-scroller');
    if (scroller) {
        const scrollLeftBtn = document.getElementById('scroll-left-btn');
        const scrollRightBtn = document.getElementById('scroll-right-btn');
        
        // A quantidade de scroll será a largura de um card + o espaçamento (320px + 32px)
        const scrollAmount = 352;

        scrollRightBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        scrollLeftBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

});

document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA PARA O CARROSSEL PRINCIPAL (HERO) ---
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        let currentSlide = 0;
        const slideInterval = 5000;
        let autoPlay;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        function startAutoPlay() { autoPlay = setInterval(nextSlide, slideInterval); }
        function stopAutoPlay() { clearInterval(autoPlay); }

        nextBtn.addEventListener('click', () => { nextSlide(); stopAutoPlay(); });
        prevBtn.addEventListener('click', () => { prevSlide(); stopAutoPlay(); });

        showSlide(currentSlide);
        startAutoPlay();
    }


    // --- LÓGICA PARA O SCROLLER DE LICORES ---
    const scroller = document.getElementById('licores-scroller');
    if (scroller) {
        const scrollLeftBtn = document.getElementById('scroll-left-btn');
        const scrollRightBtn = document.getElementById('scroll-right-btn');
        const scrollAmount = 352; // Largura do card (320px) + gap (32px)

        scrollRightBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        scrollLeftBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }


    // --- NOVA LÓGICA PARA O SLIDER DE DEPOIMENTOS ---
    const testimonialTrack = document.getElementById('testimonial-track');
    if (testimonialTrack) {
        const testimonials = testimonialTrack.children;
        const dotsContainer = document.getElementById('testimonial-dots');
        let testimonialIndex = 0;
        const testimonialInterval = 6000; // Intervalo de 6 segundos para depoimentos
        let testimonialAutoPlay;

        // Criar os pontos de navegação
        for (let i = 0; i < testimonials.length; i++) {
            const dot = document.createElement('button');
            dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition-colors');
            dot.addEventListener('click', () => {
                goToTestimonial(i);
                stopTestimonialAutoPlay();
            });
            dotsContainer.appendChild(dot);
        }
        const dots = dotsContainer.children;

        function updateDots() {
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.toggle('bg-verde-escuro', i === testimonialIndex);
                dots[i].classList.toggle('bg-gray-300', i !== testimonialIndex);
            }
        }
        
        function goToTestimonial(index) {
            testimonialIndex = index;
            const offset = -index * 100;
            testimonialTrack.style.transform = `translateX(${offset}%)`;
            updateDots();
        }

        function nextTestimonial() {
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            goToTestimonial(testimonialIndex);
        }

        function startTestimonialAutoPlay() {
            testimonialAutoPlay = setInterval(nextTestimonial, testimonialInterval);
        }
        
        function stopTestimonialAutoPlay() {
            clearInterval(testimonialAutoPlay);
        }

        // Iniciar
        goToTestimonial(0);
        startTestimonialAutoPlay();
    }

});

document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA PARA O CARROSSEL PRINCIPAL (HERO) ---
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length > 0) {
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        let currentSlide = 0;
        const slideInterval = 5000;
        let autoPlay;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });
        }
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        function startAutoPlay() { autoPlay = setInterval(nextSlide, slideInterval); }
        function stopAutoPlay() { clearInterval(autoPlay); }
        nextBtn.addEventListener('click', () => { nextSlide(); stopAutoPlay(); });
        prevBtn.addEventListener('click', () => { prevSlide(); stopAutoPlay(); });
        showSlide(currentSlide);
        startAutoPlay();
    }


    // --- LÓGICA PARA O SCROLLER DE LICORES ---
    const scroller = document.getElementById('licores-scroller');
    if (scroller) {
        const scrollLeftBtn = document.getElementById('scroll-left-btn');
        const scrollRightBtn = document.getElementById('scroll-right-btn');
        const scrollAmount = 352;

        scrollRightBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        scrollLeftBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }


    // --- LÓGICA RESPONSIVA PARA O SLIDER DE DEPOIMENTOS ---
    const testimonialContainer = document.getElementById('depoimentos');
    if (testimonialContainer) {
        const track = document.getElementById('testimonial-track');
        const testimonials = Array.from(track.children);
        const dotsContainer = document.getElementById('testimonial-dots');
        const testimonialInterval = 6000;
        let currentPage = 0;
        let slidesPerPage;
        let totalPages;
        let testimonialAutoPlay;

        function setupTestimonialSlider() {
            // Parar autoplay para reconfigurar
            clearInterval(testimonialAutoPlay);

            // Definir quantos slides por página baseado na largura da tela
            if (window.innerWidth < 1024) {
                slidesPerPage = 1;
            } else {
                slidesPerPage = 3;
            }

            // Calcular o número total de páginas
            totalPages = Math.ceil(testimonials.length / slidesPerPage);
            
            // Limpar e criar os pontos de navegação
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('button');
                dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition-colors');
                dot.addEventListener('click', () => {
                    currentPage = i;
                    goToPage(currentPage);
                });
                dotsContainer.appendChild(dot);
            }

            // Ir para a página atual (importante para redimensionamento)
            currentPage = Math.min(currentPage, totalPages - 1);
            goToPage(currentPage);
            
            // Reiniciar autoplay
            testimonialAutoPlay = setInterval(() => {
                currentPage = (currentPage + 1) % totalPages;
                goToPage(currentPage);
            }, testimonialInterval);
        }

        function goToPage(pageIndex) {
            const offset = -pageIndex * 100;
            track.style.transform = `translateX(${offset}%)`;
            updateDots();
        }

        function updateDots() {
            const dots = dotsContainer.children;
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.toggle('bg-verde-escuro', i === currentPage);
                dots[i].classList.toggle('bg-gray-300', i !== currentPage);
            }
        }
        
        // Configuração inicial e ao redimensionar a tela
        setupTestimonialSlider();
        window.addEventListener('resize', setupTestimonialSlider);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA PARA O NOVO HERO SLIDER ANIMADO ---
    const heroSlider = document.getElementById('hero-slider');
    if (heroSlider) {
        const slides = document.querySelectorAll('.hero-slide');
        const prevBtn = document.querySelector('.hero-prev');
        const nextBtn = document.querySelector('.hero-next');
        let currentSlide = 0;
        const slideInterval = 7000; // Aumentar o tempo para dar tempo de ler
        let autoPlay;

        function showSlide(index) {
            // Remove a classe 'is-active' de todos e esconde
            slides.forEach(slide => {
                slide.classList.remove('is-active');
                slide.style.opacity = '0';
                slide.style.zIndex = '1';
            });

            // Ativa o slide correto
            const activeSlide = slides[index];
            activeSlide.style.opacity = '1';
            activeSlide.style.zIndex = '2'; // Coloca o slide ativo na frente
            
            // Adiciona a classe 'is-active' para iniciar as animações de texto
            // Usamos um pequeno timeout para garantir que a transição de opacidade comece primeiro
            setTimeout(() => {
                activeSlide.classList.add('is-active');
            }, 50);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        function startAutoPlay() {
            autoPlay = setInterval(nextSlide, slideInterval);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlay);
        }

        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay(); // Reinicia o timer
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay(); // Reinicia o timer
        });

        // Inicia o slider
        showSlide(currentSlide);
        startAutoPlay();
    }

    // --- (As lógicas para o scroller de licores e depoimentos foram removidas deste exemplo,
    // --- mas podem ser adicionadas de volta aqui se você quiser manter essas seções) ---

});


});

