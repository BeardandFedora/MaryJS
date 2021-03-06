﻿(function (app) {

    app.factory("maryjs.product", function() {
        var product = function(data) {
            angular.extend(this, {
                _id: "",
                code: "",
                name: "",
                cost: 0,
                unitPrice: 0,
                discount: 0,
                quantityOnHand: 0,
                mnfCode: "",
                added: new Date(),
                printed: false
            });
            angular.extend(this, data);
        };
        return product;
    });

    app.factory("maryjs.productService", ["maryjs.product", function (product) {
        return {
            price: function (prod) {
                var p = (prod.discount > 0 ?
                    prod.unitPrice - (prod.unitPrice * prod.discount) :
                    prod.unitPrice
                );
                
                return p;                
            }
        };
    }]);
}(angular.module("maryjs.app")));