var app=angular.module("app",[]);
app.controller("profileCtrl",function($scope){
	var profile={
				about:{
				
				},
				companies:[{name:"SunGard (Now part of FIS)",startYear:"Nov 2014",endYear:"Present",website:"",role:"Senior Engineer Product Development"},
						  {name:"Infosys Limited",startYear:"Aug 2011",endYear:"Nov 2014",website:"",role:"Senior Systems Engineer"}
				],
				skillsets:[{name:"Angular",level:"70%"},
						   {name:"Javascript",level:"80%"},
						   {name:"Jquery",level:"80%"},
						   {name:"AngularJS",level:"80%"},
						   {name:"Typescript",level:"70%"},
						   {name:"SASS",level:"70%"},
						   {name:"HTML5",level:"80%"},
						   {name:"CSS3",level:"70%"},
						   {name:"NodeJS",level:"70%"},
						   {name:"Jenkins",level:"80%"}
				],
				education:[
							{school:"University College of Engineering, Punjabi University, Patiala",passYear:"2011",website:"",stream:"B.E. in Electronics and Communication Engineering"},
				]
	}
	$scope.resume=profile;

});