Ext.define('BookExchange.controller.MyCart',{
	extend:'Ext.app.Controller',
	config :{
		refs:{
			
		},
		control:{
			'button[action=cartButton]':{
				tap: function(button){
					var data = button.getParent().getData();
					var id= data.id;
					var persistData ={
						recordId:id,
						name:data.name,
						icon:data.icon,
						vicinity:data.vicinity
					}
					var myCartDS = Ext.getStore("MyCart");
					
					if(button.getText() == "Add to My Cart"){
						myCartDS.add(persistData);
						myCartDS.sync();
						button.setText("Remove from My Cart");
						button.setUi("action");
					}else{
						var index = myCartDS.find('recordId',id);
						myCartDS.removeAt(index);
						myCartDS.sync();
						button.setText("Add to My Cart");
						button.setUi("confirm");
					}
				}
			}
		}
	},

init:function(application){
	this.application = application;
	this.application.on({
		'detailsShown' :this.onDetailsShown,
		'scope' : this
	});
},
onDetailsShown:function(event){
	var data = event.data;
	var button = event.button; 
	console.log('onDetailsShown called'+data.name + ' button text ' + button.getText());
	var id =data.recordId;

	if(id=== undefined){
		id =data.id;
	}
	var myCartDS = Ext.getStore('MyCart');
	var index = myCartDS.find('recordId',id);

	if(index === -1){
		button.setText("Add to My Cart");
		button.setUi("confirm");
	}else{
		button.setText("Remove from My Cart");
		button.setUi("action");
	}
}

});