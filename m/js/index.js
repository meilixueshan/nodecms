angular.module('NodeCMSApp', ['ngRoute']).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl:'views/home.html', controller: mainController}).
	when('/employees', {templateUrl:'views/employee-list.html', controller: employeeListController}).
	when('/phones/:phoneId', {templateUrl:'views/phone-detail.html', controller: PhoneDetailController}).
	otherwise({redirectTo: '/'});
}])
.filter('clsfilter', function() {
	return function(input, filterObj) {
		var execExpress = filterObj.express.toString();
        execExpress = execExpress.replace(new RegExp("\\{0\\}", "g"), input);
		if(eval(execExpress)) {
			return filterObj.success;
		}
		return filterObj.fail;  
    };
});

function mainController($scope) {
    $scope.menus = [
        {
			url:'#/employees',
			text:'Employees'
		},
		{
			url:'',
			text:'Month'
		},
		{
			url:'',
			text:'Day'
		}
    ];
}

function employeeListController($scope, $http, $filter) {
	$scope.branchsData = [
		{
			'id':'1',
			'name':'IT',
			'branchId': 0
		},
		{
			'id':'4',
			'name':'ZhangSan',
			'branchId': 1
		},
		{
			'id':'5',
			'name':'LiSi',
			'branchId': 1
		},
		{
			'id':'6',
			'name':'WangWu',
			'branchId': 1
		},
		{
			'id':'2',
			'name':'HR',
			'branchId': 0
		},
		{
			'id':'40',
			'name':'ZhangSan',
			'branchId': 1
		},
		{
			'id':'50',
			'name':'LiSi',
			'branchId': 1
		},
		{
			'id':'60',
			'name':'WangWu',
			'branchId': 1
		},
		{
			'id':'3',
			'name':'Product',
			'branchId': 0
		},
		{
			'id':'400',
			'name':'ZhangSan',
			'branchId': 1
		},
		{
			'id':'500',
			'name':'LiSi',
			'branchId': 1
		},
		{
			'id':'600',
			'name':'WangWu',
			'branchId': 1
		}
	];
	
	$http.get('/').success(function(data) {
		var employeeList= [];
		angular.forEach($scope.branchsData, function(branch) {
            employeeList.push(branch);
        });
		$scope.employees = employeeList;
	});
}
function PhoneDetailController($scope) {
}