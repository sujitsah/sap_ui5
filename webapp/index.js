sap.ui.define([
    // "sap/m/Text",
    "sap/ui/core/mvc/XMLView"

],function(XMLView){
    "use strict";

    XMLView.create({
        viewName: "sap.ui.demo.wt.ui5.view.App"
    }).then(function(oView){
        oView.placeAt("content");
    });
    // new Text({
    //     text: "hello ui5"
    // }).placeAt("content")
}); 