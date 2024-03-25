/* Vytvořte si novou složku a vytvořte v ní soubory - index.html, style.css a script.js. Soubory propojte.

Vložte do ní formulář s textovým políčkem a tlačítkem pro přihlášení k odběru.

Vytvořte posluchač pro událost submit. Jakmile uživatel zadá svůj e-mail a potvrdí přihlášení, 
zobrazte na stránce místo formuláře zprávu o úspěšném přihlášení k odběru.

Texty můžete vymyslet vlastní nebo využít následující:

Jednou za týden posíláme newsletter ze světa frontendu a UX.
Zadejte svůj e-mail a zůstaňte v obraze.
Odebírat
Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese adresa@domena.cz.
Pokud máte čas a chuť, nastylujte stránku dle svého citu. Obrázek výše může posloužit jako inspirace.
*/

const formular = document.querySelector("#newsletter") // odkaz na element s třídou newsletter v HTML. Tento element je přiřazen do proměnné formular

formular.addEventListener("submit", (event) => { // posluchač události submit, když uživatel odešle formulář = klikne na tlačítko Odeslat
    event.preventDefault()                         // zabraňuje výchozímu chování události = zabrání odeslání formuláře a načtení nové stránky
    const email = e.target.querySelector("input").value   //získává hodnotu, která byla zadána do prvního nalezeného pole typu input v rámci formuláře, a tuto hodnotu uloží do proměnné email
    formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}` //formular = nastavuje obsah elementu = vkládám textový řetězec a získanou emailovou adresu
})

const emailInput = document.querySelector("#mail"); // Odkaz na pole pro email

formular.addEventListener("input", () => {
    if (emailInput.value.trim() === "" || emailInput.value.indexOf('@') === -1) {
        emailInput.classList.add("input"); // Přidá CSS třídu "input" k poli pro email
    } else {
        emailInput.classList.remove("input"); // Odebere CSS třídu "input" z pole pro email
    }
});