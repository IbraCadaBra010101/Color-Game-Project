let lis = document.querySelectorAll("li");

for (let el of lis) {
    el.addEventListener("mouseover", function () {
        this.classList.add("selected");
    });
    el.addEventListener("mouseout", function () {
        this.classList.remove("selected");
    });
    el.addEventListener("click", function () {
        this.classList.toggle("done");
    });
}

