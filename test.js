function Focused_Element_with_Intermediate_Text() {
    this.code = "no aplica";
    this.threatName = "Focused Element with Intermediate Text";
    this.firstFocusedElement = null;
    this.secondFocusedElement = null;
    this.focusedElement = null;
    this.focusedWithTab = false;

    var focused_Element_with_Intermediate_Text = this; // Referencia a esta instancia

    // Detecta si la tecla Tab fue utilizada
    $(document).on("keydown", function(event) {
        if (event.keyCode === 9) {
            focused_Element_with_Intermediate_Text.focusedWithTab = true;
        }
    });

    // Detecta cuando un elemento recibe el foco
    $("input[type='text'], input[type='email'], textarea, button, input[type='submit'], a").on("focus", function() {
        focused_Element_with_Intermediate_Text.focusedElement = $(this);

        if (!focused_Element_with_Intermediate_Text.firstFocusedElement) {
            focused_Element_with_Intermediate_Text.firstFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
        } else {
            if (!focused_Element_with_Intermediate_Text.secondFocusedElement) {
                focused_Element_with_Intermediate_Text.secondFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
            } else {
                focused_Element_with_Intermediate_Text.firstFocusedElement = focused_Element_with_Intermediate_Text.secondFocusedElement;
                focused_Element_with_Intermediate_Text.secondFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
            }
        }

        // Verifica si ambos elementos enfocados están definidos
        if (focused_Element_with_Intermediate_Text.firstFocusedElement && focused_Element_with_Intermediate_Text.secondFocusedElement) {
            var elementsBetween = $('*').filter(':visible'); // Todos los elementos visibles
            var elementsInBetween = [];
            var foundText = false;

            console.info("Elementos visibles:", elementsBetween);

            elementsBetween.each(function() {
                var currentElement = $(this);
                var firstPosTop = focused_Element_with_Intermediate_Text.firstFocusedElement.offset().top;
                var secondPosTop = focused_Element_with_Intermediate_Text.secondFocusedElement.offset().top;
                var currentPosTop = currentElement.offset().top;

                var firstElementHeight = focused_Element_with_Intermediate_Text.firstFocusedElement.outerHeight();
                var secondElementHeight = focused_Element_with_Intermediate_Text.secondFocusedElement.outerHeight();
                var currentElementHeight = currentElement.outerHeight();

                // Verificar si el elemento está entre los dos enfocados
                if (currentPosTop >= firstPosTop + firstElementHeight && 
                    currentPosTop + currentElementHeight <= secondPosTop) {
                    
                    console.info("Elemento detectado:", currentElement, currentElement[0].nodeName);

                    // Verifica si el elemento es un `div` o contiene texto relevante
                    if (currentElement.is('label, p, div') || currentElement.text().trim() !== "") {
                        elementsInBetween.push(currentElement);
                        foundText = true;

                        // Identificar específicamente un `div`
                        if (currentElement.is('div')) {
                            console.info("Div detectado:", currentElement);
                        }
                    }
                }
            });

            console.info("Elementos enfocados entre ambos:", elementsInBetween);

            if (foundText) {
                console.info("Se encontraron elementos con texto intermedio:", elementsInBetween);
                if (elementsInBetween.every(el => el.is('div, label, p'))) {
                    console.info("Reportar evento: todos los elementos intermedios son texto/div.");
                    /*
                    var xpath_first = this.getElementXPath(focused_Element_with_Intermediate_Text.firstFocusedElement);
                    var xpath_second = this.getElementXPath(focused_Element_with_Intermediate_Text.secondFocusedElement);
                    logger.logEvent(focused_Element_with_Intermediate_Text.threatName, {
                        xpath_first: xpath_first, xpath_second: xpath_second, elementText: elementsInBetween
                    });
                    */
                }
            }  else {
                console.info("Elementos de texto entre ambos:", elementText);
                if (elementText.length==elementsInBetween.length){
                    console.info("Reportar evento")
               /*     var xpath_first = this.getElementXPath(focused_Element_with_Intermediate_Text.firstFocusedElement);
                    var xpath_second = this.getElementXPath(focused_Element_with_Intermediate_Text.secondFocusedElement);
                    focused_Element_with_Intermediate_Text.firstFocusedElement && focused_Element_with_Intermediate_Text.secondFocusedElement
                    logger.logEvent(focused_Element_with_Intermediate_Text.threatName, {
                        xpath_first: xpath_first,xpath_second:xpath_second,elementText:elementText});
                */
                        }
            }
        }
    });
}

// Crear instancia de la función
new Focused_Element_with_Intermediate_Text();
