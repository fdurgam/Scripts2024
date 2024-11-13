function verifyScriptLoaded() {
    try {
        // Verifica si una variable específica existe o si una función específica está disponible
        if (typeof someVariable !== 'undefined' && someVariable === 'expectedValue') {
            console.info("El script se cargó y ejecutó correctamente.");
        } else {
            console.warn("El script no se cargó o no se ejecutó como se esperaba.");
        }
    } catch (e) {
        console.error("Error durante la verificación del script: ", e);
    }
}

/************************************************************************************************************
	Extiende los Parametros para Accesibilidad
************************************************************************************************************/
function Estimaciones(){
this.valores=new Array();
var text=new Array();
    text["MinimumWaitingTime"]=4179;
    text["MaximumWaitingTime"]=7813;
var radio=new Array();
    radio["MinimumWaitingTime"]=5097;
    radio["MaximumWaitingTime"]=8351;
var checkbox=new Array();
    checkbox["MinimumWaitingTime"]=3948;
    checkbox["MaximumWaitingTime"]=6360;
var A=new Array();
    A["MinimumWaitingTime"]=3957;
    A["MaximumWaitingTime"]=6351;
var submit=new Array();
    submit["MinimumWaitingTime"]=1940;
    submit["MaximumWaitingTime"]=3710;
var button=new Array();
    button["MinimumWaitingTime"]=3177;
    button["MaximumWaitingTime"]=5635;
var WaitingTime=new Array();
    WaitingTime["checkbox"]=checkbox;
    WaitingTime["radio"]=radio;
    WaitingTime["text"]=text;
    WaitingTime["A"]=A;
    WaitingTime["submit"]=submit;
    WaitingTime["button"]=button;
this.valores["Unhelpful_label"]=WaitingTime;      
this.valores["Missing_SR_text"] =WaitingTime; 
this.valores["ConfusedSpeechSynthesis"]=WaitingTime;
this.valores["Unhelpful_label_for_radio_button"]=WaitingTime;
var HighFrequencyTab=new Array();   
    HighFrequencyTab["MinimumSteps"]=4;
    HighFrequencyTab["MaximumScrollingTime"]=22580;
    HighFrequencyTab["DwellingTime"]=4830;
this.valores["Frequent_tab"]=HighFrequencyTab;
var NavigationPath = new Array()
    NavigationPath["minimumNavigations"]=3;
    NavigationPath["maximumTime"]=80640;
this.valores["NavigationPathVersionAccessibility"]=NavigationPath;    
var FastScrollingWithKeyboard=new Array();
    FastScrollingWithKeyboard["minimumSteps"]=2;
    FastScrollingWithKeyboard["maximumScrollingTime"]=4650;
    FastScrollingWithKeyboard["dwellingTime"]=2139;
this.valores["FastScrollingWithKeyboard"]=FastScrollingWithKeyboard;
var FlashScrollinginNVDA= new Array()
    FlashScrollinginNVDA["MinimumSteps"]=2;
    FlashScrollinginNVDA["MaximumScrollingTime"]=16990;
    FlashScrollinginNVDA["DwellingTime"]=5330;
this.valores["Flash Scrolling in Accesibilidad with NVDA add-o"]=FlashScrollinginNVDA;    
var NavigationListsLinks= new Array()
    NavigationListsLinks["MinimunChildren"]=1;
    NavigationListsLinks["MinimumSteps"]=2;
    NavigationListsLinks["MaximumScrollingTime"]=2454;
    NavigationListsLinks["DwellingTime"]=5960;         
this.valores["Navigation Between Lists of Links for the NVDA add-on"]=NavigationListsLinks;
return valores;
}

/************************************************************************************************************
    Configura los eventos acorde a los Parametros para Accesibilidad
************************************************************************************************************/

function Parametros(event){  
    this.estimacion=Estimaciones();
    var parametros=this.estimacion[event.threatName];
    if ((typeof parametros == "undefined")){
        return event;
    }
    for (var k in parametros){
        if (parametros.hasOwnProperty(k)) {
            event[k]=parametros[k];
        } 
    }
    return event;
}

   
/************************************************************************************************************
	Extiende la Funcion Create para los navegadores que no la soportan
************************************************************************************************************/
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

/************************************************************************************************************
    Funcion para incluir archivos javaScripT dentro de otra archivo JavaScript
************************************************************************************************************/
function include(archivo)
{
    if (jQuery.browser.msie) {//Si el navegador es IE
        document.write('<script charset="utf-8" type="text/javascript" src="'+archivo+'"></script>');
    } else {//Para el resto
        var oHead = document.getElementsByTagName('head')[0];
        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.charset = 'utf-8';
        oScript.src = archivo;
        oHead.appendChild(oScript);        
    }
};


/************************************************************************************************************
	embeds reference url page to parcer
************************************************************************************************************/
function embUrlPageParcer(hidden){
    var txt = document.createElement("span");//Create span element
    token=$('meta[name="SelfRefactoringToken"]').attr('content');//Get token page
    txt.innerHTML = location.href;// get url page
    txt.id=token// add id =token page
    if ((typeof hidden == 'undefined')||(hidden==true)){ txt.style="display:none"}// hidden span element
    $("body").append(txt);    
}

/************************************************************************************************************
	Deficion de la Clase LoogerAccesibility prototipado por Logger
************************************************************************************************************/
var urlServer
LoggerAccesibility.prototype= new Logger();
//delete LoggerAccesibility.prototype.loadUsabilityEventsLoggers;
function LoggerAccesibility(serverHost, verbose) {
    urlServer = new URL(serverHost);   
    Logger.call(this, serverHost,verbose );
    
    this.loadAccesibilityEventsLoggers=function(){ 
        if (logger.verbose) console.info("Loading Accessibility Events: Processing");
            this.deleted_input_content=Parametros(new Deleted_input_content());
            this.unhelpful_label=Parametros(new Unhelpful_label());
            this.missing_SR_text=Parametros(new Missing_SR_text());     
            this.frequent_tab= Parametros(new Frequent_tab());
            this.navigationPath=Parametros(new NavigationPathAccessibility());  
            this.bulkAction=new BulkAction();
            this.formTimer=new FormTimer();//Funcion auxiliar
           
            this.unfilledFormAccessibility=Parametros(new UnfilledFormAccessibility());     
            this.searchResultWithoutElectronicText=Parametros(new SearchResultWithoutElectronicText());
            this.confusedSpeechSynthesis=Parametros(new ConfusedSpeechSynthesis()); 
            this.winding_tab_sequenceeForm= Parametros(new Winding_tab_sequence("form"));
            this.winding_tab_sequenceTable= Parametros(new Winding_tab_sequence("form"));
            this.fastScrollingWithKeyboard=Parametros(new FastScrollingWithKeyboard());
            //this.unfilledForm2=new UnfilledForm();
            this.contentRemovedWithoutNotice=new ContentRemovedWithoutNotice();
            this.formSubmissionAccessibility=new FormSubmissionAccessibility();
            this.marca=new Marcar();
            //this.skipped_Focus_Element=new Skipped_Focus_Element()
            this.skippedFocusElement=new SkippedFocusElement();
            if (logger.verbose) console.info("Loading Accessibility Events: Done");
            console.info(this.unfilledForm)
            
           //2024
            this.modal_Window_Display=new Modal_Window_Display();
            this.re_enter_focus_form= new Re_enter_focus_form();
            this.re_enter_focus_page= new Re_enter_focus_page();

            console.info(this.modal_Window_Display)
    };

    this.loadAccesibilityRefactorings=function(){
        setTimeout(this.loadRefactorings(), 12000); 
        ;
    };
}

/*******************************************************
 Form Reentry
 ******************************************************/


/************************************************************************************************************
	UnannouncedDynamicUpdates();
************************************************************************************************************/
function ContentRemovedWithoutNotice() {
    this.code = "E2024-02";
    this.threatName = "ContentRemovedWithoutNotice";
    this.detect=false
    var contentRemovedWithoutNotice=this
    
    if (logger.verbose) 
        console.info(">>Cargando El Evento " + this.threatName + ", Codigo: " + this.code);
        
       
        document.addEventListener('keydown', function(event) {
           // console.log('Tecla presionada: ' + event.key);
           contentRemovedWithoutNotice.detect=false;
        });
        $("*").on('focus', function(e){ 
            //unannouncedDynamicUpdates.inputFocus=e.timeStamp;
            contentRemovedWithoutNotice.detect=true;
            //console.info("foco en:",e.currentTarget, unannouncedDynamicUpdates.detect)
            
        });
        $("*").on('blur', function(e){ 
            //unannouncedDynamicUpdates.inputFocus=e.timeStamp;
            //debugger;
            if (contentRemovedWithoutNotice.detect) {
                console.info("***************************Se detecta evento en:",e.currentTarget, contentRemovedWithoutNotice.detect)
                if (logger.verbose) console.log(contentRemovedWithoutNotice.threatName);
                var url=document.URL;
                var key = xpathInstance.getElementXPath(e.currentTarget);
                var html = e.currentTarget.outerHTML;
				logger.logEvent(contentRemovedWithoutNotice.threatName, {url:url, xpath:key,html:html}, false);
				
                contentRemovedWithoutNotice.detect=false

            }
            //console.info("Sale foco de:",e.currentTarget, unannouncedDynamicUpdates.detect)
        });
   
}
/************************************************************************************************************
	Ineffective_Combo_Box
************************************************************************************************************/


