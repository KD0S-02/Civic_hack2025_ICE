"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const supabase = require('../models/database');
const addReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    if (!body)
        return res.status(400).json("Message: No Body");
    const { data, error, status } = yield supabase.from('ice_report').insert({ a_number_last_three: body.arrestId, arrest_date: body.dateOfArrest,
        ice_arrest_location_type: body.locationType,
        reason_for_being_at_court: body.reasonProbationCourtHouse, custody_duration: body.durationOfPoliceCustody,
        latitude: body.latitude, longitude: body.longitude, immigration_status_at_arrest: body.immigrationStatus,
        monitoring_type: body.monitoringType, ice_location_source: body.howDidIceFindLocation,
        additional_arrest_information: body.additionalInformation, is_verified: body.isVerified,
        created_at: body.createdAt, updated_at: body.updateAt, created_by: body.username,
        had_isap: body.hadISAP, tactics: body.tactics, county_name: body.countyName
    });
    if (error)
        res.status(status).json({ message: error });
    res.status(status).json(data);
});
module.exports = {
    addReport
};
