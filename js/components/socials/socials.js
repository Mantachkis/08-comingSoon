function socials(selector, data){
    // validacija

    // logika
    const DOM = document.querySelector(selector);

    let HTML = '';

    
    for(const social of data){
        if(social.active){
        HTML += `<a href="${socials.href}" target="_blank" class="fa fa-${social.icon}"></a>`
        }
    }

    // for(const {href,icon} of data){
    //     HTML += `<a href="${href}" target="_blank" class="fa fa-${icon}"></a>`
    // }

    //result return
    DOM.innerHTML += HTML;

}

export { socials }