document.getElementById("fetchJoke").addEventListener("click", fetchJoke);

function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("joke").textContent = `${data.setup} - ${data.punchline}`;
        })
        .catch((error) => {
            document.getElementById("joke").textContent = "Failed to fetch a joke. Try again later.";
            console.error(error);
        });
}
