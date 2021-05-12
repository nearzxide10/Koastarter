const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = require("chai").expect;
const server = require("../index");


chai.use(chaiHttp);

describe("info.js", () => {
    
    describe("/GET getRouteExample", () => {
        it("it should get route sample information by test", async () => {
            const res =  await  chai.request(endpointUrl)
                .get("/info/sample/test")
                .set({"Authorization":`Bearer ${authToken}`})
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property("result").and.to.be.an("string");
        });     

    });
    describe("/GET getRouteExample", () => {
        it("haven't url param ", async () => {
            const res =  await  chai.request(endpointUrl)
                .get("/info/sample")
                .set({"Authorization":`Bearer ${authToken}`})
                expect(res.status).to.equal(404);
        });     

    });
   
    describe("/POST login", () => {
        it("it should get token ", async () => {
            const res =  await  chai.request(endpointUrl)
                .post("/info/login")
                .send({                    
                    "user": "test1",
                    "password": "test123"
                })
                expect(res.status).to.equal(200);
                expect(res.body).to.have.property("token").and.to.be.an("string");
                expect(res.body).to.have.property("ip").and.to.be.an("string");
        });   

        it("not exists user", async () => {
            const res =  await  chai.request(endpointUrl)
                .post("/info/login")
                .send({                    
                    "user": "test",
                    "password": "test123"
                })
                expect(res.status).to.equal(401);
              
        });  

        it("it's error password", async () => {
            const res =  await  chai.request(endpointUrl)
                .post("/info/login")
                .send({                    
                    "user": "test1",
                    "password": "test1"
                })
                expect(res.status).to.equal(401);
              
        })
    });
});

