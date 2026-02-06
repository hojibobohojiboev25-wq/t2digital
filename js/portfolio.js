// Portfolio filtering functionality

document.addEventListener('DOMContentLoaded', function() {
    initPortfolioFilter();
});

function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filterValue = this.getAttribute('data-filter');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'block';
                    // Add animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Initialize portfolio items with animation
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, index * 100);
    });
}

// Add CSS for portfolio animations
const portfolioStyle = document.createElement('style');
portfolioStyle.textContent = `
    .portfolio-item {
        transition: all 0.3s ease;
    }

    .portfolio-item.fade-in {
        opacity: 0;
        transform: translateY(30px);
    }

    .portfolio-item.fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .filter-btn {
        background: transparent;
        border: 2px solid var(--border-color);
        color: var(--text-secondary);
        padding: 12px 24px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        transition: all 0.3s ease;
        margin: 0 8px;
    }

    .filter-btn:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    .filter-btn.active {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
    }

    @media (max-width: 768px) {
        .filter-btn {
            padding: 10px 16px;
            font-size: 14px;
            margin: 4px;
        }
    }
`;
document.head.appendChild(portfolioStyle);