Ext.define('BookExchange.view.BooksContainer',{
	extend:'Ext.NavigationView',
	xtype:'booksContainer',

	config:{
		title:'Books',
		iconCls:'search',
		items :[
			{
				xtype:'books'

			}
		]
	}
});