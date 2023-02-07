const postEl = document.getElementById("posts")

const post = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    return data.filter((el) => el.userId === 1);

}
post().then((el) => {
    const render = el.map(({userId, id, title, body}) =>`
    <div class="post">
    <p> ${"User id: "}${userId}</p>
    <p> ${"Id: "}${id}</p>
    <p>${title}<br>${body}</p>
    </div>`)

    postEl.innerHTML=render.join("");
})