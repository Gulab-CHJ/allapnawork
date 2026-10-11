const mongoose = require("mongoose");

const rapidoDailySchema = new mongoose.Schema(
    {
        date: {
            type: String,
            required: true
        },

        startKm: {
            type: Number,
            required: true
        },

        endKm: {
            type: Number,
            required: true
        },

        totalKm: {
            type: Number,
            default: 0
        },

        rideEarning: {
            type: Number,
            default: 0
        },

        bonus: {
            type: Number,
            default: 0
        },

        totalEarning: {
            type: Number,
            default: 0
        },

        petrolRate: {
            type: Number,
            default: 0
        },

        mileage: {
            type: Number,
            default: 0
        },

        petrolUsed: {
            type: Number,
            default: 0
        },

        petrolCost: {
            type: Number,
            default: 0
        },

        otherExpense: {
            type: Number,
            default: 0
        },

        totalExpense: {
            type: Number,
            default: 0
        },

        netProfit: {
            type: Number,
            default: 0
        },

        earningPerKm: {
            type: Number,
            default: 0
        },

        profitPerKm: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

module.exports =
    mongoose.model(
        "RapidoDaily",
        rapidoDailySchema
    );
