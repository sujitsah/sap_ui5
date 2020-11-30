sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],function(UIComponent, JSONModel, ResourceModel){
    "use strict";

    return UIComponent.extend("sap.ui.demo.ui5.Component",{
        metadata: {
            rootView:{
                "viewName": "sap.ui.demo.ui5.view.App",
                "type":"XML",
                "async":true,
                "id":"app"
            }
        },
        init : function(){
            //call the init fucntion of the parent
            UIComponent.prototype.init.apply(this, arguments);
            //set data models
            var oData={
                rec:{
                    name:"ui5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
            //set i18n model

            var i18nModel = new ResourceModel({
                bundleName : "sap.ui.demo.ui5.i18n.i18n",
                supportedLocales:[""],
                fallbackLocales:""
            });
            this.setModel(i18nModel, "i18n");
        }      
    })
})