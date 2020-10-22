sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],function(Controller,MessageToast,JSONModel){
    "use strict"
    return Controller.extend("sap.ui.demo.ui5.controller.App",{

        onInit: function(){
            //set o data model ont he view
            var oData = {
                "rec":{
                    "name":"sujit"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
             onshow: function(){
                // alert("hellllllllllllll");
                MessageToast.show("hello");
        }
    });

});