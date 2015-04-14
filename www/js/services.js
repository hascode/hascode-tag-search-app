angular.module('hascodeTagWizard.services', [])

    .factory('searchService', function ($http) {
        var blogUrl ='http://www.hascode.com/tag/';

        var articles = [
            {title: 'Creating In-Memory File Systems with Google’s Jimfs', url: 'http://www.hascode.com/2015/03/creating-in-memory-file-systems-with-googles-jimfs/', image: 'http://www.hascode.com/wp-content/uploads/2015/03/creating-inmemory-filesystem-with-jimfs.png', excerpt: 'Sometimes when writing an application we might consider using an in-memory file system to speed up data access or to create some kind of cache.  There are different libraries to help us here but one looks especially promising for me because it supports almost every functionality of the Java NIO File APIs added in Java 7 – from creating, reading, deleting files and directory to handling symbolic and hard links or watching directory changes with a WatchService.  In the following short tutorial, I’d like to demonstrate how to setup an in-memory file system within a few minutes and how to access directories and files stored in this file system.'},
            {title: 'Generating Java Source Files with JavaPoet', url: 'http://www.hascode.com/2015/02/generating-java-source-files-with-javapoet/', image: 'http://www.hascode.com/wp-content/uploads/2015/02/javapoet-example.png', excerpt: 'For the most of us developers, generating Java source files is an occasionally happening task and we’re dealing with it e.g. when writing annotation processors, writing tools or interacting with meta-data files.  JavaPoet is a nice library to simplify such tasks, offering an intuitive fluent-builder API to generate source files in no time.  In the following tutorial I’d like to share a few examples by writing code generators with the help of this library.'},
            {title: 'A short Overview of Neo4j Indexing Strategies', url: 'http://www.hascode.com/2015/01/a-short-overview-of-neo4j-indexing-strategies/', image: 'http://www.hascode.com/wp-content/uploads/2015/01/domain-model.png', excerpt: 'When it comes to indexing in a Neo4j graph database, different options exist for a developer to create and maintain the index.  In the following short examples I’d like to demonstrate different possibilities for index management.'}
        ];

        return {
            searchByTag: function (tag) {
                $http.get(blogUrl + tag).
                    success(function (data, status, headers, config) {
                        console.log('success',data);
                    }).
                    error(function (data, status, headers, config) {
                        console.log('error: ', data)
                    });
                return articles;
            }
        };
    });
