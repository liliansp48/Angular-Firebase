  var bancoDados = new Firebase("https://angular-firebase-a4595.firebaseio.com/angular-firebase");

angular.module('tarefasApp', []).controller('tarefasCtrl',function  ($scope)
{
    $scope.tasks = [];
    $scope.tarefa = "";

    $scope.Adicionar = function(){
        debugger;
        bancoDados.push({task:$scope.tarefa})
    }

    $scope.deletar = function (){
        $scope.taks.splice(this.$index,1)
    }

    $scope.inicializacao = function(){
    }
});


 function ListaTarefas(){
    debugger;
    if(bancoDados.length > 0)
    {
        for(var i in DB)
        {
            $("table > tbody").append( "<tr>"
                + "<td>"+ DB[i].Id +"</td>"
                + "<td>"+ DB[i].Nome +"</td>"
                + "<td>"+ DB[i].Telefone +"</td>"
                + "<td>"+ DB[i].Email +"</td>"
                + "</tr>");
        }
    }
}