function Ineffective_Combo_Box(){
    this.code = "E2024-03";
    this.threatName = "Ineffective_Combo_Box";
  
    var ineffective_Combo_Box=this;
    

    console.info(">>Cargando El Evento " + this.threatName + ", Codigo: " + this.code);
    $("select").on('focus', function(e) {
        var optionsCount = $(this).find('option').length;

        // Verificar si la cantidad de opciones es menor a 2
        if (optionsCount < 2) {
            console.log("El combo box " + $(this).attr("id") + " tiene menos de 2 opciones.");
            var xpath = xpathInstance.getElementXPath(this);
            logger.logEvent(ineffective_Combo_Box.threatName, {xpath:xpath,optionsCount:optionsCount});
        } else {
            console.log("El combo box " + $(this).attr("id") + " tiene " + optionsCount + " opciones.");
        }
    });

}
/************************************************************************************************************
	Dropdown selector with limited interaction.
************************************************************************************************************/

function Dropdown_selector_with_limited_interaction() {
    this.code = "E2024-06";
    this.threatName = "Dropdown selector with limited interaction";
    this.editado = false;
    this.text="";
    this.elementos=[];
    dropdown_selector=this;
    
    console.info(">>Cargando El Evento " + this.threatName + ", Codigo: " + this.code);

    const dropdown = $('ul.dropdown-content.select-dropdown')[0];
    if (!dropdown) {
        console.warn("El dropdown no existe. No se ejecutará el evento.");
        return; // Salir de la función si no existe el dropdown
    }
    // Crear un MutationObserver para observar cambios en el dropdown
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // Si se ha ocultado o mostrado el dropdown
            if (mutation.target.style.display) {
                const displayState = mutation.target.style.display;
                if (displayState === 'block') {
                    console.info("El dropdown se ha mostrado.");
                } else if (displayState === 'none') {
                    console.info("El dropdown se ha ocultado.");
                }
            }

            // Verificar cambios en las clases
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const selectedLi = $(dropdown).find('li.selected');
                const activeLi = $(dropdown).find('li.active');

                if (selectedLi.length > 0) {
                    console.info(`Se agregó 'selected': ${selectedLi.text().trim()}`);
                    if (dropdown_selector.text==""){
                        dropdown_selector.text=selectedLi.text().trim();
                    }
                    console.info(dropdown_selector.text);

                }
                
                if (activeLi.length > 0) {
                    console.info(`Se agregó 'active': ${activeLi.text().trim()}`);
                }
                console.info("selected:"+ selectedLi.text().trim());
                console.info("active:"+activeLi.text().trim());
                console.info(activeLi.length > 0);
                console.info(selectedLi.length > 0)
                console.info(selectedLi.text().trim()!==activeLi.text().trim())
                var xpath = xpathInstance.getElementXPath(mutation.target)
                if (!dropdown_selector.elementos.includes(this)){
                    
                    if  (activeLi.length > 0 &&  selectedLi.length > 0 && selectedLi.text().trim()!==activeLi.text().trim()){
                        console.info("reporta evento " + JSON.stringify({'active': activeLi.text(), 'selected': selectedLi.text(), 'inicial': dropdown_selector.text}));
                        logger.logEvent(dropdown_selector.threatName, {xpath:xpath,'active': activeLi.text(), 'selected': selectedLi.text(), 'inicial': dropdown_selector.text});
                        dropdown_selector.elementos.push(this)
                    }
                    console.info(!activeLi.length &&  selectedLi.length > 0 && selectedLi.text().trim()!==dropdown_selector.text.trim());
                    
                    if  (!activeLi.length &&  selectedLi.length > 0 && selectedLi.text().trim()!==dropdown_selector.text.trim()){
                        console.info("reporta evento " + JSON.stringify({'active': activeLi.text(), 'selected': selectedLi.text(), 'inicial': dropdown_selector.text}));
                        logger.logEvent(dropdown_selector.threatName, {xpath:xpath,'active': activeLi.text(), 'selected': selectedLi.text(), 'inicial': dropdown_selector.text});
                        dropdown_selector.elementos.push(this)
                    }
                }

            }
        });
    });

    // Configurar el observer para observar cambios en las clases y en el estilo
    observer.observe(dropdown, { attributes: true, childList: true, subtree: true });

    // Evento para cuando el dropdown pierde el foco
  
 

    
}


//var x = new Dropdown_selector_with_limited_interaction();

/************************************************************************************************************
	Modal_Window_Display();
************************************************************************************************************/
function Modal_Window_Display() {
    this.code = "E2024-01";
    this.threatName = "Modal_Window_Display";
    this.mutaciones=[]
    var modal_Window_Display=this;
    
    if (logger.verbose) 
        console.info(">>Cargando El Evento " + this.threatName + ", Codigo: " + this.code);
    
  
    
    this.ocultos = $('div').filter(function() {
        return $(this).css('display') === 'none' || $(this).css('visibility') === 'hidden';

    });

    // Crear el observador de mutaciones una vez fuera del bucle each
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes') {
                //observer.disconnect();
                var targetElement = mutation.target;
                
                var position = $(targetElement).css('position');
                var zIndex = $(targetElement).css('z-index');
                var right = $(targetElement).css('right');
                var bottom = $(targetElement).css('bottom');
                var left = $(targetElement).css('left');
                var top = $(targetElement).css('top');
                var display = $(targetElement).css('display');
    
                if (position === 'fixed' && parseInt(zIndex) > 0 && display === 'flex' && 
                    (right || bottom || left || top)) {
                    // El elemento cumple con las características de posición fija
                } else {
                    // El elemento no cumple con las características de posición fija
                }
                
                var $targetElement = $(targetElement);
                if ($targetElement.attr('role') && $targetElement.attr('aria-hidden')) {
                    //console.log('El elemento es accesible según sus atributos de Rol y ARIA.');

                } else {
                   
                    //console.log("Repotando mutación en el elemento:", targetElement);
                    //console.log("Tipo de mutación:", mutation.type);
                    //console.log("Atributo afectado:", mutation.attributeName); // Mostrar el atributo mutado
                    //console.log("Valor del atributo:", attributeValue); // Mostrar el valor del atributo
                    
                       
                        
                     
                    
                        var xpath = xpathInstance.getElementXPath(mutation.target);
                        if (!modal_Window_Display.mutaciones.includes(xpath)) {
                            // Agregar el XPath al array de mutaciones
                            modal_Window_Display.mutaciones.push(xpath);
                            if (logger.verbose) console.log(modal_Window_Display.threatName, " in ",$targetElement);
                       
                            logger.logEvent(modal_Window_Display.threatName, {xpath:xpath});
                        }
                       
                       
                        
                }
            }
        });
    });

    function calculateXPath(element) {
        var xpath = '';
        // Recorrer hacia arriba en el DOM desde el elemento dado
        for (; element && element.nodeType == 1; element = element.parentNode) {
            var id = $(element.parentNode).children(element.tagName).index(element) + 1;
            id > 1 ? (id = '[' + id + ']') : (id = '');
            xpath = '/' + element.tagName.toLowerCase() + id + xpath;
        }
        return xpath;
    }
    
    // Observar cada elemento oculto con el mismo observador
    this.ocultos.each(function(index, div) {
      
        var config = { attributes: true};
        // Adjuntar el elemento específico al observador
        observer.observe(div, config);
        div.mutationObserver = observer; // Asociar el observador con el elemento
    });
}


/************************************************************************************************************
	NavigationPathAccessibility
************************************************************************************************************/
function NavigationPathAccessibility(){
    var navigationPath=new NavigationPath(2, 3000, false, false);
    navigationPath.code="E06"
    navigationPath.threatName="NavigationPathVersionAccessibility";
    if (logger.verbose) console.info(">>Cargando El Evento "+navigationPath.threatName +  ", Codigo: " + navigationPath.code);
    return navigationPath;
}

/************************************************************************************************************
	UnfilledFormAccessibility
************************************************************************************************************/
function UnfilledFormAccessibility(){
    var unfilledForm=new UnfilledForm();
    unfilledForm.code="E07";
    unfilledForm.threatName="UnfilledFormAccesibility";
    if (logger.verbose) console.info(">>Cargando El Evento "+unfilledForm.threatName +  ", Codigo: " + unfilledForm.code);
    return unfilledForm;
}

/************************************************************************************************************
    UnfilledForm
************************************************************************************************************/
function UnfilledForm(){
	this.submittedForms = [];
	this.threatName="UnfilledForm";
	var unfilledForm = this;
    

	$('form').submit(function(e){
  		var key = xpathInstance.getElementXPath(this);
		unfilledForm.submittedForms[key] = true;
	})

	$(window).on('beforeunload', function() {
	  var url=document.URL;

      var key = xpathInstance.getElementXPath(this);
	    unfilledForm.submittedForms[key] = true;
      
	  var allowedTypes = ["text","password","textarea","date"];
	  var forms=document.forms;

	  for(i=0;i<forms.length;i++){
        
	  		var key = xpathInstance.getElementXPath(forms[i]);
			formStarted = (typeof logger.formTimer.startTimeForForm[key]  !== 'undefined');
			formSubmitted = (typeof unfilledForm.submittedForms[key]  !== 'undefined');
			formAbandoned = (formStarted && !formSubmitted);
     
			if (formAbandoned){
                
		  		var time = logger.formTimer.calculateTime(key);
				if (logger.verbose) console.log(unfilledForm.threatName+" on "+key+" on "+url+" after "+time+"ms");
				logger.logEvent( unfilledForm.threatName, {url:url, xpath:key, time:time}, false);
				}
	  }
	});
}


