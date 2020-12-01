
var scopeLengths;
var app = angular.module('flexiFoxApp', ['ngSanitize', 'ui.bootstrap', 'angular.filter'])

app.controller('mainController', function ($scope, $http) {
  $scope.tabConfig = [
    { id: 0, label: 'Home', icon: '' },
    { id: 1, label: 'Timesheets', icon: '' },
    { id: 2, label: 'Leave', icon: '' }
  ];

  $scope.sortTypeLinks = 'cat';
  $scope.sortTypeCont = 'cat';
  $scope.sortTypeKB = 'id';
  $scope.sortTypeQL = 'desc';
  $scope.sortTypePBI = 'desc';
  $scope.sortReverse = false;  // set the default sort order
  $scope.searchHome = 'q'
  $scope.searchLinks = '';
  $scope.searchCont = '';
  $scope.searchKB = '';
  $scope.kbID = 0; // set initial KB ID
  $scope.hexCode = '000000';

  $scope.open = function (param) {
    if (param == 0) {
      //do nothing
    } else {
      $scope.kbID = param;
      document.getElementById('boxModal').style = "display: block; z-index: 10;";
    }
  }

  $scope.close = function () {
    document.getElementById('boxModal').style = "display: none; z-index: 0;";
  }

  $scope.PBIList = [
    { desc: 'Custom Tab Link #1', url: '#' },
    { desc: 'Custom Tab Link #2', url: '#' },
    { desc: 'Custom Tab Link #3', url: '#' }
  ];

  $scope.dataTab0 = [];

  $scope.dataTab1 = [
    { id: 1, sw: 0, f: false, mo: 'Module A', is: 'Issue', so: 'Solution' },
    { id: 2, sw: 1, f: false, mo: 'Module A', is: 'Issue', so: 'Solution' },
    { id: 3, sw: 1, f: false, mo: 'Module B', is: 'Issue', so: 'Solution' },
    { id: 4, sw: 1, f: false, mo: 'Module B', is: 'Issue', so: 'Solution' },
    { id: 5, sw: 1, f: false, mo: 'Module C', is: 'Issue', so: 'Solution' },
    { id: 6, sw: 1, f: false, mo: 'Module C', is: 'Issue', so: 'Solution' },
  ];

  $scope.dataTab2 = [
    { id: 1, f: false, title: 'Document #1', link: '#' },
    { id: 2, f: false, title: 'Document #2', link: '#' },
    { id: 3, f: false, title: 'Document #3', link: '#' },
    { id: 4, f: false, title: 'Document #4', link: '#' },
    { id: 5, f: false, title: 'Document #5', link: '#' }
  ];

  //Function to pass KB item ID to the Modal
  $scope.kbItem = [""];
  $scope.selectedKBItem = function (item) {
    kbID = item - 1;
    $scope.kbItem = [""];
    $scope.kbItem = $scope.dataTab1[kbID];
  };

  $scope.tOverdue = function (date, years) {
    var result = new Date(date);
    var today = new Date();
    var days = 365 * years;
    var overdue;
    result.setDate(result.getDate() + days);
    if (result > today) {
      overdue = false;
    } else {
      overdue = true;
      console.log(date + " / " + result.getDate());
    }
    return overdue;
  }

  $scope.dashVer = function () {
    //var lastMod = new Date(document.lastModified);
    //var lmDate = lastMod.getDate() + "" + (lastMod.getMonth() + 1) + "" + lastMod.getFullYear();
    //var lmTime = lastMod.getHours() + "" + lastMod.getMinutes();
    //var ver = "3." + lmDate + "." + lmTime;
    ver = "0.1a";
    return ver;
  }

});