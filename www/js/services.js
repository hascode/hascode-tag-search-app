angular.module('hascodeTagWizard.services', [])

.factory('SearchService', function() {

  var articles = [
      {title:'Foo'},
      {title:'Bar'},
      {title:'Xoxo'}
  ];

  return {
    searchByTag: function(tag) {
      return articles;
    }
  };
});