/************************************************************************************************************
     Re_enter_focus_form
************************************************************************************************************/
function Re_enter_focus_form(){
    this.code="no aplica aun";
	this.threatName="Re enter focus form";
    this.unfocused={};
    this.count_unfocused={};
	var re_enter_focus_form = this;
    console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    $('Form').on('focusout', function(event) {
                // Usamos event.relatedTarget para saber a dónde va el foco
                var newFocus = event.relatedTarget;
                if (newFocus && !$(this).has(newFocus).length) {
                    // Si el nuevo elemento enfocado no está dentro del formulario
                    //console.log('focusout: El foco se ha movido a un elemento fuera del formulario:', newFocus);
                    var key = xpathInstance.getElementXPath(this);
                    re_enter_focus_form.unfocused[key] = true;
                }
            });
            $('Form').on('focusin', function(event) {
                
                var key = xpathInstance.getElementXPath(this);
                
                if (re_enter_focus_form.unfocused[key]){
                    if (key in re_enter_focus_form.count_unfocused){
                        re_enter_focus_form.count_unfocused[key] = re_enter_focus_form.count_unfocused[key]+1;
                    }else{
                        re_enter_focus_form.count_unfocused[key]=1;
                    }
                    //console.info("Reporta Form_Reentry",re_enter_focus_form.count_unfocused[key])
                    logger.logEvent(re_enter_focus_form.threatName, {'xpaht':key,'count':re_enter_focus_form.count_unfocused[key]});          
                    delete re_enter_focus_form.unfocused[key];

                }
            
                }
            );

}

/************************************************************************************************************
      Re_enter_focus_page
************************************************************************************************************/
function Re_enter_focus_page(){
    this.code="no aplica aun";
	this.threatName="Re enter focus page";
    this.unfocused=false;
    this.count_unfocused=0;
	var re_enter_focus_page = this;
    this.actualURL = window.location.href
    console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
        $(window).on('blur', function() {
            re_enter_focus_page.unfocused=true;

            });

            // Detectar cuándo la ventana vuelve a ganar el foco
        $(window).on('focus', function() {
            if (re_enter_focus_page.unfocused && re_enter_focus_page.actualURL === window.location.href){

                re_enter_focus_page.count_unfocused=re_enter_focus_page.count_unfocused+1
                logger.logEvent(re_enter_focus_page.threatName, {'count':re_enter_focus_page.count_unfocused});          
            }
                re_enter_focus_page.unfocused=false;
                re_enter_focus_page.actualURL = window.location.href
        });
}

/************************************************************************************************************
    Deleted input content
************************************************************************************************************/
function Deleted_input_content(paramOc_Elem){
    this.code="E01";
    this.threatName="Deleted_input_content";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    var deleted_input_content = this;
 
    $(":text").on('change',function(e) {
        deleted_input_content.value=this.value;              
    });
 
    $(":text").on('blur',function(e) {
               
        if(!deleted_input_content.value==""){ 
            if(!e.currentTarget.value|| 0 === e.currentTarget.value.length){   
                var xpath=xpathInstance.getElementXPath(e.currentTarget);
                deleted_input_content.value=""; 
                if (logger.verbose) console.log(deleted_input_content.threatName+" on "+xpath);
                logger.logEvent(deleted_input_content.threatName, {xpath:xpath});          
            }
        }
    });
}

/************************************************************************************************************
     Skipped_Focus_Element
************************************************************************************************************/
/*function Skipped_Focus_Element() {
    this.code = "no aplica aun";
    this.threatName = "Skipped_Focus_Element";
    this.focusedElements = new Set(); // Conjunto para almacenar los elementos que fueron enfocados

    console.info(">> Cargando el evento " + this.threatName + ", Código: " + this.code);

    // Asocia el evento focus a todos los elementos enfocables de la página
   $(":input, select, a, button, button[type='submit'], textarea, input[type='submit']").on('focus', (e) => {
        const currentElement = e.target;

        // Agrega el elemento actual al conjunto de elementos enfocados
        this.focusedElements.add(currentElement);

        // Obtiene el elemento anterior en el DOM
        const previousElement = $(currentElement).prevAll(":input, a, button").first();

        if (previousElement.length) {
            // Verifica si el elemento previo fue enfocado anteriormente
            const wasPreviousFocused = this.focusedElements.has(previousElement[0]);
            const isVisible = isElementInViewport(previousElement[0]);
            
            console.log("Elemento anterior:", previousElement[0], 
                        "¿Fue enfocado antes?", wasPreviousFocused, 
                        "¿Está visible?", isVisible);

            // Verifica la condición de que el previo no fue enfocado y está visible
            if (!wasPreviousFocused && isVisible) {
                console.info("Responder evento");
                // Aquí puedes poner la lógica adicional que necesites
            }
        } else {
            console.log("No hay elemento previo enfocable.");
        }
    });

    // Función para verificar si un elemento está visible en el área del viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}*/
class SkippedFocusElement {
    constructor() {
        this.code = "no aplica aun";
        this.threatName = "Skipped_Focus_Element";
        this.focusedElements = new Set(); // Conjunto para almacenar los elementos que fueron enfocados

        console.info(">> Cargando el evento " + this.threatName + ", Código: " + this.code);

        // Asocia el evento focus a todos los elementos enfocados de la página
        document.querySelectorAll("input, select, a, button, button[type='submit'], textarea, input[type='submit']")
            .forEach(element => {
                element.addEventListener('focus', this.handleFocus.bind(this));
            });
    }

    handleFocus(e) {
        const currentElement = e.target;

        // Agrega el elemento actual al conjunto de elementos enfocados
        this.focusedElements.add(currentElement);

        // Obtiene todos los elementos enfocados y los ordena por su posición en el viewport
        const sortedElements = this.getSortedFocusableElements();

        // Encuentra el índice del elemento actual en el array ordenado
        const currentIndex = sortedElements.indexOf(currentElement);

        // Si no es el primer elemento, obtenemos el anterior
        if (currentIndex > 0) {
            let previousElement = sortedElements[currentIndex - 1];

            // Verifica que el elemento previo sea del tipo deseado
            const validTypes = ["INPUT", "SELECT", "A", "BUTTON", "TEXTAREA"];
            const isCorrectType = validTypes.includes(previousElement.nodeName) && 
                                  (previousElement.type !== "submit" || previousElement.matches("button[type='submit'], input[type='submit']"));

            // Verifica que tanto el elemento actual como el anterior estén dentro del <body> y no en una ventana modal
            const isInBody = this.isInBody(currentElement) && this.isInBody(previousElement);
            const isNotInModal = !this.isInModal(currentElement) && !this.isInModal(previousElement);

            // Verifica que el elemento anterior no sea de tipo hidden
            const isNotHidden = previousElement.type !== "hidden";

            // Verifica que ambos elementos estén en el mismo formulario
            const isSameForm = this.isInSameForm(currentElement, previousElement);

            if (isCorrectType && isInBody && isNotHidden && isSameForm && isNotInModal) {
                // Verifica si el elemento previo fue enfocado anteriormente
                const wasPreviousFocused = this.focusedElements.has(previousElement);
                const isVisible = this.isElementInViewport(previousElement);

                console.log("Elemento anterior:", previousElement, 
                            "¿Fue enfocado antes?", wasPreviousFocused, 
                            "¿Está visible?", isVisible);

                // Verifica la condición de que el previo no fue enfocado y está visible
                if (!wasPreviousFocused && isVisible) {
                    console.info("Reportar evento");

                    // Obtén el XPath del elemento actual
                    var xpathPrevious = this.getElementXPath(previousElement);
                    var xpath = this.getElementXPath(currentElement);

                    // Obtener el HTML de ambos elementos
                    var htmlElement = currentElement.innerHTML;
                    var htmlPrevious = previousElement.innerHTML;

                    // Llamar al logger con el threatName y el XPath
                    logger.logEvent(this.threatName, {
                        xpath: xpath,
                        xpathPrevious: xpathPrevious,
                        htmlElement: htmlElement,
                        htmlPrevious: htmlPrevious
                    });
                }
            } else {
                console.log("El elemento previo no es de un tipo válido, no está en el <body>, es de tipo hidden, no están en el mismo formulario, o están dentro de un modal.");
            }
        } else {
            console.log("No hay elemento previo enfocable.");
        }
    }

    getSortedFocusableElements() {
        const focusableElements = Array.from(document.querySelectorAll("input, select, a, button, textarea, input[type='submit']"));
        
        // Ordena los elementos en función de su posición en el viewport
        return focusableElements.sort((a, b) => {
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();

            // Compara las posiciones en el eje Y, luego en el eje X si son iguales
            if (rectA.top === rectB.top) {
                return rectA.left - rectB.left;
            }
            return rectA.top - rectB.top;
        });
    }

    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    isInBody(element) {
        // Verifica si el elemento tiene a <body> como ancestro
        let parent = element.parentElement;
        while (parent) {
            if (parent.tagName === 'BODY') return true;
            parent = parent.parentElement;
        }
        return false;
    }

    getElementXPath(element) {
        // Esta función genera el XPath del elemento
        let path = [];
        while (element && element.nodeType === 1) {  // Mientras sea un nodo de tipo Element
            let index = 1;
            let sibling = element.previousElementSibling;
            while (sibling) {
                if (sibling.nodeName === element.nodeName) index++;
                sibling = sibling.previousElementSibling;
            }
            path.unshift(`${element.nodeName.toLowerCase()}[${index}]`);
            element = element.parentNode;
        }
        return path.length ? `/${path.join('/')}` : null;
    }

