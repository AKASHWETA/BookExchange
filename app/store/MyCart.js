Ext.define('BookExchange.store.MyCart',{
	extend: 'Ext.data.Store',
	config:{
	model:'BookExchange.model.Book',
	autoLoad:'true',
	
	 proxy:{
	 	type:'localstorage',
	 	id : 'myCart'

	 }
	}
});