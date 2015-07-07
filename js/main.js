/*global angular*/
'use strict';


angular.module('app', ['zeroclipboard']);

angular
	.module('app')
	.config(['uiZeroclipConfigProvider', function (uiZeroclipConfigProvider) {

		// config ZeroClipboard
		uiZeroclipConfigProvider.setZcConf({
			swfPath: '../bower_components/zeroclipboard/dist/ZeroClipboard.swf'
		});
	}]);

angular
	.module('app')
	.controller('hash', ['$scope',
		function ($scope) {
			$scope.cleartext = '';
			$scope.md5Hashed = ' ';
			$scope.sha1Hashed = ' ';
			$scope.sha256Hashed = ' ';
			$scope.sha384Hashed = ' ';
			$scope.sha512Hashed = ' ';
			$scope.sha3Hashed = ' ';
			$scope.ripemdHashed = ' ';

			$scope.hashme = function () {
				var hashAlgorithms = [{
					alg: forge.md.md5.create(),
					id: 'md5Hashed'
				}, {
					alg: forge.md.sha1.create(),
					id: 'sha1Hashed'
				}, {
					alg: forge.md.sha256.create(),
					id: 'sha256Hashed'
				}, {
					alg: forge.md.sha384.create(),
					id: 'sha384Hashed'
				}, {
					alg: forge.md.sha512.create(),
					id: 'sha512Hashed'
				}];
				hashAlgorithms.forEach(function (idHash) {
					$scope[idHash.id] = idHash.alg.update($scope.cleartext).digest().toHex()
				});


				// $scope.md5Hashed = CryptoJS.MD5($scope.cleartext).toString();
				// $scope.sha1Hashed = mdSha1.digest().toHex();
				// $scope.sha256Hashed = CryptoJS.SHA256($scope.cleartext).toString();
				// $scope.sha512Hashed = CryptoJS.SHA512($scope.cleartext).toString();
				$scope.sha3Hashed = CryptoJS.SHA3($scope.cleartext).toString();
				$scope.ripemdHashed = CryptoJS.RIPEMD160($scope.cleartext).toString();

			}
		}]);