    isInSameForm(currentElement, previousElement) {
        // Verifica si ambos elementos están en el mismo formulario
        let currentParent = currentElement.parentElement;
        let previousParent = previousElement.parentElement;

        // Recorremos los padres de ambos elementos hasta encontrar el formulario
        while (currentParent) {
            if (currentParent.tagName === 'FORM') break;
            currentParent = currentParent.parentElement;
        }

        while (previousParent) {
            if (previousParent.tagName === 'FORM') break;
            previousParent = previousParent.parentElement;
        }

        // Devuelve true si ambos elementos están en el mismo formulario
        return currentParent === previousParent && currentParent !== null;
    }

    isInModal(element) {
        // Verifica si el elemento está dentro de una ventana modal
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList && parent.classList.contains('modal')) { // Aquí se asume que el modal tiene una clase 'modal'
                return true;
            }
            parent = parent.parentElement;
        }
        return false;
    }
}


// Inicia la clase


/************************************************************************************************************
    Unhelpful_label
************************************************************************************************************/
function Unhelpful_label(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){  
   
    this.unhelpful_label_for_input= Parametros(new Unhelpful_label_for_input(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime));
    this.unhelpful_label_for_radio_button=Parametros(new Unhelpful_label_for_radio_button(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime));
    this.unhelpful_label_for_chekbox=Parametros(new Unhelpful_label_for_chekbox(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime));
}  

function Unhelpful_label_for_input(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){    
    this.threatName="Unhelpful_label";
    this.code="D02-for Input";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 9000; // Tiempo maximo  de  espera   
    this.lastElement=null; //Ultimo elemento
    this.now=null;
    var unhelpful_label=this;
    
    $("input[type='text']").on('focusout',function(e) {      
        unhelpful_label.minimumWaitingTime=unhelpful_label.text["MinimumWaitingTime"]
        unhelpful_label.maximumWaitingTime=unhelpful_label.text["MaximumWaitingTime"]
        unhelpful_label.waitingTime = e.timeStamp - unhelpful_label.now;
        waitingTimeInRange = unhelpful_label.waitingTime>unhelpful_label.minimumWaitingTime && unhelpful_label.waitingTime < unhelpful_label.maximumWaitingTime;
        nameOfTarget=e.currentTarget.id; //obtiene en nombre para buscar si hay un label          
        labelForDescription=($("label[for='"+nameOfTarget+"']").length>0); //busca un label para el input si existe por lo   menos 1 retrna true
        relatedElements = (unhelpful_label.lastElement !== null)    
        if(waitingTimeInRange && !labelForDescription && relatedElements){//si se  cumplen todas las condicionees
            var xpath=xpathInstance.getElementXPath(e.currentTarget);//obtiene el xpath del elemento a partir del objeto xpathInstance
            if (logger.verbose) console.log(unhelpful_label.threatName+" on "+xpath+" for "+unhelpful_label.waitingTime+"ms ");//muestra por consola la presencia del evento de usabiliadad	
                console.info(unhelpful_label.threatName, {xpath:xpath, waitingTime:unhelpful_label.waitingTime})
                logger.logEvent(unhelpful_label.threatName, {xpath:xpath, waitingTime:unhelpful_label.waitingTime});//detecta la ocurrencia del evento de usabiliad
            }     
    });  
         
    $("input[type='text']").on('focus', function(e){//Selector  y carga manejador de event
        unhelpful_label.lastElement=e.currentTarget;
        unhelpful_label.now=e.timeStamp;
    });
    
    $("input[type='text']").on('keyup',function(e) {
        if (e.keyCode!==9) {
           if (!e.shiftKey){
            unhelpful_label.lastElement=null;  
            }     
        };
    });
};


function Unhelpful_label_for_radio_button(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){    
    this.threatName="Unhelpful_label";
    this.code="D02-for Radio Button";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 9000; // Tiempo maximo  de  espera
    this.lastElement=null; //Ultimo elemento
    this.now=null;
    this.list_focus=[];
    var unhelpful_label=this;
    
    $("input[type='radio']").on('focusout',function(e) {
       waitingTime = e.timeStamp - unhelpful_label.now;  
       cant=unhelpful_label.list_focus.length;
       var evento=[];
       evento['element']=e.currentTarget;
       evento['waitingTime']=waitingTime;
       existe=false;
        for (var i = 0; i<cant; i++) {
            if (e.currentTarget==(unhelpful_label.list_focus[i])['element']){
                existe=true;
            };
        }
        if (!existe){
            unhelpful_label.list_focus[cant]=evento;
        }      
     });  
         
    $("input[type='radio']").on('focus', function(e){//Selector  y carga manejador de event
        unhelpful_label.lastElement=e.currentTarget;
        unhelpful_label.now=e.timeStamp;
    });
    	
    $("input[type='submit']").on('keypress', function(e){
        var form=e.currentTarget.form;
        unhelpful_label.minimumWaitingTime=unhelpful_label.radio["MinimumWaitingTime"];
        unhelpful_label.maximumWaitingTime=unhelpful_label.radio["MaximumWaitingTime"];
        var cant=unhelpful_label.list_focus.length;
        var name=[];
        for (var i = 0; i < cant; i ++){
            var evento=unhelpful_label.list_focus[i];
            if (!name.includes(evento['element'].name)){
                name[name.length]=evento['element'].name;
            }
        }
        for (var i = 0; i < name.length; i ++){   
            requerido= ($('input:radio[name="'+name[i]+'"][required]').size()>0);
            check= ($('input:radio[name="'+name[i]+'"][checked]').size()>0)                       
            var elementos=$('input:radio[name="'+name[i]+'"]');        
            if((elementos[0]).form==form){   
                var all_focados=true;
                var all_label=true;
                var all_waitingTimeInRange=true;
                for (var j = 0; j < elementos.length; j ++){         
                    var focado=false
                    var label=false;
                    var waitingTimeInRange=false;
                    for (var k = 0; k < unhelpful_label.list_focus.length; k ++){           
                        if(elementos[j]==(unhelpful_label.list_focus[k])['element']){                     
                            focado=true;
                            if($("label[for='"+elementos[j].id+"']").length>0){
                                label=true;    
                            }                 
                            if((unhelpful_label.list_focus[k])['waitingTime']>unhelpful_label.minimumWaitingTime && (unhelpful_label.list_focus[k])['waitingTime'] < unhelpful_label.maximumWaitingTime){
                                waitingTimeInRange=true;
                            }
                            break;
                        }
                    }
                    if (!focado){
                        all_focados=false
                        break;
                    }   
                    if (!label){
                        all_label=false
                        break;
                    }  
                    if (!waitingTimeInRange){
                        all_waitingTimeInRange=false
                        break;
                    } 
                }        
                if (all_focados && !all_label && all_waitingTimeInRange && requerido && !check){
                    for (var t = 0; t < elementos.length; t ++){
                        k=0;
                        while(elementos[t]!=(unhelpful_label.list_focus[k])['element']){
                            k+=1;
                        }        
                        elemento=((unhelpful_label.list_focus[k])['element']);        
                        if(!(($("label[for='"+elemento.id+"']").length)>0)){
                            var xpath=xpathInstance.getElementXPath((unhelpful_label.list_focus[k])['element']);
                            logger.logEvent(unhelpful_label.threatName, {xpath:xpath, waitingTime:(unhelpful_label.list_focus[k])['waitingTime']});
                        }                    
                    }   
                }      
            }                   
        }                   
    });
 
};



function Unhelpful_label_for_chekbox(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){    
    this.threatName="Unhelpful_label";
    this.code="D02-For Chekbox";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 9000; // Tiempo maximo  de  espera
    this.lastElement=null; //Ultimo elemento
    this.now=null;
    this.list_focus=[];
    var unhelpful_label=this;
    $("input[type='checkbox']").on('focusout',function(e) {
       waitingTime = e.timeStamp - unhelpful_label.now;  
       cant=unhelpful_label.list_focus.length;
       var evento=[];
       evento['element']=e.currentTarget;
       evento['waitingTime']=waitingTime;
       existe=false;
        for (var i = 0; i<cant; i++) {
            if (e.currentTarget==(unhelpful_label.list_focus[i])['element']){
                existe=true;      
            };
        }
        if (!existe){
            unhelpful_label.list_focus[cant]=evento;
        }
     });  
         
    $("input[type='checkbox']").on('focus', function(e){//Selector  y carga manejador de event
        unhelpful_label.lastElement=e.currentTarget;
        unhelpful_label.now=e.timeStamp; 
    });
    
    $("input[type='submit']").on('keypress', function(e){   
        form=e.currentTarget.form;
        unhelpful_label.minimumWaitingTime=unhelpful_label.checkbox["MinimumWaitingTime"];
        unhelpful_label.maximumWaitingTime=unhelpful_label.checkbox["MaximumWaitingTime"];
        var elementos=$('input:checkbox[required]');
        for (var i = 0; i < elementos.length; i ++){
            if (elementos[i].form==form){
            check= (elementos[i])['checked'];  
            var focado=false
            var label=false;
            var waitingTimeInRange=false;
            for (var k = 0; k < unhelpful_label.list_focus.length; k ++){
                if(elementos[i]==(unhelpful_label.list_focus[k])['element']){             
                    focado=true;    
                    if($("label[for='"+elementos[i].id+"']").length>0){
                        label=true;    
                            }        
                    if((unhelpful_label.list_focus[k])['waitingTime']>unhelpful_label.minimumWaitingTime && (unhelpful_label.list_focus[k])['waitingTime'] < unhelpful_label.maximumWaitingTime){
                        waitingTimeInRange=true;
                        }
                if (focado && !label && waitingTimeInRange && !check){
                    var xpath=xpathInstance.getElementXPath(elementos[i]);
                    logger.logEvent(unhelpful_label.threatName, {xpath:xpath, waitingTime:(unhelpful_label.list_focus[k])['waitingTime']});
                }   
                  }
            }
            }   
        }              
    });
};

