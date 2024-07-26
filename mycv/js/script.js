// file: script.js

document.addEventListener("DOMContentLoaded", function() {
    // Thêm sự kiện cuộn mượt cho các liên kết điều hướng
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            // Cuộn mượt đến phần tử mục tiêu
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
