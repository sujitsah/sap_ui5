sap.ui.define([
    "sap/ui/core/mvc/XMLView"

],function(XMLView){
    "use strict";

    // xml view
    XMLView.create({
        viewName: "sap.ui.demo.ui5.view.App"
    }).then(function(oView){
        oView.placeAt("content");
    });

    
    // normal view
    // new Text({
    //     text: "hello ui5"
    // }).placeAt("content")
}); 