const imla_kurallari = [{"title": "Bağlaç Olan da / de’nin Yazılışı", "content": "Bağlaç olan da / de ayrı yazılır ve kendisinden önceki kelimenin son ünlüsüne bağlı olarak büyük ünlü uyumuna uyar: Kızı da geldi gelini de. Durumu oğluna da bildirdi. Sen de mi kardeşim? Güç de olsa. Konuşur da konuşur.\n\nUYARI: Ayrı yazılan da / de hiçbir zaman ta / te biçiminde yazılmaz: Gidip de gelmemek var, gelip de görmemek var (Gidip te gelmemek var, gelip te görmemek var değil)\n\nUYARI: Ya sözüyle birlikte kullanılan da ayrı yazılır: ya da\n\nUYARI: Da / de bağlacını kendisinden önceki kelimeden kesme ile ayırmak yanlıştır: Ayşe de geldi (Ayşe’de geldi değil). Kitabın kapağına da dikkat et (Kitabın kapağına’da dikkat et değil)."}, {"title": "Bulunma Durumu Eki -da / -de / -ta / -te’nin Yazılışı", "content": "Bulunma durumu eki getirildiği kelimeye bitişik yazılır: devede (deve-de) kulak, yolda (yol-da) kalmak, ayakta (ayak-ta) durmak, işte (iş-te) çalışmak vb.\n\nYurtta sulh, cihanda sulh. (Atatürk)"}]

const imla_wrp = document.getElementById("imla-wrp");

const noktalama_wrp = document.getElementById("noktalama-wrp");

function generate_card(card_list, card_wrapper) {
    for (let index = 0; index < card_list.length; index++) {
        create_card(card_wrapper, card_list[index]["title"], card_list[index]["content"])
    }    
}

function create_card(card_wrapper, title="Hello World!", content="Hello World!") {
    let card, card_header, card_body, card_footer, p, h2, i
    card = document.createElement("div")
    card.className = "card"

    card_header = document.createElement("div")
    card_header.className = "card-header"
    h2 = document.createElement("h2")
    h2.className = "card-title"
    h2.textContent = title
    card_header.append(h2)

    card_body = document.createElement("div")
    card_body.className = "card-body"
    p = document.createElement("p")
    p.className = "card-content"
    p.textContent = content
    card_body.append(p)

    if (content.length > 400) {
        
        card_footer = document.createElement("div")
        card_footer.className = "card-footer"
        i = document.createElement("i")
        i.className = "bi bi-arrow-down"
        card_footer.textContent = "Daha Fazla Oku"
        card_footer.append(i)
        card_footer.addEventListener("click", e => {
            function see_all(card_element, footer_element) {
                let i_arrow
                card_element.className = "card card-see-all"
                footer_element.className = "card-footer card-footer-see-all"
                i_arrow = footer_element.childNodes[1]
                i_arrow.className = "bi bi-arrow-up"
                footer_element.textContent = "Daha Az Oku"
                footer_element.append(i_arrow)
            }
            function see_less(card_element, footer_element) {
                let i_arrow
                card_element.className = "card"
                footer_element.className = "card-footer"
                i_arrow = footer_element.childNodes[1]
                i_arrow.className = "bi bi-arrow-down"
                footer_element.textContent = "Daha Fazla Oku"
                footer_element.append(i_arrow)
            }
            if (e.target.parentElement.className == "card-footer") {
                see_all(e.target.parentElement.parentElement, e.target.parentElement)
            }
            else if (e.target.parentElement.className == "card-footer card-footer-see-all") {
                see_less(e.target.parentElement.parentElement, e.target.parentElement)
            }
            else if (e.target.className == "card-footer card-footer-see-all") {
                see_less(e.target.parentElement, e.target)
            }
            else {
            see_all(e.target.parentElement, e.target)
            }
            
        })
    }

    card.append(card_header)
    card.append(card_body)
    if (!(card_footer == undefined)) {
        card.append(card_footer)
    }
    card_wrapper.append(card)
}

function main() {
    generate_card(imla_kurallari, imla_wrp)
    
}

main()