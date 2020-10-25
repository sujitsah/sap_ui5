sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],function(Controller,MessageToast,JSONModel,ResourceModel){
    "use strict"
    return Controller.extend("sap.ui.demo.ui5.controller.App",{

        onInit: function(){
            //set o data model ont he view
            var oData={
                rec:{
                    name:"ui5"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            //set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName : "sap.ui.demo.ui5.i18n.i18n",
                supportedLocales:[""],
                fallbackLocales:""
            });
            this.getView().setModel(i18nModel, "i18n");
        },
             onshow: function(){
                // alert("hellllllllllllll");
                // MessageToast.show("hello");
                var oBundle= this.getView().getModel("i18n").getResourceBundle();
                var srec = this.getView().getModel().getProperty("/rec/name");
                 var sMsg = oBundle.getText("helloMsg", [srec]);
                MessageToast.show(sMsg);
        }
    });

});