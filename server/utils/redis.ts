import {Redis} from 'ioredis';
require("dotenv").config();

const redisClient = () => {
    if(process.env.REDIS_URL){
        console.log('Redis connected');
        return process.env.REDISURL;
    }
    throw new Error('Redis connection failed')
}

export const redis = new Redis(redisClient());