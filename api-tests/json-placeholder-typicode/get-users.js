const axios = require("axios");
const { expect } = require("chai");
const jsonData = require("../../config/env.json");

describe("GET API Request Test", async () => {
    
    const response = axios.get(`${jsonData.baseUrl}/users`);

    it("should have status code 200", async () => {
        const res = await response;
        expect(res.status).equal(200);
    });

    it("should have status text OK", async() => {
        const res = await response;
        expect(res.statusText).to.be.equal("OK");
    });

    it("should be an array", async () => {
        const res = await response
        expect(res.data).to.be.an("array");
    });

    it("should check if user with id 1 is Leanne Graham", async () => {
        const res = await response;
        expect(res.data[0].name).equal("Leanne Graham");
    });

    it("should contain valid keys", async () => {
        const res = await response;
        expect(res.data[0]).to.have.keys("id", "name", "username", "email", "address", "phone", "website", "company");
    });

    it("should have 10 users on the list", async () => {
        const res = await response;
        expect(res.data.length).to.equal(10);
    })
})