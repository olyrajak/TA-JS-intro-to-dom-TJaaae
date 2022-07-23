let rootElement = document.querySelector("ul");

let ul = document.createElement("ul");
got.houses.forEach((home) => {
    home.people.forEach((person) => {
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = person.image;
        let h2 = document.createElement("h2");
        h2.innerText = person.name;
        let p = document.createElement("p");
        p.innerText = person.description;
        let a = document.createElement("a");
        a.href = person.wikiLink;
        let button = document.createElement("button");
        button.innerText = "Learn More";
        a.append(button);
        div.append(img, h2);
        div.classList.add("flex");
        li.append(div, p, a);
        li.classList.add("flex-30", "people");
        ul.append(li);
        rootElement.append(li);
    });
});