/************************************************************************************************************
    FastScrollingWithKeyboard
************************************************************************************************************/
function FastScrollingWithKeyboard(minSteps, maxScrollingTime, paramDwellingTime, paramScrollingStartingTime){
  this.lastKeyboardInput=null;
    this.minimumSteps=minSteps || 3;
    this.maximumScrollingTime=maxScrollingTime || 8000;"tiempo máximo de desplazamiento"
    this.dwellingTime=paramDwellingTime || 6000;"tiempo de residencia"
    this.scrollingStartingTime=paramScrollingStartingTime || 1500;"tiempo de inicio de desplazamiento"
    this.timer;
    this.threatName="FastScrollingWithKeyboard",
    this.code="R12"
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.startingTop= 0;
    this.scrollAccessibility=false;
    this.scrollingInitiated= false;
    this.steps=0;
    var fastScrollingWithKeyboard = this;  
    
    $(window).on('keypress', function(e){
        fastScrollingWithKeyboard.lastKeyboardInput=e.which;// e.which contiene el codigo numerico para una tecla 
        if(fastScrollingWithKeyboard.lastKeyboardInput==32){          
           fastScrollingWithKeyboard.scrollAccessibility=true; 
           if(!fastScrollingWithKeyboard.scrollingInitiated) {"Desplazamiento iniciado"
               fastScrollingWithKeyboard.scrollingInitiated=true;
               fastScrollingWithKeyboard.scrollingStartingTime=new Date().getTime();
               fastScrollingWithKeyboard.startingTop=$(window).scrollTop();"Descripción: Obtenga la posición vertical actual de la barra de desplazamiento para el primer elemento en el conjunto de elementos coincidentes o establezca la posición vertical "
               fastScrollingWithKeyboard.steps=1;
            }else{
                if(!e.shiftKey){
                   fastScrollingWithKeyboard.steps++;
                }
                else{
                   fastScrollingWithKeyboard.steps--;
                } 
            }
            
        }
        else{       
            fastScrollingWithKeyboard.scrollAccessibility=false;
            if(fastScrollingWithKeyboard.scrollingInitiated){
               fastScrollingWithKeyboard.flush(logger); 
            }
        }
    });
  
    $(window).on('scroll', function(e){
           clearTimeout(fastScrollingWithKeyboard.timer);
           fastScrollingWithKeyboard.timer=setTimeout('logger.fastScrollingWithKeyboard.flush(logger)', fastScrollingWithKeyboard.dwellingTime);  
    });
    
    this.flush=function(logger){
	var currentTop=$(window).scrollTop();//Top actual
        var scrolledLength=Math.abs(fastScrollingWithKeyboard.startingTop-currentTop);//longitud desplazada
        var scrollingTime;
        var scrollingEndingTime;
        if (fastScrollingWithKeyboard.scrollAccessibility){
              scrollingEndingTime=(new Date().getTime())-fastScrollingWithKeyboard.dwellingTime; 
              scrollingTime=scrollingEndingTime-fastScrollingWithKeyboard.scrollingStartingTime;        
        }else{
            scrollingEndingTime=(new Date().getTime()); 
            scrollingTime=(new Date().getTime())-fastScrollingWithKeyboard.scrollingStartingTime;
        }
       
        if (Math.abs(fastScrollingWithKeyboard.steps)>fastScrollingWithKeyboard.minimumSteps && scrolledLength>$(window).height()&&(scrollingTime<fastScrollingWithKeyboard.maximumScrollingTime)){//scrollAccessibility se usa para verificar que el scrool fue por teclado con tecla espacio
            if (logger.verbose) console.log(fastScrollingWithKeyboard.threatName+" from "+this.startingTop+" to "+currentTop+" in "+scrollingTime/1000);
            logger.logEvent(fastScrollingWithKeyboard.threatName,{timestamp:scrollingEndingTime, time:scrollingTime, initialTop:fastScrollingWithKeyboard.startingTop, finalTop:currentTop,steps:fastScrollingWithKeyboard.steps});		
        
        }
        
        fastScrollingWithKeyboard.scrollingInitiated=false;
         clearTimeout(fastScrollingWithKeyboard.timer);
	fastScrollingWithKeyboard.steps=0;
    };
    
};

