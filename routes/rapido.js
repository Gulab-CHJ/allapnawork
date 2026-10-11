const express = require("express");

const router = express.Router();

const RapidoDaily =
    require("../models/RapidoDaily");


// ========================================
// SAVE DAILY RAPIDO DATA
// POST /api/rapido
// ========================================

router.post(
    "/",
    async (req, res) => {

        try {

            const {
                date,
                startKm,
                endKm,
                rideEarning,
                bonus,
                petrolRate,
                mileage,
                otherExpense
            } = req.body;


            const start =
                Number(startKm || 0);

            const end =
                Number(endKm || 0);

            const ride =
                Number(rideEarning || 0);

            const bonusAmount =
                Number(bonus || 0);

            const petrolPrice =
                Number(petrolRate || 0);

            const bikeMileage =
                Number(mileage || 0);

            const other =
                Number(otherExpense || 0);


            if(!date){

                return res.status(400).json({
                    success: false,
                    message: "Date required"
                });

            }


            if(start <= 0 || end <= 0){

                return res.status(400).json({
                    success: false,
                    message: "Start KM and End KM required"
                });

            }


            if(end < start){

                return res.status(400).json({
                    success: false,
                    message:
                        "End KM cannot be less than Start KM"
                });

            }


            const totalKm =
                end - start;


            const totalEarning =
                ride + bonusAmount;


            const petrolUsed =
                bikeMileage > 0
                    ? totalKm / bikeMileage
                    : 0;


            const petrolCost =
                petrolUsed *
                petrolPrice;


            const totalExpense =
                petrolCost +
                other;


            const netProfit =
                totalEarning -
                totalExpense;


            const earningPerKm =
                totalKm > 0
                    ? totalEarning / totalKm
                    : 0;


            const profitPerKm =
                totalKm > 0
                    ? netProfit / totalKm
                    : 0;


            const data =
                await RapidoDaily.create({

                    date,

                    startKm: start,

                    endKm: end,

                    totalKm,

                    rideEarning: ride,

                    bonus: bonusAmount,

                    totalEarning,

                    petrolRate: petrolPrice,

                    mileage: bikeMileage,

                    petrolUsed,

                    petrolCost,

                    otherExpense: other,

                    totalExpense,

                    netProfit,

                    earningPerKm,

                    profitPerKm

                });


            return res.json({

                success: true,

                message:
                    "Rapido daily data saved",

                data

            });


        }
        catch(error){

            console.error(
                "RAPIDO SAVE ERROR:",
                error
            );


            return res.status(500).json({

                success: false,

                message:
                    "Server error while saving data"

            });

        }

    }
);


// ========================================
// GET ALL HISTORY
// GET /api/rapido
// ========================================

router.get(
    "/",
    async (req, res) => {

        try {

            const data =
                await RapidoDaily
                    .find({})
                    .sort({
                        createdAt: -1
                    })
                    .lean();


            return res.json({

                success: true,

                data

            });

        }
        catch(error){

            console.error(
                "RAPIDO GET ERROR:",
                error
            );


            return res.status(500).json({

                success: false,

                message:
                    "Unable to load history"

            });

        }

    }
);


// ========================================
// DELETE ENTRY
// DELETE /api/rapido/:id
// ========================================

router.delete(
    "/:id",
    async (req, res) => {

        try {

            await RapidoDaily
                .findByIdAndDelete(
                    req.params.id
                );


            return res.json({

                success: true,

                message:
                    "Entry deleted"

            });

        }
        catch(error){

            return res.status(500).json({

                success: false,

                message:
                    "Delete failed"

            });

        }

    }
);


module.exports = router;
