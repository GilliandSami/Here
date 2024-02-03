class User {
    static cmptUser = 0;

    constructor(titre, prenom, nom, ville, pays, age, email, photo) {
        this.titre = titre;
        this.prenom = prenom;
        this.nom = nom;
        this.ville = ville;
        this.pays = pays;
        this.age = age;
        this.email = email;
        this.photo = photo;
        this.present = false;
        this.element = this.generateElement();

        this.element.addEventListener("click", () => {
            this.togglePresence(this.element);
        });
    }

    generateElement() {
        const divUser = document.createElement("div");
        divUser.classList.add("user");
        divUser.dataset.present = this.present;

        const html = `
            <img src="${this.photo}">
            <div class="user--info">
                <h1>${this.titre} ${this.prenom} ${this.nom}</h1>
                <p>${this.age} years old</p>
                <p>${this.ville}, ${this.pays}</p>
            </div>

            <a href="mailto:${this.email}">
                <span class="mail">✉️</span>
            </a>
        `;

        divUser.insertAdjacentHTML("afterbegin", html);

        return divUser;
    }

    render() {
        const main = document.querySelector("main");
        main.append(this.element);
    }

    togglePresence(element) {
        if (this.present) {
            element.dataset.present = false;
            this.present = false;
            User.cmptUser--;
        } else {
            element.dataset.present = true;
            this.present = true;
            User.cmptUser++;
        }

        const msgCmpt = document.querySelector('.counter');
        msgCmpt.textContent = `${User.cmptUser}/20 people are here`;
    }

}

export default User;