/************************************************************************************************************
    Frequent_tab
************************************************************************************************************/
function Frequent_tab(minSteps, maxScrollingTime, paramDwellingTime, paramScrollingStartingTime){
    this.minimumSteps=minSteps || 3;
    this.maximumScrollingTime=maxScrollingTime || 4000;
    this.dwellingTime=paramDwellingTime || 3000;
    this.scrollingStartingTime=paramScrollingStartingTime || 1500;
    this.timer;
    this.threatName="Frequent tab",
    this.code="D04";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.elementInicial= false;
    this.elementFinal= "";
    this.startingTop= 0;
    this.scrollingInitiated= false;
    this.steps=0;
    
   
    var frequent_tab = this;
    this.flush=function(logger){
        var currentTop=$(window).scrollTop();
        var xpath_final= xpathInstance.getElementXPath(frequent_tab.elementFinal);
        var xpath_inicial=xpathInstance.getElementXPath(frequent_tab.elementInicial)
        var xpath=xpathInstance.getElementXPath(frequent_tab.elementFinal);
        if (!frequent_tab.scrollingEndingTime){
            frequent_tab.scrollingEndingTime=(new Date().getTime())-frequent_tab.dwellingTime;
        }
        scrollingEndingTime=frequent_tab.scrollingEndingTime
        var scrollingTime=scrollingEndingTime-frequent_tab.scrollingStartingTime;                     
        if (Math.abs(frequent_tab.steps)>frequent_tab.minimumSteps && scrollingTime < frequent_tab.maximumScrollingTime){
            if (logger.verbose) console.info((frequent_tab.threatName,{xpath:xpath, timestamp:scrollingEndingTime, time:scrollingTime, initialTop:frequent_tab.startingTop, finalTop:currentTop, steps:Math.abs(frequent_tab.steps), xpath_final:xpath_final, xpath_inicial:xpath_inicial}));       
            logger.logEvent(frequent_tab.threatName,{xpath:xpath,timestamp:scrollingEndingTime, time:scrollingTime, initialTop:frequent_tab.startingTop, finalTop:currentTop, steps:Math.abs(frequent_tab.steps), xpath_final:xpath_final, xpath_inicial:xpath_inicial});
        }
        frequent_tab.scrollingInitiated=false;
        frequent_tab.steps=0;
        frequent_tab.elementInicial=false;
        frequent_tab.scrollingEndingTime=false;
    };

    $("a, input, img").on('keydown', function(e){ 
        if (!frequent_tab.elementInicial){
            frequent_tab.elementInicial=e.currentTarget;   
        }});
    
    $("a, input, img").on('keyup', function(e){     //abria que sumar  otors elemntos como el botton        
        if(e.keyCode==9){
            if (!frequent_tab.scrollingInitiated) {//Desplazamiento iniciado"
                frequent_tab.scrollingInitiated=true;
                if (frequent_tab.MinimumSteps && frequent_tab.MaximumScrollingTime && frequent_tab.DwellingTime){
                    frequent_tab.minimumSteps=frequent_tab.MinimumSteps;
                    frequent_tab.maximumScrollingTime= frequent_tab.MaximumScrollingTime;
                    frequent_tab.dwellingTime=frequent_tab.DwellingTime
                }         
                frequent_tab.scrollingStartingTime=new Date().getTime();
                frequent_tab.startingTop=$(window).scrollTop();
                if(!e.shiftKey){
                    frequent_tab.steps++;
                }
                else{
                    highFrequencyOfrequent_tabfUseOfTheTabKey.steps--;
                }
            }
            else{
                if(!e.shiftKey){
                    frequent_tab.steps++;
                    }
                else{
                    frequent_tab.steps--;
                }     
                }          
                frequent_tab.timeStep=new Date().getTime();
		clearTimeout(frequent_tab.timer);          
        frequent_tab.elementFinal= e.currentTarget;
		frequent_tab.timer=setTimeout('logger.frequent_tab.flush(logger)', frequent_tab.dwellingTime);            
            }          
    });

    
    
    $("input").on('keyup',function(e) {
        if (e.keyCode!==9) {
           if (!e.shiftKey){
            frequent_tab.scrollingEndingTime=(new Date().getTime())-((new Date().getTime())-frequent_tab.timeStep);
            frequent_tab.flush(logger);
            frequent_tab.scrollingInitiated=false;
            frequent_tab.steps=0;
            }     
        };
    });
}
/************************************************************************************************************
											FormSubmissionAccessibility
************************************************************************************************************/
function FormSubmissionAccessibility(){
    var formSubmission=new FormSubmission();
    formSubmission.code="N/A";
    formSubmission.threatName="FormSubmissionAccessibility";
    if (logger.verbose) console.info(">>Cargando El Evento "+formSubmission.threatName +  ", Codigo: " + formSubmission.code);
    return formSubmission;


}
/************************************************************************************************************
											FormSubmission
************************************************************************************************************/
function FormSubmission(){
	this.searchTerms=["search", "buscar", "b&uacute;squeda", "suche", "ricerca"];
	this.found=false;
	this.threatName="FormSubmission";
	var fv_tolerance = 1500;
	var submitted = false;
	var formSubmission = this;


	this.initialize=function(){
		if(localStorage.formSubmissionHashCode){
		   var lastCookie = JSON.parse(localStorage.formSubmissionHashCode);
		   var emptyInputs= JSON.parse(localStorage.emptyInputs);
			lastCookie["emptyTextInputs"] = emptyInputs["emptyTextInputs"];
		   var lastHash = lastCookie.hashCode;
		   var sourceForm = xpathInstance.getElementByXpath(lastCookie.xpath);
		   if (sourceForm !== null){
				validation=(lastHash!=currentHash);
				var failed = lastCookie.isSearchForm?'false':'true';
				var validationType=validation?'server':'none';
				var extraParameters={failed:failed, validation:validationType};
				if (logger.verbose){
					validationLogMessage=validation?'with messages':'with no messages';
					failedText=(failed=='true')?"failed (server) ":"success ";
					console.log("FormSubmission "+failedText+validationLogMessage+" at "+document.URL+" | "+lastCookie.xpath);
				};
				logger.logEvent(formSubmission.threatName, $.extend(lastCookie, extraParameters), true);
			}
			else{
				if (logger.verbose) console.log("FormSubmission success at "+lastCookie.url+" | "+lastCookie.xpath);
				var extraParameters={failed:'false', validation:'none'};
				logger.logEvent(formSubmission.threatName, $.extend(lastCookie, extraParameters), true);
			}
			localStorage.removeItem("formSubmissionHashCode");
		}


		$('form').on('submit',function(){
           
			//array of emtpy text inputs xpaths
			var getEmptyInputs = function(jQueryForm) {
				var emptyInputs = jQueryForm.find("input:text").filter(function() { return $(this).val() == ""; });
				var emptyInputsXpaths = [];
				for (var i = 0; i < emptyInputs.length; i++) {
					emptyInputsXpaths[i] = xpathInstance.getElementXPath(emptyInputs[i]);
				}
				return emptyInputsXpaths;
			};
			event.preventDefault();

			submitted=true;
			var form=xpathInstance.getElementXPath(this);
			var element = $(this);
			var time = logger.formTimer.calculateTime(form);
			var emptyInputs = getEmptyInputs(element);
			var cookie = {
				url:document.URL,
				xpath:form,
				hashCode:currentHash,
				isSearchForm:formSubmission.isSearchForm(element),
				elementLeft:element.offset().left,
				elementTop:element.offset().top,
				elementWidth:element.outerWidth(),
				elementHeight:element.outerHeight(),
				elementAlreadySet:true,
				elementContent:logger.sanitizeContent(element),
				time:time
				}
			//If searchForm, save search param too
			if(formSubmission.isSearchForm(element)){
				cookie['searchQuery'] = element.find('input, textarea').not(':input[type=button], :input[type=submit], :input[type=hidden], :input[type=reset]').val();
				localStorage.formSearchHashCode = JSON.stringify(cookie);
			}
			localStorage.formSubmissionHashCode = JSON.stringify(cookie);
			localStorage.emptyInputs = JSON.stringify({emptyTextInputs: emptyInputs});
			setTimeout(function(){
				var newHash=formSubmission.hashCode($(document).text());
				submitted=false;
				validation=(newHash!=currentHash);
				if (logger.verbose){
					validationLogMessage=validation?'with messages':'with no messages';
					console.log("FormSubmission failed (client) "+validationLogMessage+" at "+document.URL+" | " + form);};
				var failed = cookie.isSearchForm?'false':'true';
				var extraParameters={failed:failed, validation:'client', emptyTextInputs: emptyInputs};
				logger.logEvent(formSubmission.threatName, $.extend(cookie, extraParameters));

			},fv_tolerance);
           
		});

		$(window).on("beforeunload",function(){
    
			if(!submitted){
			  localStorage.removeItem("formSubmissionHashCode");
			}
            
		});
		var currentHash = this.hashCode($(document).text());

	}

	this.isSearchForm=function(form){
		for (var i = this.searchTerms.length - 1; i >= 0; i--)
			this.found=this.found||(form[0].outerHTML.toLowerCase().indexOf(this.searchTerms[i])!=-1);
		return this.found;
	};

	this.hashCode=function(string){
		var hash = 0;
		var len = string.length;
		if (len == 0) return hash;
		for (i = 0; i < string.length; i++) {
			char = string.charCodeAt(i);
			hash = ((hash<<5)-hash)+char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	};

	this.initialize();

}
/************************************************************************************************************
    Missing_SR_text
 ************************************************************************************************************/
function Missing_SR_text(paramMinimumWaitingTime, paramMaximumWaitingTime,paramLastMoveTime){
    this.code="D03"
    this.threatName="Missing_SR_text"; //Amenaza ojo debe ser para indicar la clase en Kobold?
    if (logger.verbose)  console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 5000; // Tiempo maximo  de  espera
    this.lastMoveTime=paramLastMoveTime || 0; //último tiempo de movimiento
    this.lastElement=null; //Ultimo elemento	
    this.now=null;
    this.text=null;
    this.radio=null;
    this.checkbox=null;
    var missing_SR_text=this; 
    
    $("input[type='text'],input[type='radio'],input[type='checkbox']").on('focusout',function(e) {
        missing_SR_text.waitingTime = e.timeStamp - missing_SR_text.now;
        placeholder=false; 
        switch(e.currentTarget.type) {
            case "text":
                  if (e.currentTarget.placeholder.length>0){
                      placeholder=true;
                    }     
                    missing_SR_text.minimumWaitingTime=missing_SR_text.text["MinimumWaitingTime"];
                    missing_SR_text.maximumWaitingTime=missing_SR_text.text["MaximumWaitingTime"];
                break;
            case "radio": 
                    missing_SR_text.minimumWaitingTime=missing_SR_text.radio["MinimumWaitingTime"];
                    missing_SR_text.maximumWaitingTime=missing_SR_text.radio["MaximumWaitingTime"];
                break;
            
            case "checkbox":
               
                    missing_SR_text.minimumWaitingTime=missing_SR_text.checkbox["MinimumWaitingTime"];
                    missing_SR_text.maximumWaitingTime=missing_SR_text.checkbox["MaximumWaitingTime"];
                break;   
          } 
          
          
        waitingTimeInRange = missing_SR_text.waitingTime>missing_SR_text.minimumWaitingTime && missing_SR_text.waitingTime < missing_SR_text.maximumWaitingTime;
        arialabel=true;
        if ((e.currentTarget.attributes["aria-label"])==null){
            arialabel=false;
        }
        nameOfTarget=e.currentTarget.id; //obtiene en nombre para buscar si hay un label               
        labelForDescription=$("label[for='"+nameOfTarget+"']").length>0; //busca un label para el input si existe por lo   menos 1 retrna true
        relatedElements = ( missing_SR_text.lastElement !== null);
       
        if(waitingTimeInRange && relatedElements && !labelForDescription && !placeholder && !arialabel){//si se  cumplen todas las condicionees
            var xpath=xpathInstance.getElementXPath(e.currentTarget);//obtiene el xpath del elemento a partir del objeto xpathInstance
            if (logger.verbose) console.log(missing_SR_text.threatName+" on "+xpath+" for "+missing_SR_text.waitingTime+"ms ");//muestra por consola la presencia del evento de usabiliadad
		    console.info(missing_SR_text.threatName+" on "+xpath+" for "+missing_SR_text.waitingTime+"ms ");
            logger.logEvent(missing_SR_text.threatName, {xpath:xpath, waitingTime:missing_SR_text.waitingTime});//detecta la ocurrencia del evento de usabiliad
        
        }
            missing_SR_text.lastMoveTime=e.timeStamp; //guarda el tiempo actual para  calcular el tiempo con el proximo movimiento
            missing_SR_text.lastElement=e.currentTarget;
    });  
         
    $("input[type='text'],input[type='radio'],input[type='checkbox']").on('focus', function(e){//Selector  y carga manejador de evento
        missing_SR_text.lastElement=e.currentTarget;//finaliza el evento de usabilidad al mover el mouse o hacer click, el usuario dejo de espera el tooltip en el elemento
        missing_SR_text.now=e.timeStamp;
    });
    
    $("input[type='text'],input[type='radio'],input[type='checkbox']").on('keyup',function(e) {
  
     if (e.keyCode!==9) {
         if (!e.shiftKey){
            missing_SR_text.lastElement=null;   
         }     
     }    
    });   
};


/************************************************************************************************************
    SearchResultWithoutElectronicText
************************************************************************************************************/
function SearchResultWithoutElectronicText(paramMinimumWaitingTime, paramMaximumWaitingTime, delayConfiguringHandlers){
    this.threatName="SearchResultWithoutElectronicText";
    this.code="D09";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.searchTerms=["search", "search_query","gsc-i-id1","Buscar"];
    this.searchTermsBotton=["gsc-search-button", "gsc-search-button-v2","gsc-search-button gsc-search-button-v2","search-icon-legacy","style-scope ytd-searchbox"];
    this.searchForm=["style-scope ytd-searchbox","search-form","gsc-search-box gsc-search-box-tools"];
    this.evento=false;
    this.delayConfiguringHandlers=delayConfiguringHandlers || 2000;    
    this.fromFocus=0;
    this.lastMoveTime=0; //último tiempo de movimientovar searchCompletedWithoutNotification = this;
    var searchResultWithoutElectronicText=this;
    
    this.initialize=function(){
        setTimeout(this.load,searchResultWithoutElectronicText.delayConfiguringHandlers);
    };
  
    this.load=function(){
        $('input, textarea').on('keydown', function(e){
            
            searchResultWithoutElectronicText.evento=false;
            console.info(searchResultWithoutElectronicText.searchTerms)
            console.info(e.keyCode)
            if (e.keyCode==13){
               
                searchResultWithoutElectronicText.Element=e.currentTarget;
                var include_name=searchResultWithoutElectronicText.searchTerms.includes(searchResultWithoutElectronicText.Element.name);
                var include_id=searchResultWithoutElectronicText.searchTerms.includes(searchResultWithoutElectronicText.Element.id);
                console.info(searchResultWithoutElectronicText.Element.getAttribute('aria-label'))
                
                var include_aria_label=searchResultWithoutElectronicText.searchTerms.includes(searchResultWithoutElectronicText.Element.getAttribute('aria-label'));
                console.info(include_aria_label)
                waitingTime=e.timeStamp-searchResultWithoutElectronicText.inputFocus;
                if(((include_name)&& (include_id))||(include_aria_label)){
                    var xpath=xpathInstance.getElementXPath(e.currentTarget);
                    logger.logEvent(searchResultWithoutElectronicText.threatName, {xpath:xpath,waitingTime:waitingTime});//detecta la ocurrencia del event              
                    searchResultWithoutElectronicText.evento=true;
                }        
            }
            else{     
                searchResultWithoutElectronicText.Element=e.currentTarget;
            }    
        });
       
      
        $(":button").on('click', function(e){//Agrego el click porque en firefox 63 no funciona con el keypress
            searchResultWithoutElectronicText.evento=false;
            var include_id=searchResultWithoutElectronicText.searchTermsBotton.includes(e.currentTarget.id);
            var include_class= searchResultWithoutElectronicText.searchTermsBotton.includes(e.currentTarget.className);
            waitingTime=e.timeStamp-searchResultWithoutElectronicText.buttonFocus;
            if( (include_id || include_class)){
                var xpath=xpathInstance.getElementXPath(e.currentTarget);
                logger.logEvent(searchResultWithoutElectronicText.threatName, {xpath:xpath,waitingTime:waitingTime});//detecta la ocurrencia del evento               
            searchResultWithoutElectronicText.evento=true;
            } 
        }); 
        
        $("form").on('submit', function(e){ 
            var include_id=searchResultWithoutElectronicText.searchForm.includes(e.currentTarget.id);
            var include_class= searchResultWithoutElectronicText.searchForm.includes(e.currentTarget.className);
            waitingTime=e.timeStamp-searchResultWithoutElectronicText.fromFocus;
            if(include_id && include_class && !searchResultWithoutElectronicText.evento){               
                var xpath=xpathInstance.getElementXPath(e.currentTarget); 
                logger.logEvent(searchResultWithoutElectronicText.threatName, {xpath:xpath,waitingTime:waitingTime});//detecta la ocurrencia del evento       
            } 
           
            searchResultWithoutElectronicText.evento=false;
        });
   
     $("form").on('focus', function(e){ 
         searchResultWithoutElectronicText.fromFocus=e.timeStamp;
     });
     $("button").on('focus', function(e){ 
         searchResultWithoutElectronicText.buttonFocus=e.timeStamp;
     });
     $('input, textarea').on('focus', function(e){ 
         searchResultWithoutElectronicText.inputFocus=e.timeStamp;
     });
    };
    this.initialize();
}


/************************************************************************************************************
10 - SynthesisInIdiomaDifferentThePage
************************************************************************************************************/
function Winding_tab_sequence(contenedor) {
    this.threatName = "Winding_tab_sequence";
    this.code = "E10";
    this.contenedor = contenedor || "form";
    console.info(">>TEST Cargando El Evento " + this.threatName + " - " + this.contenedor + ", Codigo: " + this.code);

    let eventQueue = [];
    var event = this;

    // Inicializar canvas
    const canvas = document.createElement('canvas');
    canvas.id = "focusCanvas";
    canvas.style.position = 'fixed'; // Posicionamiento fijo
    canvas.style.top = '0'; // Alineación en la parte superior
    canvas.style.left = '0'; // Alineación en la parte izquierda
    canvas.style.zIndex = '9999'; // Asegurar que esté en la parte superior
    canvas.style.pointerEvents = 'none'; // Evitar que el canvas interfiera con otros elementos
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Ajustar el tamaño del canvas para cubrir toda la pantalla
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas(); // Ajustar el tamaño inicialmente

    window.addEventListener('resize', resizeCanvas); // Ajustar el tamaño en caso de redimensionar la ventana

    // Función para calcular la media de un array
    function calculateMean(array) {
        let sum = array.reduce((acc, val) => acc + val, 0);
        return sum / array.length;
    }

    // Función para calcular la desviación estándar de un array
    function calculateStandardDeviation(array) {
        let mean = calculateMean(array);
        let variance = array.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / array.length;
        return Math.sqrt(variance);
    }

    

    this.initialize = function() {
        $("*").on('focus', function(e) {
            let isContenedor = e.currentTarget.closest(event.contenedor) !== null;
            if (isContenedor) {
                var top = $(e.currentTarget).offset().top;
                var left = $(e.currentTarget).offset().left;
                let xpath = xpathInstance.getElementXPath(e.currentTarget);
                let xpath_contenedor = xpathInstance.getElementXPath(e.currentTarget.closest(event.contenedor));
                if (eventQueue.length > 0) {
                    if (xpath_contenedor != eventQueue[eventQueue.length - 1].xpath_contenedor) {
                        eventQueue = [];
                    }
                }
                eventQueue.push({ 'x': left, 'y': top, 'xpath': xpath, 'xpath_contenedor': xpath_contenedor });
                drawOnCanvas();
                if (eventQueue.length >= 2) {
                    var lastEvent = eventQueue[eventQueue.length - 1];
                    var secondLastEvent = eventQueue[eventQueue.length - 2];
                    var lastTop = lastEvent.y;
                    var secondLastTop = secondLastEvent.y;
                    if (lastTop < secondLastTop) {
                        let eventQueueCopy = [...eventQueue];
                       // console.info(eventQueueCopy);
                        let yValues = eventQueueCopy.map(item => item.y);
                        let differences = [];
                        for (let i = 0; i < yValues.length - 1; i++) {
                            let difference = Math.abs(yValues[i + 1] - yValues[i]);
                            differences.push(difference);
                        }
                        let mean = calculateMean(differences);
                        let standardDeviation = calculateStandardDeviation(differences);
                       // console.log("Valores 'y':", yValues, differences, mean, standardDeviation);
                        if ((mean + standardDeviation) < Math.abs(lastTop - secondLastTop)) {
                            logger.logEvent(event.threatName, {
                                'contenedor': event.contenedor,
                                'origen': eventQueueCopy[eventQueueCopy.length - 2].xpath,
                                "destino": eventQueueCopy[eventQueueCopy.length - 1].xpath,
                                'eventQueue': eventQueueCopy,
                                'screenshot': "imageDatas"
                            });
                        }
                    }
                }
            } else {
                if (eventQueue.length > 0) {
                    eventQueue = [];
                }
            }
        });

        $("*").on('blur', function(e) {
            if (eventQueue.length === 0) {
                const isContenedor = e.currentTarget.closest(event.contenedor) !== null;
                if (isContenedor) {
                    var top = $(e.currentTarget).offset().top;
                    var left = $(e.currentTarget).offset().left;
                    let xpath = xpathInstance.getElementXPath(e.currentTarget);
                    let xpath_contenedor = xpathInstance.getElementXPath(e.currentTarget.closest(event.contenedor));
                    eventQueue.push({ 'x': left, 'y': top, 'xpath': xpath, 'xpath_contenedor': xpath_contenedor });
                    drawOnCanvas();
                } else {
                    eventQueue = [];
                }
            }
        });

        $("body").on('focusout', function(e) {
            const focusedElement = $(e.target);
            const isInsideBody = focusedElement.closest('body').length > 0;
            if (!isInsideBody) {
                console.log('El foco se ha movido fuera del body.');
            }
        });

        // Llamada a la función de verificación
        verifyScriptLoaded();
    };

    function drawOnCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let lastPoint = null;
        eventQueue.forEach(point => {
            const x = point.x;
            const y = point.y;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            if (lastPoint) {
                ctx.beginPath();
                ctx.moveTo(lastPoint.x, lastPoint.y);
                ctx.lineTo(x, y);
                ctx.strokeStyle = 'blue';
                ctx.stroke();
            }
            lastPoint = { x, y };
        });
    }

    this.initialize();
}
/*
function InappropriateTabSequence(){
    this.threatName="InappropriateTabSequence";
    this.code="E10";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.left=0;
    this.top=0;
    this.eventos=[];
    this.topPrevio=0;
    this.leftPrevio=0;
    this.evento;
    this.address="next";
    var event = this;
    
    this.AccuracyEvent=function(name,top,left,topPrevio,leftPrevio,currentTarget,address){
        this.name=name;
        this.top=top;
        this.left=left;
        this.currentTarget=currentTarget;
        this.address=address;
        this.topPrevio=topPrevio;
        this.leftPrevio=leftPrevio;
        this.addressReal;
        this.top_delta=$(currentTarget).height();
        this.left_delta=$(currentTarget).width();
      
        if(top<topPrevio && left<=leftPrevio){//3 cuadrante
            this.addressReal="previous";
                   
        };
        if(top>topPrevio && left<leftPrevio){//4 cuadrenta
            this.addressReal="next";                   
        };
        if(top<topPrevio && left>leftPrevio){//2 cuadrante
            this.addressReal="previous";
        };
        if(top>topPrevio && left>leftPrevio){//1 cuadrante
            this.addressReal="next";           
        };
        if(top==topPrevio && left>leftPrevio){//1 cuadrante
            this.addressReal="next";           
        };
        if(top==topPrevio && left<leftPrevio){//1 cuadrante
            this.addressReal="previous";           
        };        
        if(top<topPrevio && left==leftPrevio){//1 cuadrante
            this.addressReal="previous";           
        };
        if(top>topPrevio && left==leftPrevio){//1 cuadrante
            this.addressReal="next";           
        };
    };
    
 
    this.procesarLista=function(){
           var a=event.eventos[event.eventos.length-4];
           var b=event.eventos[event.eventos.length-3];
           var c=event.eventos[event.eventos.length-2];   
           var d=event.eventos[event.eventos.length-1];
         //  var casoA=(b.top>(a.top+a.top_delta) && b.top>(c.top+c.top_delta) && d.top>(b.top+b.top_delta));
        // console.clear();
          
          // for(i=0;i<event.eventos.length;i++){
          //      console.info((event.eventos[i]).currentTarget);
           // }
         // console.info(event.eventos);
        //console.info((b.top>(a.top+a.top_delta) && b.top>(c.top+c.top_delta) && d.top>(b.top+b.top_delta)));
      //  console.info(b.top>(a.top+a.top_delta));
     //   console.info( b.top>(c.top+c.top_delta)||(b.top==c.top));
     //   console.info(d.top<(b.top+b.top_delta)); 
        var   casoA=(b.top>(a.top+a.top_delta) &&  b.top>(c.top+c.top_delta)||(b.top==c.top) && d.top<(b.top+b.top_delta));   
        var casoB= ((a.top==b.top && b.top==c.top && c.top==d.top)&& (a.left<c.left && c.left<b.left && b.left<d.left));
           if (casoA||casoB){      
                var xpath=xpathInstance.getElementXPath(c.currentTarget);
                var xpathPrevious=xpathInstance.getElementXPath(b.currentTarget);
                var xpathNext=xpathInstance.getElementXPath(d.currentTarget);
                var xpathNewPrevious=xpathInstance.getElementXPath(a.currentTarget);
                var xpathNewNext=xpathInstance.getElementXPath(b.currentTarget);
           if (logger.verbose) console.log(event.threatName+" on "+xpath);//muestra por consola la presencia del evento
                logger.logEvent(event.threatName, {xpath:xpath,xpathPrevious:xpathPrevious, xpathNext:xpathNext, xpathNewPrevious:xpathNewPrevious, xpathNewNext:xpathNewNext});//detecta la ocurrencia del evento               
           };  
    };
     
    
    this.initialize=function(){ 
        $("input, select, button, a").on('keyup', function(e){           
            if (e.keyCode==9){
                event.address="next";
                if(e.shiftKey){
                    event.address="previous";    
                }
                event.evento.address= event.address;          
                event.eventos.push(event.evento);
                if (event.eventos.length>3){
                    event.procesarLista(); 
                }                 
           }; 
       
        });
             
        $("input, select, button, a").on('focus', function(e){
                var top=$(e.currentTarget).position().top;
                var left=$(e.currentTarget).position().left;    
                var evento="";
                var topPrevio=event.topPrevio;
                var leftPrevio=event.leftPrevio;
                event.evento=new event.AccuracyEvent(evento,top,left,topPrevio,leftPrevio,e.currentTarget, event.address);
                event.topPrevio=top;
                event.leftPrevio=left; 
         
        });

        $('input').on('click',function(e){ 
            event.eventos=[];   
        });     
    };   
    this.initialize();
};
*/

