/*global angular*/
'use strict';


angular.module('app', []);

angular
	.module('app')
	.config(function () {});

angular
	.module('app')
	.controller('hash', ['$scope',
		function ($scope) {
			$scope.cleartext = '';
			$scope.md5Hashed = ' ';
			$scope.sha256Hashed = ' ';
			$scope.sha512Hashed = ' ';
			$scope.sha3Hashed = ' ';
			$scope.ripemdHashed = ' ';

			$scope.hashme = function () {
				$scope.md5Hashed = CryptoJS.MD5($scope.cleartext).toString();
				$scope.sha256Hashed = CryptoJS.SHA256($scope.cleartext).toString();
				$scope.sha512Hashed = CryptoJS.SHA512($scope.cleartext).toString();
				$scope.sha3Hashed = CryptoJS.SHA3($scope.cleartext).toString();
				$scope.ripemdHashed = CryptoJS.RIPEMD160($scope.cleartext).toString();

			}
		}]);