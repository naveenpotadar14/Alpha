///<reference types='cypress'/>
describe('Getchaining', function(){
    it('Get the data of san', function(){
        cy.request({
            method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=san'
        }).then((res)=>{
            const city= res.body[0].title
            return city
        }).then((city)=>{
            cy.request({
                method: 'GET',
                url: 'https://www.metaweather.com/api/location/search/?query='+city
            }).then((resp)=>{
                expect(resp.status).to.eq(200)
                expect(resp.body[0]).to.have.property('title',city)
            })
        })
    })
})