/************************************************************************************************************
Confused speech synthesis								
************************************************************************************************************/
function ConfusedSpeechSynthesis(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 10000; // Tiempo maximo  de  espera
    this.lastMoveTime=paramLastMoveTime || 0; //último tiempo de movimiento
    this.threatName="ConfusedSpeechSynthesis"; //Amenaza ojo debe ser para indicar la clase en Kobold?
    this.lastElement=null; //Ultimo elemento
    var event = this; //referencia a si mismo
    this.now=null;
    this.code="D09";
    this.text=null;
    this.radio=null;
    this.checkbox=null;
   
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    $("a, button, input[type='button'], input[type='submit']").on('focus', function(e){ //Selector  y carga manejador de evento
        event.now=e.timeStamp;
        event.lastElement=e.target;
    });

    $("a, button, input[type='button'], input[type='submit']").on('focusout', function(e){//Selector  y carga manejador de event
        event.lastMoveTime=e.timeStamp;
        event.waitingTime=event.lastMoveTime -  event.now;
        if((e.currentTarget).nodeName=="A"){
            event.minimumWaitingTime=event.A["MinimumWaitingTime"];
            event.maximumWaitingTime=event.A["MaximumWaitingTime"];
        }
        if(e.currentTarget.nodeName=="BUTTON"){
            event.minimumWaitingTime=event.button["MinimumWaitingTime"];
            event.maximumWaitingTime=event.button["MaximumWaitingTime"];      
        }
        if((e.currentTarget.nodeName=="INPUT")&&(e.currentTarget.attributes.type.textContent="submit")){        
            event.minimumWaitingTime=event.submit["MinimumWaitingTime"];
            event.maximumWaitingTime=event.submit["MaximumWaitingTime"];                
        }
        waitingTimeInRange = event.waitingTime>event.minimumWaitingTime && event.waitingTime < event.maximumWaitingTime;//si el timpo trancurrido esta dentro del rango de la heuristica	

        var browserLanguage=window.navigator.language||navigator.browserLanguage;
        var pageLanguage='';
        if($('html').attr('lang')){
            pageLanguage=$('html').attr('lang');
        };
        var elementLanguage='';
        if($(e.target).attr("lang")){
            elementLanguage=$(e.target).attr("lang");
        };           
        var titlePage='';
        if(document.title){
            titlePage=document.title;
        };
        var text='';//depende de que elemento es con input text     
        if (e.target.tagName=="A"){
            text=$(e.target).text();
        };
        if (e.target.tagName=='INPUT' && text==''){
            text=$(e.target).attr("value");
        };
        if (e.target.tagName=="BUTTON"&& text==''){
            text=$(e.target).attr("value");
        };
        lastElement=(!(event.lastElement==null));
        if( waitingTimeInRange && lastElement){//si se  cumplen todas las condiciones		       
            var xpath=xpathInstance.getElementXPath(e.target);//obtiene el xpath del elemento a partir del objeto xpathInstanc
        if (logger.verbose) console.log(event.threatName+" on "+xpath+" for "+event.waitingTime+"ms ");//muestra por consola la presencia del evento de usabiliadad
            logger.logEvent(event.threatName, {xpath:xpath, waitingTime:event.waitingTime, browserLanguage:browserLanguage,pageLanguage:pageLanguage,elementLanguage:elementLanguage,text:text,titlePage:titlePage});//detecta la ocurrencia del evento de usabiliad
        }
        event.lastElement=null;
    });
        
    $("a, button, input[type='button'], input[type='submit']").on('click', function(e){//Selector  y carga manejador de evento
        if (e.keyCode!==9) { 
            if (!e.shiftKey){
                event.lastElement=null;          
            }
        }
    });     
};

