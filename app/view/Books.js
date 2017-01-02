Ext.define('BookExchange.view.Books',{
	extend:'Ext.Panel',
	xtype:'books',

	config:{
		title:'Books',
		layout:'fit',

		items:[
		  {
		  	xtype:'list',
		  	store:'Books',
		  	itemTpl:'<img src="{icon}"></img><h1>{name:ellipsis(25)}</h1>,<h3>{vicinity:ellipsis(25)}</h3>',
		  	itemCls:'book-entry'
		  }
		]
	}

});