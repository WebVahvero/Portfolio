const boxes = document.querySelectorAll('.slideAnim');
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.style.animation = `slideDown 1.5s ${entry.target.dataset.delay} forwards ease-out`;
            } else {
                entry.target.style.animation = 'none';
            }
        })
    })

boxes.forEach(box => {
    observer.observe(box);
})