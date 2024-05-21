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
this.valores["ElectronicTextforNonSignificantSpeechSynthesis"]=WaitingTime;      
this.valores["ElectronicTextforNonExistentSpeechSynthesis"] =WaitingTime; 
this.valores["ConfusedSpeechSynthesis"]=WaitingTime;
this.valores["ElectronicTextforNonSignificantSpeechSynthesis_for_radio_button"]=WaitingTime;
var HighFrequencyTab=new Array();   
    HighFrequencyTab["MinimumSteps"]=4;
    HighFrequencyTab["MaximumScrollingTime"]=22580;
    HighFrequencyTab["DwellingTime"]=4830;
this.valores["HighFrequencyOfUseOfTheTabKey"]=HighFrequencyTab;
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
            this.autoDeleteEntryField=Parametros(new AutoDeleteEntryField());
            this.electronicTextforNonSignificantSpeechSynthesis=Parametros(new ElectronicTextforNonSignificantSpeechSynthesis());
            this.electronicTextforNonExistentSpeechSynthesis=Parametros(new ElectronicTextforNonExistentSpeechSynthesis());     
            this.highFrequencyOfUseOfTheTabKey= Parametros(new HighFrequencyOfUseOfTheTabKey());
            this.navigationPath=Parametros(new NavigationPathAccessibility());  
            this.bulkAction=new BulkAction();
            this.formTimer=new FormTimer();//Funcion auxiliar
            this.unfilledForm=Parametros(new UnfilledFormAccessibility());     
            this.searchResultWithoutElectronicText=Parametros(new SearchResultWithoutElectronicText());
            this.confusedSpeechSynthesis=Parametros(new ConfusedSpeechSynthesis()); 
            this.inappropriateTabSequence= Parametros(new InappropriateTabSequence());
            this.fastScrollingWithKeyboard=Parametros(new FastScrollingWithKeyboard());
            this.unfilledForm2=new UnfilledForm();
            this.marca=new Marcar();
            if (logger.verbose) console.info("Loading Accessibility Events: Done");
            console.info(this.unfilledForm)
            
           //2024
            this.inaccessibleManners=new InaccessibleManners();
            console.info(this.inaccessibleManners)
    };

    this.loadAccesibilityRefactorings=function(){
        setTimeout(this.loadRefactorings(), 12000); 
        ;
    };
}



