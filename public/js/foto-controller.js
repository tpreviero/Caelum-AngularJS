angular
    .module("alurapic")
    .controller("FotoController", ["$scope", "$routeParams", "recursoFoto", "cadastroDeFotos", function($scope, $routeParams, recursoFoto, cadastroDeFotos){
      $scope.foto = {};
      $scope.mensagem = '';

      $scope.mudaIdioma = function(idioma){
        
      }

      if($routeParams.fotoId) {
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
          $scope.foto = foto;
        }, function(erro){
          $scope.mensagem = 'Não foi possível obter a foto';
          console.log(erro);
        });
      }

      $scope.submeter = function() {
        if($scope.formulario.$valid){
          cadastroDeFotos.cadastrar($scope.foto)
          .then(function(dados){
            $scope.mensagem = dados.mensagem;
            if(dados.inclusao) $scope.foto = {};

          })
          .catch(function(erro){
            $scope.mensagem = erro.mensagem;
          });
          /*if($routeParams.fotoId) {
            recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
              $scope.mensagem = 'Foto alterada com sucesso!';
            }, function(erro){
              $scope.mensagem = 'Não foi póssivel alterar';
            });
          }else{
            recursoFoto.save($scope.foto, function(){
              $scope.foto = {};
              $scope.mensagem = 'Foto cadastrada com sucesso';
              $scope.formulario.$setPristine();
            }, function(erro){
              $scope.mensagem = "Não foi possível cadastrar a foto";
              console.log(erro);
            })
      }*/
    }
  };


      /*if($routeParams.fotoId) {
        $http.get("/v1/fotos/" + $routeParams.fotoId)
        .then(function(fotos){
          $scope.foto = fotos.data;
        }, function(erro){
          $scope.mensagem = 'Não foi possível obter a foto';
          console.log(erro);
        });
      }
      $scope.submeter = function() {
        if($scope.formulario.$valid){
          if($routeParams.fotoId) {
            $http.put("/v1/fotos/" + $scope.foto._id, $scope.foto)
            .then(function(){
              $scope.mensagem = 'Foto alterada com sucesso!';
            }, function(erro){
              $scope.mensagem = 'Não foi póssivel alterar';
              console.log(erro);
            });
          }else{
            $http.post("/v1/fotos/", $scope.foto)
            .then(function(foto){
              $scope.foto = {};
              $scope.mensagem = "Sucesso!";
              console.log(foto);
              $scope.formulario.$setPristine()
            },function(erro){
              $scope.mensagem = "Erro!";
              console.log(erro);
            });
      }
    }
  }*/
}]);
