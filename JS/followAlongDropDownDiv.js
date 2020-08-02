const floatingDiv = document.querySelector('.floatingDiv')
const lists = document.querySelectorAll('.header > ul li');

lists.forEach(list => {
    list.addEventListener('mouseenter',handleEnter);
})
lists.forEach(list => {
    list.addEventListener('mouseleave',handleLeave);
})

function handleEnter(e){    
    this.classList.add('showTheDropDown');
    floatingDiv.classList.add('open');
    const CorrespondingDropdown = this.querySelector('.dropdown');
    const dropdownCoordinates = {
        ddX : CorrespondingDropdown.getBoundingClientRect().left,
        ddY : CorrespondingDropdown.getBoundingClientRect().top,
        ddheight : CorrespondingDropdown.getBoundingClientRect().height,
        ddwidth : CorrespondingDropdown.getBoundingClientRect().width,
    }
    floatingDiv.style.height = `${dropdownCoordinates.ddheight}px`;
    floatingDiv.style.width = `${dropdownCoordinates.ddwidth}px`;
    floatingDiv.style.transform = `translate(${dropdownCoordinates.ddX}px,${dropdownCoordinates.ddY+scrollY}px)`;
}

function handleLeave(e){    
    this.classList.remove('showTheDropDown');
    floatingDiv.classList.remove('open');
}