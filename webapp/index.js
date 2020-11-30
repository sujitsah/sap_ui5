sap.ui.define([
    // "sap/ui/core/mvc/XMLView"
    "sap/ui/core/ComponentContainer"

],function(ComponentContainer){
    "use strict";

    new ComponentContainer({
        name: "sap.ui.demo.ui5",
        settings: {
            id:"ui5"
        },
        async: true,

    }).placeAt("content");

    // xml view
    // XMLView.create({
    //     viewName: "sap.ui.demo.ui5.view.App"
    // }).then(function(oView){
    //     oView.placeAt("content");
    // });

    
    // normal view
    // new Text({
    //     text: "hello ui5"
    // }).placeAt("content")
}); 