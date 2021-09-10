sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */

    function (Controller) {
        "use strict";
        return Controller.extend("Invoices.invoices.controller.App", {

            onOpenDialogHeader: function () {
                // @ts-ignore
                this.getOwnerComponent().openHelloDialog();                
            }
            
    });
});