/************************************************************************************************************
	InaccessibleManners();
************************************************************************************************************/
function InaccessibleManners() {
    this.code = "E2024-01";
    this.threatName = "InaccessibleManners";
    this.mutaciones=[]
    var inaccessibleManners=this
    
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
                        if (!inaccessibleManners.mutaciones.includes(xpath)) {
                            // Agregar el XPath al array de mutaciones
                            inaccessibleManners.mutaciones.push(xpath);
                            if (logger.verbose) console.log(inaccessibleManners.threatName, " in ",$targetElement);
                       
                            logger.logEvent(inaccessibleManners.threatName, {xpath:xpath});
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
    AutoDeleteEntryField
************************************************************************************************************/
function AutoDeleteEntryField(paramOc_Elem){
    this.code="E01";
    this.threatName="AutoDeleteEntryField";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    var autoDeleteEntryField = this;
 
    $(":text").on('change',function(e) {
        autoDeleteEntryField.value=this.value;              
    });
 
    $(":text").on('blur',function(e) {
               
        if(!autoDeleteEntryField.value==""){ 
            if(!e.currentTarget.value|| 0 === e.currentTarget.value.length){   
                var xpath=xpathInstance.getElementXPath(e.currentTarget);
                autoDeleteEntryField.value=""; 
                if (logger.verbose) console.log(autoDeleteEntryField.threatName+" on "+xpath);
                logger.logEvent(autoDeleteEntryField.threatName, {xpath:xpath});          
            }
        }
    });
}
/************************************************************************************************************
    ElectronicTextforNonSignificantSpeechSynthesis
************************************************************************************************************/
function ElectronicTextforNonSignificantSpeechSynthesis(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){  
   
    this.electronicTextforNonSignificantSpeechSynthesis_for_input= Parametros(new ElectronicTextforNonSignificantSpeechSynthesis_for_input(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime));
    this.electronicTextforNonSignificantSpeechSynthesis_for_radio_button=Parametros(new ElectronicTextforNonSignificantSpeechSynthesis_for_radio_button(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime));
    this.electronicTextforNonSignificantSpeechSynthesis_for_chekbox=Parametros(new ElectronicTextforNonSignificantSpeechSynthesis_for_chekbox(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime));
}  

function ElectronicTextforNonSignificantSpeechSynthesis_for_input(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){    
    this.threatName="ElectronicTextforNonSignificantSpeechSynthesis";
    this.code="D02-for Input";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 9000; // Tiempo maximo  de  espera   
    this.lastElement=null; //Ultimo elemento
    this.now=null;
    var electronicTextforNonSignificantSpeechSynthesis=this;
    
    $("input[type='text']").on('focusout',function(e) {      
        electronicTextforNonSignificantSpeechSynthesis.minimumWaitingTime=electronicTextforNonSignificantSpeechSynthesis.text["MinimumWaitingTime"]
        electronicTextforNonSignificantSpeechSynthesis.maximumWaitingTime=electronicTextforNonSignificantSpeechSynthesis.text["MaximumWaitingTime"]
        electronicTextforNonSignificantSpeechSynthesis.waitingTime = e.timeStamp - electronicTextforNonSignificantSpeechSynthesis.now;
        waitingTimeInRange = electronicTextforNonSignificantSpeechSynthesis.waitingTime>electronicTextforNonSignificantSpeechSynthesis.minimumWaitingTime && electronicTextforNonSignificantSpeechSynthesis.waitingTime < electronicTextforNonSignificantSpeechSynthesis.maximumWaitingTime;
        nameOfTarget=e.currentTarget.id; //obtiene en nombre para buscar si hay un label          
        labelForDescription=($("label[for='"+nameOfTarget+"']").length>0); //busca un label para el input si existe por lo   menos 1 retrna true
        relatedElements = (electronicTextforNonSignificantSpeechSynthesis.lastElement !== null)    
        if(waitingTimeInRange && !labelForDescription && relatedElements){//si se  cumplen todas las condicionees
            var xpath=xpathInstance.getElementXPath(e.currentTarget);//obtiene el xpath del elemento a partir del objeto xpathInstance
            if (logger.verbose) console.log(electronicTextforNonSignificantSpeechSynthesis.threatName+" on "+xpath+" for "+electronicTextforNonSignificantSpeechSynthesis.waitingTime+"ms ");//muestra por consola la presencia del evento de usabiliadad	
                console.info(electronicTextforNonSignificantSpeechSynthesis.threatName, {xpath:xpath, waitingTime:electronicTextforNonSignificantSpeechSynthesis.waitingTime})
                logger.logEvent(electronicTextforNonSignificantSpeechSynthesis.threatName, {xpath:xpath, waitingTime:electronicTextforNonSignificantSpeechSynthesis.waitingTime});//detecta la ocurrencia del evento de usabiliad
            }     
    });  
         
    $("input[type='text']").on('focus', function(e){//Selector  y carga manejador de event
        electronicTextforNonSignificantSpeechSynthesis.lastElement=e.currentTarget;
        electronicTextforNonSignificantSpeechSynthesis.now=e.timeStamp;
    });
    
    $("input[type='text']").on('keyup',function(e) {
        if (e.keyCode!==9) {
           if (!e.shiftKey){
              electronicTextforNonSignificantSpeechSynthesis.lastElement=null;  
            }     
        };
    });
};


function ElectronicTextforNonSignificantSpeechSynthesis_for_radio_button(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){    
    this.threatName="ElectronicTextforNonSignificantSpeechSynthesis";
    this.code="D02-for Radio Button";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 9000; // Tiempo maximo  de  espera
    this.lastElement=null; //Ultimo elemento
    this.now=null;
    this.list_focus=[];
    var electronicTextforNonSignificantSpeechSynthesis=this;
    
    $("input[type='radio']").on('focusout',function(e) {
       waitingTime = e.timeStamp - electronicTextforNonSignificantSpeechSynthesis.now;  
       cant=electronicTextforNonSignificantSpeechSynthesis.list_focus.length;
       var evento=[];
       evento['element']=e.currentTarget;
       evento['waitingTime']=waitingTime;
       existe=false;
        for (var i = 0; i<cant; i++) {
            if (e.currentTarget==(electronicTextforNonSignificantSpeechSynthesis.list_focus[i])['element']){
                existe=true;
            };
        }
        if (!existe){
            electronicTextforNonSignificantSpeechSynthesis.list_focus[cant]=evento;
        }      
     });  
         
    $("input[type='radio']").on('focus', function(e){//Selector  y carga manejador de event
        electronicTextforNonSignificantSpeechSynthesis.lastElement=e.currentTarget;
        electronicTextforNonSignificantSpeechSynthesis.now=e.timeStamp;
    });
    	
    $("input[type='submit']").on('keypress', function(e){
        var form=e.currentTarget.form;
        electronicTextforNonSignificantSpeechSynthesis.minimumWaitingTime=electronicTextforNonSignificantSpeechSynthesis.radio["MinimumWaitingTime"];
        electronicTextforNonSignificantSpeechSynthesis.maximumWaitingTime=electronicTextforNonSignificantSpeechSynthesis.radio["MaximumWaitingTime"];
        var cant=electronicTextforNonSignificantSpeechSynthesis.list_focus.length;
        var name=[];
        for (var i = 0; i < cant; i ++){
            var evento=electronicTextforNonSignificantSpeechSynthesis.list_focus[i];
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
                    for (var k = 0; k < electronicTextforNonSignificantSpeechSynthesis.list_focus.length; k ++){           
                        if(elementos[j]==(electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['element']){                     
                            focado=true;
                            if($("label[for='"+elementos[j].id+"']").length>0){
                                label=true;    
                            }                 
                            if((electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['waitingTime']>electronicTextforNonSignificantSpeechSynthesis.minimumWaitingTime && (electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['waitingTime'] < electronicTextforNonSignificantSpeechSynthesis.maximumWaitingTime){
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
                        while(elementos[t]!=(electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['element']){
                            k+=1;
                        }        
                        elemento=((electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['element']);        
                        if(!(($("label[for='"+elemento.id+"']").length)>0)){
                            var xpath=xpathInstance.getElementXPath((electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['element']);
                            logger.logEvent(electronicTextforNonSignificantSpeechSynthesis.threatName, {xpath:xpath, waitingTime:(electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['waitingTime']});
                        }                    
                    }   
                }      
            }                   
        }                   
    });
 
};



function ElectronicTextforNonSignificantSpeechSynthesis_for_chekbox(paramMinimumWaitingTime, paramMaximumWaitingTime, paramLastMoveTime){    
    this.threatName="ElectronicTextforNonSignificantSpeechSynthesis";
    this.code="D02-For Chekbox";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 9000; // Tiempo maximo  de  espera
    this.lastElement=null; //Ultimo elemento
    this.now=null;
    this.list_focus=[];
    var electronicTextforNonSignificantSpeechSynthesis=this;
    $("input[type='checkbox']").on('focusout',function(e) {
       waitingTime = e.timeStamp - electronicTextforNonSignificantSpeechSynthesis.now;  
       cant=electronicTextforNonSignificantSpeechSynthesis.list_focus.length;
       var evento=[];
       evento['element']=e.currentTarget;
       evento['waitingTime']=waitingTime;
       existe=false;
        for (var i = 0; i<cant; i++) {
            if (e.currentTarget==(electronicTextforNonSignificantSpeechSynthesis.list_focus[i])['element']){
                existe=true;      
            };
        }
        if (!existe){
            electronicTextforNonSignificantSpeechSynthesis.list_focus[cant]=evento;
        }
     });  
         
    $("input[type='checkbox']").on('focus', function(e){//Selector  y carga manejador de event
        electronicTextforNonSignificantSpeechSynthesis.lastElement=e.currentTarget;
        electronicTextforNonSignificantSpeechSynthesis.now=e.timeStamp; 
    });
    
    $("input[type='submit']").on('keypress', function(e){   
        form=e.currentTarget.form;
        electronicTextforNonSignificantSpeechSynthesis.minimumWaitingTime=electronicTextforNonSignificantSpeechSynthesis.checkbox["MinimumWaitingTime"];
        electronicTextforNonSignificantSpeechSynthesis.maximumWaitingTime=electronicTextforNonSignificantSpeechSynthesis.checkbox["MaximumWaitingTime"];
        var elementos=$('input:checkbox[required]');
        for (var i = 0; i < elementos.length; i ++){
            if (elementos[i].form==form){
            check= (elementos[i])['checked'];  
            var focado=false
            var label=false;
            var waitingTimeInRange=false;
            for (var k = 0; k < electronicTextforNonSignificantSpeechSynthesis.list_focus.length; k ++){
                if(elementos[i]==(electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['element']){             
                    focado=true;    
                    if($("label[for='"+elementos[i].id+"']").length>0){
                        label=true;    
                            }        
                    if((electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['waitingTime']>electronicTextforNonSignificantSpeechSynthesis.minimumWaitingTime && (electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['waitingTime'] < electronicTextforNonSignificantSpeechSynthesis.maximumWaitingTime){
                        waitingTimeInRange=true;
                        }
                if (focado && !label && waitingTimeInRange && !check){
                    var xpath=xpathInstance.getElementXPath(elementos[i]);
                    logger.logEvent(electronicTextforNonSignificantSpeechSynthesis.threatName, {xpath:xpath, waitingTime:(electronicTextforNonSignificantSpeechSynthesis.list_focus[k])['waitingTime']});
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
    HighFrequencyOfUseOfTheTabKey
************************************************************************************************************/
function HighFrequencyOfUseOfTheTabKey(minSteps, maxScrollingTime, paramDwellingTime, paramScrollingStartingTime){
    this.minimumSteps=minSteps || 3;
    this.maximumScrollingTime=maxScrollingTime || 4000;
    this.dwellingTime=paramDwellingTime || 3000;
    this.scrollingStartingTime=paramScrollingStartingTime || 1500;
    this.timer;
    this.threatName="HighFrequencyOfUseOfTheTabKey",
    this.code="D04";
    if (logger.verbose) console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.elementInicial= false;
    this.elementFinal= "";
    this.startingTop= 0;
    this.scrollingInitiated= false;
    this.steps=0;
    var highFrequencyOfUseOfTheTabKey = this;
    $("a, input, img").on('keydown', function(e){ 
        if (!highFrequencyOfUseOfTheTabKey.elementInicial){
             highFrequencyOfUseOfTheTabKey.elementInicial=e.currentTarget;   
        }});
    
    $("a, input, img").on('keyup', function(e){     //abria que sumar  otors elemntos como el botton        
        if(e.keyCode==9){
            if (!highFrequencyOfUseOfTheTabKey.scrollingInitiated) {//Desplazamiento iniciado"
		highFrequencyOfUseOfTheTabKey.scrollingInitiated=true;
                if (highFrequencyOfUseOfTheTabKey.MinimumSteps && highFrequencyOfUseOfTheTabKey.MaximumScrollingTime && highFrequencyOfUseOfTheTabKey.DwellingTime){
                    highFrequencyOfUseOfTheTabKey.minimumSteps=highFrequencyOfUseOfTheTabKey.MinimumSteps;
                    highFrequencyOfUseOfTheTabKey.maximumScrollingTime= highFrequencyOfUseOfTheTabKey.MaximumScrollingTime;
                    highFrequencyOfUseOfTheTabKey.dwellingTime=highFrequencyOfUseOfTheTabKey.DwellingTime
                }         
                highFrequencyOfUseOfTheTabKey.scrollingStartingTime=new Date().getTime();
		highFrequencyOfUseOfTheTabKey.startingTop=$(window).scrollTop();
                if(!e.shiftKey){
                    highFrequencyOfUseOfTheTabKey.steps++;
                }
                else{
                    highFrequencyOfUseOfTheTabKey.steps--;
                }
            }
            else{
                if(!e.shiftKey){
                    highFrequencyOfUseOfTheTabKey.steps++;
                    }
                else{
                        highFrequencyOfUseOfTheTabKey.steps--;
                }     
                }          
                highFrequencyOfUseOfTheTabKey.timeStep=new Date().getTime();
		clearTimeout(highFrequencyOfUseOfTheTabKey.timer);          
                highFrequencyOfUseOfTheTabKey.elementFinal= e.currentTarget;
		highFrequencyOfUseOfTheTabKey.timer=setTimeout('logger.highFrequencyOfUseOfTheTabKey.flush(logger)', highFrequencyOfUseOfTheTabKey.dwellingTime);            
            }          
    });

    this.flush=function(logger){
        var currentTop=$(window).scrollTop();
        var xpath_final= xpathInstance.getElementXPath(highFrequencyOfUseOfTheTabKey.elementFinal);
        var xpath_inicial=xpathInstance.getElementXPath(highFrequencyOfUseOfTheTabKey.elementInicial)
        var xpath=xpathInstance.getElementXPath(highFrequencyOfUseOfTheTabKey.elementFinal);
        if (!highFrequencyOfUseOfTheTabKey.scrollingEndingTime){
            highFrequencyOfUseOfTheTabKey.scrollingEndingTime=(new Date().getTime())-highFrequencyOfUseOfTheTabKey.dwellingTime;
        }
        scrollingEndingTime=highFrequencyOfUseOfTheTabKey.scrollingEndingTime
        var scrollingTime=scrollingEndingTime-highFrequencyOfUseOfTheTabKey.scrollingStartingTime;                     
        if (Math.abs(highFrequencyOfUseOfTheTabKey.steps)>highFrequencyOfUseOfTheTabKey.minimumSteps && scrollingTime < highFrequencyOfUseOfTheTabKey.maximumScrollingTime){
            if (logger.verbose) console.info((highFrequencyOfUseOfTheTabKey.threatName,{xpath:xpath, timestamp:scrollingEndingTime, time:scrollingTime, initialTop:highFrequencyOfUseOfTheTabKey.startingTop, finalTop:currentTop, steps:Math.abs(highFrequencyOfUseOfTheTabKey.steps), xpath_final:xpath_final, xpath_inicial:xpath_inicial}));       
            logger.logEvent(highFrequencyOfUseOfTheTabKey.threatName,{xpath:xpath,timestamp:scrollingEndingTime, time:scrollingTime, initialTop:highFrequencyOfUseOfTheTabKey.startingTop, finalTop:currentTop, steps:Math.abs(highFrequencyOfUseOfTheTabKey.steps), xpath_final:xpath_final, xpath_inicial:xpath_inicial});
        }
        highFrequencyOfUseOfTheTabKey.scrollingInitiated=false;
        highFrequencyOfUseOfTheTabKey.steps=0;
        highFrequencyOfUseOfTheTabKey.elementInicial=false;
        highFrequencyOfUseOfTheTabKey.scrollingEndingTime=false;
    };
    
    $("input").on('keyup',function(e) {
        if (e.keyCode!==9) {
           if (!e.shiftKey){
               highFrequencyOfUseOfTheTabKey.scrollingEndingTime=(new Date().getTime())-((new Date().getTime())-highFrequencyOfUseOfTheTabKey.timeStep);
               highFrequencyOfUseOfTheTabKey.flush(logger);
            highFrequencyOfUseOfTheTabKey.scrollingInitiated=false;
            highFrequencyOfUseOfTheTabKey.steps=0;
            }     
        };
    });
}

/************************************************************************************************************
    ElectronicTextforNonExistentSpeechSynthesis
 ************************************************************************************************************/
function ElectronicTextforNonExistentSpeechSynthesis(paramMinimumWaitingTime, paramMaximumWaitingTime,paramLastMoveTime ){
    this.code="D03"
    this.threatName="ElectronicTextforNonExistentSpeechSynthesis"; //Amenaza ojo debe ser para indicar la clase en Kobold?
    if (logger.verbose)  console.info(">>Cargando El Evento "+this.threatName + ", Codigo: " + this.code);
    this.minimumWaitingTime=paramMinimumWaitingTime || 1500; //Tiempo minimo de espera
    this.maximumWaitingTime=paramMaximumWaitingTime || 5000; // Tiempo maximo  de  espera
    this.lastMoveTime=paramLastMoveTime || 0; //último tiempo de movimiento
    this.lastElement=null; //Ultimo elemento	
    this.now=null;
    this.text=null;
    this.radio=null;
    this.checkbox=null;
    var electronicTextforNonExistentSpeechSynthesis=this; 
    
    $("input[type='text'],input[type='radio'],input[type='checkbox']").on('focusout',function(e) {
        electronicTextforNonExistentSpeechSynthesis.waitingTime = e.timeStamp - electronicTextforNonExistentSpeechSynthesis.now;
        placeholder=false; 
        switch(e.currentTarget.type) {
            case "text":
                  if (e.currentTarget.placeholder.length>0){
                      placeholder=true;
                    }     
                 electronicTextforNonExistentSpeechSynthesis.minimumWaitingTime=electronicTextforNonExistentSpeechSynthesis.text["MinimumWaitingTime"];
                 electronicTextforNonExistentSpeechSynthesis.maximumWaitingTime=electronicTextforNonExistentSpeechSynthesis.text["MaximumWaitingTime"];
                break;
            case "radio": 
                electronicTextforNonExistentSpeechSynthesis.minimumWaitingTime=electronicTextforNonExistentSpeechSynthesis.radio["MinimumWaitingTime"];
                electronicTextforNonExistentSpeechSynthesis.maximumWaitingTime=electronicTextforNonExistentSpeechSynthesis.radio["MaximumWaitingTime"];
                break;
            
            case "checkbox":
               
                electronicTextforNonExistentSpeechSynthesis.minimumWaitingTime=electronicTextforNonExistentSpeechSynthesis.checkbox["MinimumWaitingTime"];
                electronicTextforNonExistentSpeechSynthesis.maximumWaitingTime=electronicTextforNonExistentSpeechSynthesis.checkbox["MaximumWaitingTime"];
                break;   
          } 
          
          
        waitingTimeInRange = electronicTextforNonExistentSpeechSynthesis.waitingTime>electronicTextforNonExistentSpeechSynthesis.minimumWaitingTime && electronicTextforNonExistentSpeechSynthesis.waitingTime < electronicTextforNonExistentSpeechSynthesis.maximumWaitingTime;
        arialabel=true;
        if ((e.currentTarget.attributes["aria-label"])==null){
            arialabel=false;
        }
        nameOfTarget=e.currentTarget.id; //obtiene en nombre para buscar si hay un label               
        labelForDescription=$("label[for='"+nameOfTarget+"']").length>0; //busca un label para el input si existe por lo   menos 1 retrna true
        relatedElements = ( electronicTextforNonExistentSpeechSynthesis.lastElement !== null);
       
        if(waitingTimeInRange && relatedElements && !labelForDescription && !placeholder && !arialabel){//si se  cumplen todas las condicionees
            var xpath=xpathInstance.getElementXPath(e.currentTarget);//obtiene el xpath del elemento a partir del objeto xpathInstance
            if (logger.verbose) console.log(electronicTextforNonExistentSpeechSynthesis.threatName+" on "+xpath+" for "+electronicTextforNonExistentSpeechSynthesis.waitingTime+"ms ");//muestra por consola la presencia del evento de usabiliadad
		console.info(electronicTextforNonExistentSpeechSynthesis.threatName+" on "+xpath+" for "+electronicTextforNonExistentSpeechSynthesis.waitingTime+"ms ");
            logger.logEvent(electronicTextforNonExistentSpeechSynthesis.threatName, {xpath:xpath, waitingTime:electronicTextforNonExistentSpeechSynthesis.waitingTime});//detecta la ocurrencia del evento de usabiliad
        
        }
            electronicTextforNonExistentSpeechSynthesis.lastMoveTime=e.timeStamp; //guarda el tiempo actual para  calcular el tiempo con el proximo movimiento
            electronicTextforNonExistentSpeechSynthesis.lastElement=e.currentTarget;
    });  
         
    $("input[type='text'],input[type='radio'],input[type='checkbox']").on('focus', function(e){//Selector  y carga manejador de evento
	electronicTextforNonExistentSpeechSynthesis.lastElement=e.currentTarget;//finaliza el evento de usabilidad al mover el mouse o hacer click, el usuario dejo de espera el tooltip en el elemento
        electronicTextforNonExistentSpeechSynthesis.now=e.timeStamp;
    });
    
    $("input[type='text'],input[type='radio'],input[type='checkbox']").on('keyup',function(e) {
  
     if (e.keyCode!==9) {
         if (!e.shiftKey){
            electronicTextforNonExistentSpeechSynthesis.lastElement=null;   
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
    this.searchTerms=["search", "search_query","gsc-i-id1"];
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
        $('input').on('keyup', function(e){
            searchResultWithoutElectronicText.evento=false;
            if (e.keyCode==13){
                searchResultWithoutElectronicText.Element=e.currentTarget;
                var include_name=searchResultWithoutElectronicText.searchTerms.includes(searchResultWithoutElectronicText.Element.name);
                var include_id=searchResultWithoutElectronicText.searchTerms.includes(searchResultWithoutElectronicText.Element.id);
                waitingTime=e.timeStamp-searchResultWithoutElectronicText.inputFocus;
                if((include_name)&& (include_id)){
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
     $("input").on('focus', function(e){ 
         searchResultWithoutElectronicText.inputFocus=e.timeStamp;
     });
    };
    this.initialize();
}


/************************************************************************************************************
10 - SynthesisInIdiomaDifferentThePage
************************************************************************************************************/

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