function Marcar() {
    this.time = 3000;
    var marca = this;

    this.initialize = function () {
        setTimeout(this.load, 2000);         
        crear('puerto',urlServer.port);
        crear('server',urlServer.hostname);
        crear('url',window.location);
        crear('token',$('meta[name="SelfRefactoringToken"]').attr("content"));  
    
    };
    
    function listoflink () {
        var listas=[];
        $('ul').each(function(index,ul) {      
            var list=ul.children;
            var listaislistOflink=true;
            for (var i = 0; i < list.length; i++) {  
                var item=list[i];
                var nodo=item.children;
                var listOflink=true;               
                for (var j = 0; j < nodo.length; j++) {
                    if (!(nodo[j].tagName=='A')) {
                        listOflink=false;
                        break;
                     }
                }
                if (!listOflink){
                    listaislistOflink=false;
                    break;
                }
            }
            if (listaislistOflink){ 
                listas.push(ul.id);
                }
            });
            crear('lista',listas);
    };

    this.load = function () {
        $("h1,h2,h3,h4,h5,h6,ul,ol,li,ul,table,a,:input,blockquote,cite,q,hr,frame,iframe,select,div,img").each(function (indice, elemento) {
        if (!$(elemento).attr("id")) {
            var xpath = xpathInstance.getElementXPath(elemento);
            var tupla = xpath;
            $(elemento).attr("id", tupla);
            }
        });
        listoflink();
        logger.loadAccesibilityRefactorings();
        console.info("Refactorings loaded")
        };
    
    function crear(campo,valor){
        var divcontenedor = document.createElement("div");
        var atributo= document.createAttribute("id");
        atributo.value=campo;
        divcontenedor.setAttributeNode(atributo);
        $('body').prepend(divcontenedor);
        var divurl = document.createElement("div");
        var url= document.createAttribute("id");
        url.value=valor;
        divurl.setAttributeNode(url);
        divcontenedor.appendChild(divurl)
    };
    this.initialize();
}

function FormTimer(){
	this._forms=document.forms;
	this.startTimeForForm = [];
	var formTimer = this;

	for(i=0;i<formTimer._forms.length;i++){
            $(formTimer._forms[i]).one("keypress",(function(){
            	var now = $.now();
            	var key = xpathInstance.getElementXPath(this);
            	formTimer.startTimeForForm[key]=now;
            }));
	}

	this.calculateTime=function(xpath){
            var time = 0;
            if (this.startTimeForForm && this.startTimeForForm[xpath])
		time = $.now()-this.startTimeForForm[xpath];
            return time;
	};
};
console.info("Accessibility Detector")
