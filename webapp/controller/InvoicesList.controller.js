// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoiceFormatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONMode} JSONModel
     * @param {typeof sap.ui.model.Filter} Filter    
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator   
     */

    function (Controller, JSONModel, InvoiceFormatter, Filter, FilterOperator) {
        "use strict";
        return Controller.extend("Invoices.invoices.controller.InvoicesList", {

            formatter: InvoiceFormatter,

            onInit: function () {
                var oViewModel = new JSONModel(
                    {
                        usd: "USD",
                        eur: "EUR"
                    }
                );
                this.getView().setModel(oViewModel, "currency");
            },
            onFilterInvoices: function (oEvent) {
                const aFilter = [];
                const sQuery = oEvent.getParameter("query");

                if (sQuery) {
                    aFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery ))            
                };

                const oList = this.getView().byId("invoiceList");
                const oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }            
        });
    });