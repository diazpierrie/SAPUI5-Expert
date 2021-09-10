sap.ui.define([
    'sap/ui/base/ManagedObject',
    'sap/ui/core/Fragment'
],
    /**
     * @param {typeof sap.ui.base.ManagedObject} ManagedObject
     * @param {typeof sap.ui.core.Fragment} Fragment
     */

    function (ManagedObject, Fragment) {
        "use strict";
        return ManagedObject.extend("Invoices.invoices.controller.HelloDialog", {
            constructor: function (oView) {
                // @ts-ignore
                this._oView = oView;
            },

            exit: function () {
                // @ts-ignore
                delete this._oView;
            },

            open: function () {
                // @ts-ignore
                const oView = this._oView;

                if (!oView.byId("helloDialog")) {

                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();
                        }
                    }

                    Fragment.load(
                        {
                            id: oView.getId(),
                            name: "Invoices.invoices.view.HelloDialog",
                            controller: oFragmentController
                        }
                    ).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    // @ts-ignore
                    oView.byId("helloDialog").open();
                }
            }
        });
    });