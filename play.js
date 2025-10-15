function player() {
    const div = document.querySelector(".player");
    div.style.display = "block";

    // Start the slide-in animation
    setTimeout(() => {
        div.style.transform = "translateY(0%)";

        // --- create iframe but don't insert yet ---
        const iframeHTML = `<iframe width="853" height="480" src="https://www.youtube.com/embed/qpoBjOg5RHU" title="The Fantastic Four: First Steps | Official Trailer | Only in Theatres July 25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

        // Create a temporary element to hold the iframe
        const temp = document.createElement("div");
        temp.innerHTML = iframeHTML;

        // Get the iframe node
        const iframe = temp.querySelector("iframe");

        // Wait for the iframe to fully load before appending via innerHTML
        iframe.addEventListener("load", () => {
            div.innerHTML = iframeHTML; // ✅ only append when ready
        });

        // Trigger the iframe load by adding it to a hidden element
        document.body.appendChild(temp);
        temp.style.display = "none";

    }, 100);
}
const viewportWidth = window.innerWidth;
console.log("Viewport Width:", viewportWidth, "pixels");
