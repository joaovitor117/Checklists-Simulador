
            const links = document.querySelectorAll('.pdf-link');
            const viewer = document.getElementById('pdf-viewer');

            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const pdfUrl = this.getAttribute('href');
                    viewer.src = pdfUrl;
                });
            });
            let isExpanded = true;

            const sidebar = document.querySelector('.side-bar');
            const toggleButton = document.getElementById('toggleSidebar');
            const title = document.querySelector('h2');
            const menu = document.querySelector('.menu');

            toggleButton.addEventListener('click', () => {
                isExpanded = !isExpanded;

                sidebar.className = isExpanded
                ? "w-64 bg-gray-800 text-white p-4 transition-all duration-1000"
                : "w-16 bg-gray-800 text-white p-4 transition-all duration-1000";
                
                title.classList.toggle('hidden', !isExpanded);
                menu.classList.toggle('hidden', !isExpanded);
    });
                document.addEventListener('keydown', function(event) {
                    event.key === 'Escape' && (
                        isExpanded = true,
                        sidebar.className = "w-64 bg-gray-800 text-white p-4 transition-all duration-1000",
                        title.classList.remove('hidden'),
                        menu.classList.remove('hidden'),
                        viewer.src = "")
                    });
