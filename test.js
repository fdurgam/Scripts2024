function Focused_Element_with_Intermediate_Text() {
    this.code = "no aplica";
    this.threatName = "FocusedElementWithIntermediateText";
    this.firstFocusedElement = null;
    this.secondFocusedElement = null;
    this.focusedElement = null;
    var focused_Element_with_Intermediate_Text = this; // Para almacenar el primer elemento enfocado

   /* $(document).on("keydown", function(event) {
        // Verifica si la tecla presionada es Tab (código 9)
        if (event.keyCode === 9) {
            focused_Element_with_Intermediate_Text.focusedWithTab = true;
        }
    });
*/
    // Detecta cuando un elemento recibe el foco
    $("input[type='text'], input[type='email'], textarea, button, input[type='submit'], a").on("focus", function() {
        focused_Element_with_Intermediate_Text.focusedElement = $(this); // El elemento que recibe el foco
        if (!focused_Element_with_Intermediate_Text.firstFocusedElement) {
            focused_Element_with_Intermediate_Text.firstFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
        } else {
            if (!focused_Element_with_Intermediate_Text.secondFocusedElement) {
                focused_Element_with_Intermediate_Text.secondFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
            } else {
                console.info("toracion")
                focused_Element_with_Intermediate_Text.firstFocusedElement = focused_Element_with_Intermediate_Text.secondFocusedElement;
                focused_Element_with_Intermediate_Text.secondFocusedElement = focused_Element_with_Intermediate_Text.focusedElement;
            }
        }

        // Verifica si ambos elementos enfocados existen
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
            
                // Verificar si el elemento actual está entre las posiciones `top` y `left` de los dos elementos enfocados
                if (((currentPosTop > firstPosTop && currentPosTop < secondPosTop) || (currentPosTop > secondPosTop && currentPosTop < firstPosTop)) &&
                    ((currentPosLeft > firstPosLeft && currentPosLeft < secondPosLeft) || (currentPosLeft > secondPosLeft && currentPosLeft < firstPosLeft))) {
                    elementsInBetween.push(currentElement); // Agregar el elemento al array
                }
            });

            var elementText = [];
            elementsInBetween.forEach(function(element) {
                if (element.text().trim() !== "" && element.is('label, p, div') && (!element.is('label') || !element.attr('for'))) {
                    elementText.push(element);
                    foundText = true;
                }
            });

            if (!foundText) {
                // Verifica si el foco se recibió con Tab
                if (focused_Element_with_Intermediate_Text.focusedWithTab) {
                    //console.info("El foco fue recibido con la tecla Tab, pero no se encontró texto entre los elementos enfocados.");
                } else {
                    //console.info("El foco NO fue recibido con la tecla Tab y no se encontró texto entre los elementos enfocados.");
                }
            } else {
                console.info("Elementos entre ambos:", elementsInBetween);
                console.info("Texto entre ambos:", elementText);
            }
        }
    });
}