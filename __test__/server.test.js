"use strict";

const supertest=require('supertest');
const server=require('../server');
const request=supertest(server.app);

describe('Running Server',()=>{
    it('Home Page', async()=>{
        const repsones=await request.get('/');
        expect(repsones.status).toEqual(200);
    });
    it('Sequare ERROR', async()=>{
        const repsones=await request.get('/square?num=hamzah');
        expect(repsones.status).toEqual(500);
    });
    it('Square Run',async()=>{
        const repsones=await request.get('/square?num=100');
        expect(repsones.status).toEqual(200);
    })
    it('Square Number', async()=>{
        const repsones=await request.get('/square?num=10');
        expect(repsones.body.num).toEqual(100);
    });

});