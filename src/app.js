import User from "./User.js";

const tabUsers = [];

async function getUsers() {
    try {
        const usersQuery = await fetch(`https://randomuser.me/api/?results=20`);
        const usersRes = await usersQuery.json();

        usersRes.results.forEach((result) => {
            tabUsers.push(
                new User(
                    result.name.title,
                    result.name.first,
                    result.name.last,
                    result.location.city,
                    result.location.country,
                    result.dob.age,
                    result.email,
                    result.picture.large
                )
            );
        });

        console.log(tabUsers);

        tabUsers.sort((a, b) => {
            return a.nom.localeCompare(b.nom);
        });

        tabUsers.forEach((user) => {
            user.render();
        });

    } catch (error) {
        console.error(error);
        throw new Error(`Ca ne fonctionne pas...`);
    }
}

getUsers();

///////////////////////////////////////////////////////////////////////


const boutonName = document.querySelector("#sort--name");
const boutonAge = document.querySelector("#sort--age");

boutonName.addEventListener("click", (e) => {
    if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        boutonAge.classList.remove("selected");

        tabUsers.sort((a, b) => {
            return a.prenom.localeCompare(b.prenom);
        });

        tabUsers.forEach((user) => {
            user.render();
        });

    } else {
        console.log("Le bouton est déjà selected");
    }
});

boutonAge.addEventListener("click", (e) => {
    if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        boutonName.classList.remove("selected");

        tabUsers.sort((a, b) => {
            return a.age - b.age;
        });

        tabUsers.forEach((user) => {
            user.render();
        });
    } else {
        console.log("Le bouton est déjà selected");
    }
});

//////////////////////////////////////////////////////////////////////////7