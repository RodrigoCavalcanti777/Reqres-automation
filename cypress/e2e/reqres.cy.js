describe('Testes Positivos', () => {
    it('GET/users', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            
        }).then((response) => {

            var result = response.body.total;
            
            expect(response.status).to.be.within(200,299);
            expect(response.body.total).to.be.equal(result);
            expect(response.body.total).to.be.exist;
            

        });
    });

    it('GET/users/id', () => {
        
        function getRandomNumber() {
            return Math.floor(Math.random() * 10) + 1;
          }

          let user = getRandomNumber();

        
        cy.request({
            method: 'GET',
            url: '/users/' + user,
            
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body.data).to.be.exist;
            expect(response.body.data.id).to.be.exist;
            expect(response.body.data.id).to.be.equal(user);
            expect(response.body.data.email).to.be.exist;
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            expect(response.body.data.email).to.match(emailRegex);
            expect(response.body.data.first_name).to.be.exist;
            expect(response.body.data.first_name).to.be.a('string');
            expect(response.body.data.first_name).to.be.exist;
            expect(response.body.data.last_name).to.be.a('string');

        });
    });
});