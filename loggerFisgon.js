


function LoggerFisgon(serverHost,verbose){
    LoggerAccesibility.call(this, serverHost, verbose);
    this.nombre="LoggerFW";

}
LoggerAccesibility.prototype= Object.create(Logger.prototype)
delete LoggerAccesibility.prototype.logEvent;
LoggerFisgon.prototype.constructor




LoggerFisgon.prototype=Object.create(LoggerAccesibility.prototype);
LoggerFisgon.prototype.constructor=LoggerFisgon;
delete LoggerFisgon.prototype.logEvent;
delete LoggerFisgon.prototype.loadRefactorings;
//LoggerFisgon.prototype.logEvent= function() {
//    console.log('¡Hola! Mi nombre es ' + "this.nombre");
//  }