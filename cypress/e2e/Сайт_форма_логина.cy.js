describe('НАЗВАНИЕ_ГРУППЫ_ТЕСТОВ', function () {

    it('Авторизация с верным логином и паролем', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  
    })

        it('Правильный логин и неправильный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio11');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Неправильный логин и правильный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dollnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Невалидный логин и правильный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('germandollnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Логин заглавными буквами', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@Dolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Авторизация прошла успешно');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   
        })



 }) 