Ext.define('BookExchange.view.MyCartContainer',{
	extend:'Ext.NavigationView',
	xtype:'myCartContainer',

	config:{
		title:'My Cart',
		iconCls:'cart',
		items :[
			{
				xtype:'myCart'

			}
		]
	}
});