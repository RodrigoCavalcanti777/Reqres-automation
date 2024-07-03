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
});