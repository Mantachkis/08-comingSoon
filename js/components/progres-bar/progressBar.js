function progressBar(selector, data){
    //validation

    //logic
    const DOM= document.querySelector(selector);
    let HTML= '';
    for( const progress of data){
        HTML += `<div class="progress-bar">
        PROGRESS BAR
    </div>`
    }
    
    
    //result return
    DOM.insertAdjacentHTML('beforeend', HTML);
}

export { progressBar }