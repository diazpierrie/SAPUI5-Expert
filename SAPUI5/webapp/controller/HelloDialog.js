sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.base.ManagedObject} ManagedObject
     * @param {typeof sap.ui.core.Fragment} Fragment
     */
    function (ManagedObject, Fragment) {
        "use strict";

        return ManagedObject.extend("logaligroup.SAPUI5.controller.HelloDialog", {

            constructor: function (oView) {
                this._oView = oView; // con el this._ creamos una nueva instancia del objeto
            },

            exit: function () {
                delete this._oView; // borramos la instancia que creamos anteriormente
            },

            open: function () {
                //this.getView() obtiene la instancia de la vista que necesitamos para cargarla como dependencia en el fragmento
                const oView = this._oView;
                // Create dialog lazily
                if (!oView.byId("helloDialog")) { // Cuando NO esta instanciado

                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();
                        }
                    };
                    // Load async XML Fragment
                    Fragment.load({ //Para cargar el fragmento
                        id: oView.getId(), //Obtenemos el Id
                        name: "logaligroup.SAPUI5.view.HelloDialog",
                        controller: oFragmentController // Le indicamos al dialogo que tendra la logica en el controlador oFragmentController que creamos antes
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog); // Agregamos las dependencias del dialogo
                        oDialog.open();
                    });
                } else {
                    oView.byId("helloDialog").open();
                }
            }
        });
    });