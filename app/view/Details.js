Ext.define('BookExchange.view.Details',{
	extend:'Ext.Panel',
	xtype:'details',
	config:{
		title:'Details',
		layout :'fit',
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls:'details',
		tpl:'<img src="{icon}"></img><h1>{name}</h1>,<h3>{vicinity}</h3>',
		items:{
			xtype:'button',
			text:'Add to My Cart',
			iconMask:true,
			iconCls:'star',
			ui:'confirm',
			docked:'top',
			action:'cartButton'
		}
	}
})