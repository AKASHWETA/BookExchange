Ext.define('BookExchange.view.MyCart',{
	extend:'Ext.Panel',
	xtype:'myCart',

	config:{
		title:'Cart',
		iconCls:'compose',
		layout:'fit',

		items:[
		  {
		  	xtype:'list',
		  	store:'MyCart',
		  	itemTpl:'<img src="{icon}"></img><h1>{name:ellipsis(25)}</h1>,<h3>{vicinity:ellipsis(25)}</h3>',
		  	itemCls:'book-entry'
		  }
		]
	}

});