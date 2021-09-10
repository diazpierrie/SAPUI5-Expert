sap.ui.define([
    'sap/ui/core/UIComponent',
    'Invoices/invoices/model/Models',
    'sap/ui/model/resource/ResourceModel',
    './controller/HelloDialog'
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (UIComponent, Models, ResourceModel, HelloDialog) {
        "use strict";

        return UIComponent.extend("Invoices.invoices.component", {

            metadata: {
                manifest: "json"
                // "rootView": {
                //     "viewName" : "Invoices.invoices.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // 
            },

            init: function () {
                UIComponent.prototype.init.apply(this, arguments);

                this.setModel(Models.createRecipient());

                var i18nModel = new ResourceModel({ bundleName: "Invoices.invoices.i18n.i18n" });
                this.setModel(i18nModel, "i18n");

                // @ts-ignore
                this._helloDialog = new HelloDialog(this.getRootControl());
            },

            exit: function () {
                // @ts-ignore
                this._helloDialog.destroy();
                // @ts-ignore
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                // @ts-ignore
                this._helloDialog.open();
                
            }

        });
    });