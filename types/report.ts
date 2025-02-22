type REPORT = {
    arrestId: Number,
    dateOfArrest: Date,
    locationType: LocationType,
    reasonProbationCourtHouse: String | undefined,
    durationOfPoliceCustody: String | undefined,
    latitude: Number,
    longitude: Number,
    immigrationStatus: ImmigrationStatus,
    hadISAP: "Yes" | "No" | "Unsure"
    monitoringType: "String" | undefined,
    howDidIceFindLocation: "String" | undefined,
    additionalInformation: "String" | undefined,
    isVerified: Boolean,
    username: USER,
    createdAt: Date,
    updateAt: Date
    countyName: String,
    tactics: TACTICS,
}