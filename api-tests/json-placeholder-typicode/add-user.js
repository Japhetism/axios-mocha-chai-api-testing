const axios = require("axios");
const { expect } = require("chai");

describe("POST API Request Test", async () => {

    const payload = {
        id: Math.floor(Math.random() * 101),
        name: "Krishna Rungta",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    }
    
    const response = axios.post("https://jsonplaceholder.typicode.com/users", payload);

    it("should have status code 201", async () => {
        const res = await response;
        expect(res.status).equal(201);
    });

    it("should have status text Created", async() => {
        const res = await response;
        expect(res.statusText).to.be.equal("Created");
    });

    it("should be an object", async () => {
        const res = await response
        expect(res.data).to.be.an("object");
    });

    it("should have valid user id", async () => {
        const res = await response;
        expect(res.data.id).eq(11);
    })
})