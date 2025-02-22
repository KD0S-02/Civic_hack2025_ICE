import { request, response } from "express";
const supabase = require('../models/database')

const addReport = async(req: request, res: response) => {
    const body: REPORT = req.body;
    
    if (!body) return res.status(400).json("Message: No Body");

    const {data, error, status} = await supabase.from('ice_report').insert(
        {a_number_last_three: body.arrestId, arrest_date: body.dateOfArrest, 
            ice_arrest_location_type: body.locationType, 
            reason_for_being_at_court:body.reasonProbationCourtHouse, custody_duration:body.durationOfPoliceCustody, 
            latitude:body.latitude, longitude:body.longitude, immigration_status_at_arrest:body.immigrationStatus,
            monitoring_type:body.monitoringType ,ice_location_source:body.howDidIceFindLocation, 
            additional_arrest_information: body.additionalInformation, is_verified: body.isVerified, 
            created_at: body.createdAt, updated_at: body.updateAt, created_by:body.username, 
            had_isap: body.hadISAP, tactics: body.tactics, county_name: body.countyName
        })
    
    if (error) res.status(status).json({message: error}); 

    res.status(status).json(data);
}

module.exports = {
    addReport
}