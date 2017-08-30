this["JST"] = this["JST"] || {};

this["JST"]["cart_item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<figure><img src=\"../"
    + alias4(((helper = (helper = helpers.imgUrl || (depth0 != null ? depth0.imgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"cart-item\"></figure><p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " x $"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p>";
},"useData":true});

this["JST"]["cart"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul></ul><section><h3>Your<br>shopping cart</h3><p class=\"total\">$"
    + container.escapeExpression((helpers.formatPrice || (depth0 && depth0.formatPrice) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p> <footer><a class=\"left empty_cart\" href=\"#\">Empty cart</a><a class=\"right checkout\" href=\"/checkout\">Checkout</a></footer></section>";
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<tr data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><td><img src=\"../"
    + alias4(((helper = (helper = helpers.imgUrl || (depth0 != null ? depth0.imgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"cart-item\"></td><td>"
    + alias4(alias5((depth0 != null ? depth0.name : depth0), depth0))
    + "</td><td><span class=\"quantity_modifier\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span><p>"
    + alias4(alias5((depth0 != null ? depth0.quantity : depth0), depth0))
    + "</p><span class=\"quantity_modifier\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span></td><td>$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</td></tr>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"img_top\"></div><section><h1>Order Details</h1><table><thead><tr><th>Item</th><th></th><th>Quantity</th><th>Price</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table><p>Total: <span class=\"total\">$"
    + container.escapeExpression((helpers.formatPrice || (depth0 && depth0.formatPrice) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</span></p><footer><a href=\"/\">Cancel order</a><form action=\"/\" method=\"post\"><input type=\"submit\" value=\"ORDER NOW!\"></form></footer></section><div class=\"img_bottom\"></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<header><a class=\"logo\" href=\"/\"><img src=\"images/logo.png\" alt=\"logo\"></a><div class=\"cart\"><a href=\"/\"><span class=\"left\">Shopping Cart</span><span class=\"right\">"
    + ((stack1 = (helpers.formatItemsQuantity || (depth0 && depth0.formatItemsQuantity) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quantity : depth0),{"name":"formatItemsQuantity","hash":{},"data":data})) != null ? stack1 : "")
    + "</span></a></div></header><main><div id='cart'></div><div id='content'></div></main>";
},"useData":true});

this["JST"]["item_details"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div><div class=\"nav prev\"><img src=\"images/nav-prev.png\" alt=\"prev\"></div><figure><img src=\""
    + alias4(((helper = (helper = helpers.imgUrl || (depth0 != null ? depth0.imgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"selected-item\"></figure><article><a class=\"close\" href=\"#menu\">+</a><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><footer><h2>$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</h2><a class=\"add_cart\" href=\"#\">Add to cart</a></footer></article><aside><h3>Nutritional Information</h3><table><tbody><tr><td>Protein</td><td>2.9156</td></tr><tr><td>Fat (total)</td><td>2.4396</td></tr><tr><td>Carbohydrate</td><td>3.8071</td></tr><tr><td>Energy (kj)</td><td>17.5775</td></tr><tr><td>Energy (kcal)</td><td>4.2011</td></tr><tr><td>Sugar</td><td>0.3738</td></tr></tbody></table></aside><div class=\"nav next\"><img src=\"images/nav-next.png\" alt=\"next\"></div></div>";
},"useData":true});

this["JST"]["menu_item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article><header><figure><img src=\""
    + alias4(((helper = (helper = helpers.imgUrl || (depth0 != null ? depth0.imgUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\"menu-item\"><h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2></figure></header><p class=\"price\">$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p><footer><a class=\"add_cart\" href=\"#\">Add to cart</a></footer></article>";
},"useData":true});