this["JST"] = this["JST"] || {};

this["JST"]["admin"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<li data-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + " by "
    + ((stack1 = alias1((depth0 != null ? depth0.artist : depth0), depth0)) != null ? stack1 : "")
    + " <a href='#' class='button edit'>Edit</a> <a href=\"#\" class='button delete'>Delete</a></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a href='#' id='add_new' class=\"button\">Add New</a><ul id='all_albums'>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.albums : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><form id='update_album' action=\"/albums\" method='put'><h1>Edit Album</h1><fieldset><input type=\"text\" name='id' style=\"display: none\"><dl><dt><label>Title</label></dt><dd><input type='text' name='title'></dd><dt><label>Artist</label></dt><dd><input type='text' name='artist'></dd><dt><label>Date</label></dt><dd><input type='date' name='date'></dd><dt><label>Cover</label></dt><dd><input type='url' name='cover'></dd><dt><label>Price</label></dt><dd><input type='text' name='price'></dd></dl></fieldset><fieldset class='actions'><input type='submit' value=\"Create\"></fieldset></form><form id='new_album' action=\"/albums\" method='post'><h1>New Album</h1><fieldset><dl><dt><label>Title</label></dt><dd><input type='text' name='title'></dd><dt><label>Artist</label></dt><dd><input type='text' name='artist'></dd><dt><label>Date</label></dt><dd><input type='date' name='date'></dd><dt><label>Cover</label></dt><dd><input type='url' name='cover'></dd><dt><label>Price</label></dt><dd><input type='text' name='price'></dd></dl></fieldset><fieldset class='actions'><input type='submit' value=\"Create\"></fieldset></form>";
},"useData":true});

this["JST"]["album"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<img src='"
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "'/><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><h3>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p><p>$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p><a class='button' href='#'>Add to cart</a>";
},"useData":true});

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<label for=\"cart_toggle\">"
    + alias3(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " items</label><input id=\"cart_toggle\" type=\"checkbox\"><div id=\"items\"><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><p>"
    + alias3((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><a data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">Remove</a>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " x "
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "<small>"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</small></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>0 items</p>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.quantity : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Albums</h1><ul></ul><footer><a href='/admin'>Admin</a></footer>";
},"useData":true});