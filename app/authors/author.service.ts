import {Component} from 'angular2/core';

export class AuthorService {
    getAuthors(): String[] {
        return ["Author 1", "Author 2", "Author 3"];
    }
}
