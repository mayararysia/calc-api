var express = require('express');
var app = express();

app.get('/soma', function(req, res){
	var result = parseInt(req.query.x)+parseInt(req.query.y);
	res.json('Soma: '+result);
});

app.get('/multiplica', function(req, res){
	var result = parseInt(req.query.x)*parseInt(req.query.y);
	res.json('Multiplicação: '+result);
});

app.get('/subtrai', function(req, res){
	var result = parseInt(req.query.x)-parseInt(req.query.y);
	res.json('Subtração: '+result);
});

app.get('/divide', function(req, res){
	var result = parseInt(req.query.x)/parseInt(req.query.y);
	res.json('Divisão: '+result);
});

app.get('/resto', function(req, res){
	var result= parseInt(req.query.x)%parseInt(req.query.y);
	res.json('Resto: '+result);
});

app.get('/porcentagem', function(req, res){
	var result = (parseInt(req.query.x)/100)*100;
	res.json('Resultado: '+result+' %');

	
});

app.listen(3000);
