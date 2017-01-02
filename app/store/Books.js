Ext.define('BookExchange.store.Books',{
	extend: 'Ext.data.Store',
	config:{
	model:'BookExchange.model.Book',
	autoLoad:'true',
	/*data:[
		{
			name:'name1',
			icon:'icon1',
			vicinity:'vicinity1'
		},
		{
			name:'name2',
			icon:'icon2',
			vicinity:'vicinity2'
		},
		{
			name:'name2',
			icon:'icon2',
			vicinity:'vicinity2'
		}

	 ]*/

	 proxy:{
	 	type:'ajax',
	 	url:'https://maps.googleapis.com/maps/api/place/search/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&sensor=false&key=AIzaSyCFWZSKDslql5GZR0OJlVcgoQJP1UKgZ5U',
	 	reader:{
	 		type:'json',
	 		rootProperty:'results'
	 	}

	 }
	}
});