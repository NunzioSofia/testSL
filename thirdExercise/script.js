function myFunction() {
    const container = document.getElementsByClassName('specialDiv');
    for (let i = 0; i < container.length; i++) {
        const element = container[i];
        const elemento = element.getElementsByClassName('specialChildren');
        for (let i = 0; i < elemento.length; i++) {
            const elementi = elemento[i];
            if (elementi.hasAttribute('specialValue')) {
                const printedElement = elementi.getAttribute('specialValue')
                console.log(printedElement);

                break;
            }
        }
    }
}

function init() {
}

$(init);