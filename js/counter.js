// document.addEventListener("DOMContentLoaded", function () {
//     const counters = document.querySelectorAll('.stat-number');
//     const duration = 1500;

//     counters.forEach(counter => {
//         const target = +counter.getAttribute('data-target');
//         const symbol = counter.getAttribute('data-symbol') || '';
//         let start = 0;
//         const increment = target / (duration / 16);

//         function updateCounter() {
//             start += increment;
//             if (start < target) {
//                 counter.textContent = Math.floor(start) + symbol;
//                 requestAnimationFrame(updateCounter);
//             } else {
//                 counter.textContent = target + symbol;
//             }
//         }
//         updateCounter();
//     });
// });




document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.stat-number');
    const duration = 1500;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const symbol = counter.getAttribute('data-symbol') || '';
        let start = 0;
        const increment = target / (duration / 16);

        function updateCounter() {
            start += increment;
            if (start < target) {
                counter.textContent = Math.floor(start) + symbol;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + symbol;
            }
        }
        updateCounter();
    });
});