angular.module('hascodeTagWizard.services', [])

.factory('searchService', function($http) {

  var articles = [
      {title:'Foo', url:'http://www.hascode.com/xxx', image:'http://www.hascode.com/wp-content/uploads/2011/04/ocpjp1.png', excerpt:'When it comes to indexing in a Neo4j graph database, different options exist for a developer to create and maintain the index. In the following short examples I’d like to demonstrate different possibilities for index management.'},
      {title:'Bar', url:'http://www.hascode.com/xxx', image:'http://www.hascode.com/wp-content/uploads/2011/04/ocpjp1.png', excerpt:'When it comes to indexing in a Neo4j graph database, different options exist for a developer to create and maintain the index. In the following short examples I’d like to demonstrate different possibilities for index management.'},,
      {title:'Baz', url:'http://www.hascode.com/xxx', image:'http://www.hascode.com/wp-content/uploads/2011/04/ocpjp1.png', excerpt:'When it comes to indexing in a Neo4j graph database, different options exist for a developer to create and maintain the index. In the following short examples I’d like to demonstrate different possibilities for index management.'},
  ];

  return {
    searchByTag: function(tag) {
        $http.get('http://localhost:9999/'+tag).
            success(function (data, status, headers, config) {
                alert(data);
            }).
            error(function (data, status, headers, config) {
                alert('error'+data);
            });
      return articles;
    }
  };
});
