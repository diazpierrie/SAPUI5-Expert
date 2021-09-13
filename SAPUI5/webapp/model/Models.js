sap.ui.define([
    "sap/ui/model/json/JSONModel"
],
    /**
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict"; // Nos advierte de posibles "errores silenciosos"
    
            return{

                createRecipient: function () {
                    var oData = {
                        recipient: {
                            name: "Bienvenido a Artech!" // Objeto anidado
                        }   
                    };
                    return new JSONModel(oData);
                
                }
            }
    });