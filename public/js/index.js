// Framework Title Animation

    // Selectors
    const react = document.getElementById('react');
    const reactIcon = document.getElementById('react-icon');
    const nodejs = document.getElementById('nodejs');
    const nodeIcon = document.getElementById('node-icon');
    const sass = document.getElementById('sass');
    const sassIcon = document.getElementById('sass-icon');

    // Functions for each title
    document.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight;
        const titleBounds = react.getBoundingClientRect().y;
        if (titleBounds < clientHeight) {
            react.style.animation = 'slideUp 1s forwards cubic-bezier(0.87, 0, 0.13, 1)';
        }
    });

    document.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight;
        const titleBounds = nodejs.getBoundingClientRect().y;
        if (titleBounds < clientHeight) {
            nodejs.style.animation = 'slideUp 1s forwards cubic-bezier(0.87, 0, 0.13, 1)';
        }
    });

    document.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight;
        const titleBounds = sass.getBoundingClientRect().y;
        if (titleBounds < clientHeight) {
            sass.style.animation = 'slideUp 1s forwards cubic-bezier(0.87, 0, 0.13, 1)';
        }
    });

    // Functions for each icon
    document.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight;
        const iconBounds = reactIcon.getBoundingClientRect().y;
        if (iconBounds < clientHeight) {
            reactIcon.style.transition = 'color 1s ease-in-out';
            reactIcon.style.color = '#5DCEEE';
        }
    });
    
    document.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight;
        const iconBounds = nodeIcon.getBoundingClientRect().y;
        if (iconBounds < clientHeight) {
            nodeIcon.style.transition = 'color 1s ease-in-out';
            nodeIcon.style.color = '#4E9641';
        }
    });

    document.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight;
        const iconBounds = sassIcon.getBoundingClientRect().y;
        if (iconBounds < clientHeight) {
            sassIcon.style.transition = 'color 1s ease-in-out';
            sassIcon.style.color = '#C26090';
        }
    });