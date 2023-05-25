const axios = require("axios");
const { expect } = require("chai");
const fs = require("fs");
const jsonData = require("../../config/env.json");
const userRequest = require("../../fixtures/add-user-request");

describe("POST API Request Test", async () => {

    
    const response = axios.post(`${jsonData.baseUrl}/users`, userRequest);

    it("should have status code 201", async () => {
        const res = await response;
        expect(res.status).equal(201);
    });

    it("should have status text Created", async() => {
        const res = await response;
        expect(res.statusText).to.be.equal("Created");

        // write access token to config file
        let token_value = "dhjdjddjjduwueuuu33i3302jdjdjd";
        jsonData.accessToken = token_value;
        fs.writeFileSync("config/env.json", JSON.stringify(jsonData));
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