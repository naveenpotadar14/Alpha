///<reference types='cypress'/>
describe('post api 2',()=>{
    let accessToken='adf1b9b8609dd484b426315cddea9663e1f7247cae409cf45c0f970a009e4954';
    const dataJason = require('../../fixtures/example.json');

    var pattern='abcdefghijklmnopqrstuvwxyz';
    
    it('post api 2', ()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v1/users',
            headers:{
                'Authorization':'Bearer '+accessToken
            },
            body:{
                "name" : dataJason.name,
               "email" : testEmail,
               "gender" : dataJason.gender,
               "status" : dataJason.status  
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.body.data).has.property('name',dataJason.name)
            expect(res.body.data).has.property('email',testEmail)
        })
    })
})