///<reference types='cypress'/>
describe('delete api test', ()=>{
    let accessToken= "838165bbb26111410af923d5e1004088fbef5db19c763ce9b69ab369eb9e9c24";
    it('test delete api',()=>{
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'Authorization': 'Bearer '+accessToken
            },
            body: {
                    "name": "naveen02",
                    "email": "naveen02@gmail.com",
                    "status": "active",
                    "gender": "male" 
                }
        }).then((res1)=>{
            expect(res1.status).to.eq(201)
            expect(res1.body.data).has.property('name', 'naveen02')
            expect(res1.body.data).has.property('email', 'naveen02@gmail.com')
            expect(res1.body.data).has.property('gender', 'male')
        }).then((res1)=>{
            const Id = res1.body.data.id;
        cy.request({
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v1/users/'+Id,
            headers: {
                'Authorization': 'Bearer '+accessToken
            }
            }).then((res2)=>{
                expect(res2.status).to.eq(204)
            }).then((res1)=>{
                //const Id = res1.body.data.id;
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v1/users',
                    headers: {
                        'Athourizaion': 'Bearer '+accessToken
                    }
                }).then((res3)=>{
                    cy.log("Array length: "+ res3.body.data.length)
                    expect(res3.status).to.eq(200)
                     for(var i=0; i< res3.body.data.length; i++){
                   expect(res3.body.data[i]).not.eq(Id)
                 }
                   
                })
            })
        })
    })
})