var mqtt = require('mqtt');
//var client  = mqtt.connect('mqtt://192.168.0.8');
var client  = mqtt.connect('mqtt://165.227.26.150')

client.on('connect', function () {
	setInterval(function() {
		ts = new Date();
		humedadrelativa = Math.floor(Math.random()*(99-80+1)+80); 
		temperatura = Math.floor(Math.random()*(25-19+1)+19); 
		radiacion = Math.floor(Math.random()*(4-1+1)+1); 
		presion = Math.floor(Math.random()*(1025-800+1)+800); 
		direccionviento = Math.floor(Math.random()*(46-36+1)+36); 
		velocidadviento = Math.floor(Math.random()*(16-10+1)+10); 
		mensaje='{"timestamp":"'+ts.toString()+
		        '","humedadrelativa":'+humedadrelativa+
		        ',"temperatura":'+temperatura+
		        ',"radiacion":'+radiacion+
		        ',"presion":'+presion+
		        ',"direccionviento":'+direccionviento+
		        ',"velocidadviento":'+velocidadviento+
		        '}';

		client.publish('aplik/humedad/estacion', mensaje);
	}, 16000);

	setInterval(function() {
		ts = new Date();
		humedad = Math.floor(Math.random()*(20-15+1)+15); 
		mensaje='{"timestamp":"'+ts.toString()+
		        '","humedad":'+humedad+
		        '}';

		client.publish('aplik/humedad/rotopalauno', mensaje);
	}, 15000);
	setInterval(function() {
		ts = new Date();
		humedad = Math.floor(Math.random()*(20-15+1)+15); 
		mensaje='{"timestamp":"'+ts.toString()+
		        '","humedad":'+humedad+
		        '}';

		client.publish('aplik/humedad/rotopalados', mensaje);
	}, 14000);
	setInterval(function() {
		ts = new Date();
		humedad = Math.floor(Math.random()*(20-15+1)+15); 
		mensaje='{"timestamp":"'+ts.toString()+
		        '","humedad":'+humedad+
		        '}';

		client.publish('aplik/humedad/spreader', mensaje);
	}, 13000);
});