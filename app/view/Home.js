Ext.define('BookExchange.view.Home',{
	extend:'Ext.Panel',
	xtype:'home',

	/*config:{
		title:'Home',
		iconCls:'home',
		layout:'fit',
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls :'homepage',
		html:['<h1>Welcome to BookExchange</h1>',
		'<hr>','<p>This is your First Book Exchnage</p>'].join(""),

		items:[
		 {
			xtype:'titlebar',
			title:'Book Exchange',
			docked:'top'
		  },
		  {
            xtype: 'login',
        }
		]
	}
*/
	config: {
     
     title: 'Home',
     layout: {
            type: 'vbox',
        },
        defaults: {
            margin: '5 5 5 5'
        },
  
        items: [{
            xtype: 'panel',
            id: 'welcomePanel',
            html: 'Welcome',
            margin: '5 5 20 5'
        }]
    }

});
   
