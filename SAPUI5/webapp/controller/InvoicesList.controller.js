sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
],
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.ui.model.json.JSONModel} JSONModel
 * @param {typeof sap.ui.model.Filter} Filter
 * @param {typeof sap.ui.model.FilterOperator} FilterOperator
 */
    function (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {
        return Controller.extend("logaligroup.SAPUI5.controller.InvoicesList", {

            formatter: InvoicesFormatter,

            onInit: function () {
                var oViewModel = new JSONModel({
                    usd: "USD",
                    eur: "EUR"
                });
                this.getView().setModel(oViewModel, "currency"); // setModel() vincula un nuevo modelo a la vista que obtuvimos antes
            },
            onFilterInvoices: function (oEvent) {

                const aFilter = []; // Creamos un array para meter los elementos que coinciden con mi busqueda
                const sQuery = oEvent.getParameter("query"); // Obtenemos el valor que ingresamos en el campo de busqueda

                if(sQuery){
                    aFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery)); // Si la busqueda matchea con los nombres de producto existentes lo agregamos al aFilter
                };

                const oList = this.getView().byId("invoiceList"); // Obtiene el objeto de la lista
                const oBinding = oList.getBinding("items"); // Muestra los elementos vinculados a la busqueda
                oBinding.filter(aFilter); // Aplica el filtro a todos los elementos con la palagra que ingresamos
            }
        });
    });