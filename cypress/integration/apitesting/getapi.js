///<reference types='cypress'/>
describe('get api test', function(){
    let accessToken = '838165bbb26111410af923d5e1004088fbef5db19c763ce9b69ab369eb9e9c24';
    it.only('verify user', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                'Authorization' : 'Bearer '+ accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })

    it('verify get user name', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/3',
            headers : {
                'Authorization' : 'Bearer '+ accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Aasa Gowda')
        })
    })
})