function Focused_Element_with_Intermediate_Text() {
    this.code = "no aplica";
    this.threatName = "FocusedElementWithIntermediateText";
    this.firstFocusedElement = null;
    this.secondFocusedElement = null;
    this.focusedElement = null;
    var focused_Element_with_Intermediate_Text = this; // Referencia a esta instancia

    $(document).on("keydown", function(event) {
        // Verifica si la tecla presionada es Tab (código 9)
        if (event.keyCode === 9) {
            focused_Element_with_Intermediate_Text.focusedWithTab = true;
        }
    });

    // Detecta cuando un elemento recibe el foco
    $("input[type='text'], input[type='email'], textarea, button, input[type='submit'], a").on("focus", function() {
        focused_Element_with_Intermediate_Text.focusedElement = $(this); // El elemento que recibe el foco actual

        if (!focused_Element_with_Intermediate_Text.firstFocusedElement) {
            focused_Element_with_Intermediate_Text.firstFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
        } else {
            if (!focused_Element_with_Intermediate_Text.secondFocusedElement) {
                focused_Element_with_Intermediate_Text.secondFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
            } else {
                // Se establece el segundo como primero y el nuevo enfoque como segundo
                focused_Element_with_Intermediate_Text.firstFocusedElement = focused_Element_with_Intermediate_Text.secondFocusedElement;
                focused_Element_with_Intermediate_Text.secondFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
            }
        }

        console.info("Primer:", focused_Element_with_Intermediate_Text.firstFocusedElement);
        console.info("Segundo:", focused_Element_with_Intermediate_Text.secondFocusedElement);
        console.info("enfocado:", focused_Element_with_Intermediate_Text.focusedElement);

        // Verifica si ambos elementos enfocados están definidos
        if (focused_Element_with_Intermediate_Text.firstFocusedElement && focused_Element_with_Intermediate_Text.secondFocusedElement) {
            var elementsBetween = $('*').filter(':visible'); // Todos los elementos visibles
            var foundText = false;
            var elementsInBetween = [];

            elementsBetween.each(function() {
                var currentElement = $(this);
                var firstPosTop = focused_Element_with_Intermediate_Text.firstFocusedElement.offset().top;
                var secondPosTop = focused_Element_with_Intermediate_Text.secondFocusedElement.offset().top;
                var firstPosLeft = focused_Element_with_Intermediate_Text.firstFocusedElement.offset().left;
                var secondPosLeft = focused_Element_with_Intermediate_Text.secondFocusedElement.offset().left;

                var currentPosTop = currentElement.offset().top;
                var currentPosLeft = currentElement.offset().left;
                console.info("Primer:", focused_Element_with_Intermediate_Text.firstFocusedElement,firstPosTop,firstPosLeft);
                console.info("Segundo:", focused_Element_with_Intermediate_Text.secondFocusedElement,secondPosTop,secondPosLeft);
                console.info("enfocado:", focused_Element_with_Intermediate_Text.focusedElement);
                console.info("Comparando:", currentElement, "Con posiciones:",currentPosTop,currentPosLeft );
                console.info("alto primoer",firstElementHeight);
                console.info("alto segundo",secondElementHeight);
                
                console.info(currentPosTop,currentPosLeft)
                var firstElementHeight = focused_Element_with_Intermediate_Text.firstFocusedElement.outerHeight(); // Altura del primer elemento
                var secondElementHeight = focused_Element_with_Intermediate_Text.secondFocusedElement.outerHeight(); // Altura del segundo elemento
                var currentElementHeight=currentElement.outerHeight();
                // Verifica si el elemento está entre los dos enfocados
                if (currentPosTop > firstPosTop + firstElementHeight && 
                    currentPosTop +currentElementHeight<secondPosTop){

                    // Verifica si el elemento es enfocable (botones, campos de texto, etc.)
                    if (currentElement.is('input, button, a, select, textarea, label, [tabindex], [contenteditable]')) {
                        console.info("Elemento interactivo detectado:", currentElement);
                        elementsInBetween.push(currentElement); // Agregar el elemento al array
                    }


                       // console.info("Elemento enfocable intermedio detectado:", currentElement);
                        //elementsInBetween.push(currentElement); // Agregar el elemento al array
                   
                }
            });
            
            
            console.info("Elementos enfocados entre ambos:", elementsInBetween);

            var elementText = [];
            elementsInBetween.forEach(function(element) {
                if (element.text().trim() !== "" && element.is('label, p, div') && (!element.is('label') || !element.attr('for'))) {
                    elementText.push(element);
                    foundText = true;
                }
            });

            if (!foundText) {
                if (focused_Element_with_Intermediate_Text.focusedWithTab) {
                    // console.info("El foco fue recibido con la tecla Tab, pero no se encontró texto entre los elementos enfocados.");
                } else {
                    // console.info("El foco NO fue recibido con la tecla Tab y no se encontró texto entre los elementos enfocados.");
                }
            } else {
                console.info("Elementos de texto entre ambos:", elementText);
                if (elementText.length==elementsInBetween.length){
                    console.info("Reportar evento")
                }
            }
        }
    });
}

// Instancia de la función
var x = new Focused_Element_with_Intermediate_Text();
