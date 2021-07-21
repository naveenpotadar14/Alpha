///<reference types='cypress'/>

describe('post api test',()=>{
    let accessToken = '838165bbb26111410af923d5e1004088fbef5db19c763ce9b69ab369eb9e9c24';
    it('create a user',()=>{
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                'Authorization' : 'Bearer '+ accessToken
            },
            body : {
               "name" : "abcd15",
               "email" : "abcd17@gmail.com",
               "gender" : "female",
               "status" : "active"  
            }         
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data.gender).has.property("gender","female")
            expect(res.body.data.email).has.property("email","abcd17@gmail.com")
            expect(res.body.data.status).has.property("status","active")
        })
    })
})