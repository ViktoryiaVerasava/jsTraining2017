import {browser, element, by/*, By, $, $$, ExpectedConditions*/} from 'protractor';
import {} from 'jasmine';
import {} from 'jasminewd2';

describe('protractor with typescript ', () => {
  beforeEach(() => {
    console.log('in before');
    browser.get('http://localhost:8081/');
  });

  it('should greet the named user', () => {
    element(by.model('yourName')).sendKeys('Julie');
    let greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  it('should list todos', function() {
    let todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(2);
    expect(todoList.get(1).getText()).toEqual('build an angular app');
  });
});