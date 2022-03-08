const imla_kurallari = [
    {"title": "Alıntı Kelimelerin Yazılışı", "content": "1.Çift ünsüz harfle başlayan Batı kökenli alıntılar, ünsüzler arasına ünlü konulmadan yazılır: francala, gram, gramer, gramofon, grup, Hristiyan, kral, kredi, kritik, plan, pratik, problem, profesör, program, proje, propaganda, pro­tein, prova, psikoloji, slogan, snop, spiker, spor, staj, stil, stüdyo, trafik, tren, triptik vb.Bu tür birkaç alıntıda, söz başında veya iki ünsüz arasında bir ünlü türemiştir. Bu ünlü söylenişte de yazılışta da gösterilir: iskar­pin, iskele, iskelet, istasyon, istatistik, kulüp vb.\n\n2. İçinde yan yana iki veya daha fazla ünsüz bulunan Batı kökenli alıntılar, ünsüzler arasına ünlü konmadan yazılır: alafranga, apartman, biyografi, elektrik, gangster, kilogram, orkestra, paragraf, tel­graf vb.\n\n3. İki ünsüzle biten Batı kökenli alıntılar, ünsüzler arasına ünlü konmadan yazılır: film, form, lüks, modern, natürmort, psikiyatr, seks, slayt, teyp vb.\n\n4. Batı kökenli alıntıların içindeki ve sonundaki g ünsüzleri olduğu gibi korunur: biyografi, diyagram, dogma, magma, monografi, paragraf, program; arkeolog, demagog, diyalog, filolog, jeolog, katalog, monolog, psikolog, ürolog vb.\n\nAncak fotoğraf ve topoğraf kelimelerinde g’ler, ğ’ye döner.\n\n* * *\n\nAşağıdaki durumlarda Batı kökenli kelimeler özgün biçimleri ile ya­zılırlar:\n\n1. Bilim, sanat ve uzmanlık dallarında kullanılan bazı terimler: andante (müzik), cuprum (kimya), deseptyl (eczacılık), quercus, terminus technicus (teknik terim) vb.\n\n2. Latin yazı sistemini kullanan dillerden alınma deyim ve sözler: Veni, vidi, vici (Geldim, gördüm, yendim.); conditio sine qua non (Olmazsa olmaz.); eppur si muove (Dünya her şeye rağmen dönüyor.); to be or not to be (olmak veya olmamak); l’art pour l’art (Sanat sanat içindir.); l’Etat c’est moi (Devlet benim.); traduttore traditore (Çevirmen haindir.); persona non grata (istenmeyen kişi) vb.\n\nMesele falan değildi öyle,\n\nTo be or not to be kendisi için;\n\nBir akşam uyudu;\n\nUyanmayıverdi. (Orhan Veli Kanık)"}
]

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
    p = document.createElement("pre")
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
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, imla_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    generate_card(imla_kurallari, noktalama_wrp)
    
}

main()