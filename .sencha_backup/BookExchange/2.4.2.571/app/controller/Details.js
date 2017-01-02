Ext.define('BookExchange.controller.Details',{
	extend:'Ext.app.Controller',
	config :{
		refs:{
			booksNavView :'booksContainer',
			myCartNavView : 'myCartContainer'
		},
		control:{
			'booksContainer books list' :{
				itemtap:function(list,index,target,record){
					var details = Ext.create('BookExchange.view.Details');
					details.setData(record.data);
					this.getBooksNavView().push(details);
					this.application.fireEvent('detailsShown',{
							data:record.data,
							button:details.getItems().items[0]
					});

				}
			},
			'myCartContainer myCart list' :{
				itemtap:function(list,index,target,record){
					var details = Ext.create('BookExchange.view.Details');
					details.setData(record.data);
					this.getMyCartNavView().push(details);
					this.application.fireEvent('detailsShown',{
							data:record.data,
							button:details.getItems().items[0]
					});

				}
			}
		}
	},

init:function(application){
	this.application = application;
}
});