angular
  .module("alurapic")
  .controller("FotosController", ["$scope", "recursoFoto", function($scope, recursoFoto){

    recursoFoto.query(function(fotos){
      $scope.fotos = fotos;
    }, function(erro){
      console.log(erro);
    });

    $scope.remover = function(foto){
      recursoFoto.delete({fotoId: foto._id}, function(){
        var indiceDaFoto = $scope.fotos.indexOf(foto);
        $scope.fotos.splice(indiceDaFoto, 1);
        $scope.mensagem = 'Foto' + foto.titulo + ' removida com sucesso!';
      }, function(erro){
        $scope.mensagem = 'Não foi possivel remover a foto ' + foto.titulo;
        console.log(erro);
      });
    }



      /*$http.get("v1/fotos")
      .then(function(fotos){
        $scope.fotos = fotos.data;
      },function(erro){
        console.log("As fotos não foram carregadas");
      });
      $scope.remover = function(foto){
        $http.delete('v1/fotos/' + foto._id)
        .then(function(){
          var indiceDaFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indiceDaFoto, 1);
          $scope.mensagem = 'Foto' + foto.titulo + ' removida com sucesso!';
        }, function(erro){
          $scope.mensagem = 'Não foi possivel remover a foto ' + foto.titulo;
          console.log(erro);
        });
      }*/
  }]);
