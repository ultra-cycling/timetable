const events = new Map();

events.set("LEL 2022", [
    {"id": "d2a2263f-e37f-414f-9f89-c4cc72c19ae1","from": "Loughton", "to": "St Ives", "distance": 102.20, "climb": 700, "pause": 30},
    {"id": "3726c5ff-ed46-4192-b294-db21b5c80d7a","from": "St Ives", "to": "Spalding", "distance": 61.10, "climb": 95, "pause": 30},
    {"id": "26e41689-7be8-4542-9047-073506043989","from": "Spalding", "to": "Louth", "distance": 82.20, "climb": 465, "pause": 210},
    {"id": "f0400501-67a1-4b43-ae7e-d88e2b3cefff","from": "Louth", "to": "Hessle", "distance": 57.80, "climb": 485, "pause": 30},
    {"id": "0a727136-4e59-4cf3-9342-f7776ff8914d","from": "Hessle", "to": "Malton", "distance": 66.90, "climb": 680, "pause": 30},
    {"id": "389bb576-640e-4a28-a99c-9d26cceaaded","from": "Malton", "to": "Barnard Castle", "distance": 114.00, "climb": 1255, "pause": 30},
    {"id": "6ab3ebb7-a37e-4176-9433-79ff9b3c87a1","from": "Barnard Castle", "to": "Brampton", "distance": 83.70, "climb": 990, "pause": 210},
    {"id": "46633595-2db0-4cec-abc6-4c5951991021","from": "Brampton", "to": "Moffat", "distance": 71.50, "climb": 810, "pause": 30},
    {"id": "b64093f1-766a-4d9f-ae06-99567a501368","from": "Moffat", "to": "Dunfermline", "distance": 111.40, "climb": 1145, "pause": 30},
    {"id": "0bddfc7b-a31f-4b15-bc6f-b9080b98a46f","from": "Dunfermline", "to": "Innerleithen", "distance": 81.20, "climb": 1135, "pause": 30},
    {"id": "5b30c06e-e382-4f2b-8e08-bebebda74a13","from": "Innerleithen", "to": "Eskdalemuir", "distance": 49.50, "climb": 660, "pause": 30},
    {"id": "10bada7c-5f27-438f-8e0f-d556d165704e","from": "Eskdalemuir", "to": "Brampton", "distance": 58.10, "climb": 585, "pause": 210},
    {"id": "aefe1130-360c-4426-b1c7-dfe5bf0dae4e","from": "Brampton", "to": "Barnard Castle", "distance": 83.60, "climb": 1000, "pause": 30},
    {"id": "054cb738-3f91-4071-b3f2-a565c956e404","from": "Barnard Castle", "to": "Malton", "distance": 111.70, "climb": 1155, "pause": 30},
    {"id": "c154c3fa-d05d-4855-9a34-bb508f7c755d","from": "Malton", "to": "Hessle", "distance": 70.00, "climb": 710, "pause": 30},
    {"id": "7d75c3d1-2436-41f6-bf2e-94f4784b8b67","from": "Hessle", "to": "Louth", "distance": 58.30, "climb": 545, "pause": 210},
    {"id": "f9fc3be6-c069-472a-b78f-59e25dc9332f","from": "Louth", "to": "Spalding", "distance": 81.30, "climb": 340, "pause": 30},
    {"id": "f876130f-e378-482d-8a9b-6193061e4fe9","from": "Spalding", "to": "St Ives", "distance": 60.30, "climb": 115, "pause": 30},
    {"id": "f1756105-d1bd-442c-bb86-f5df4e2540c9","from": "St Ives", "to": "Great Easton", "distance": 69.00, "climb": 350, "pause": 30},
    {"id": "edd46a9d-b838-417a-a3d8-3165e529659d","from": "Great Easton", "to": "Loughton", "distance": 48.60, "climb": 365, "pause": 30},
]);

events.set("BRM 200", [
    {"id": "5d7a8ffc-b3e5-4da4-bfd1-7f9aac5174dd", "from": "Buch", "to": "Radolfzell", "distance": 16.00, "climb": 80, "pause": 0},
    {"id": "0731424e-7736-40d1-9d5e-84b0a6f56a41", "from": "Radolfzell", "to": "Ludwigshafen", "distance": 16.00, "climb": 100, "pause": 0},
    {"id": "ad35e276-a703-4c52-a047-6859a47501bf", "from": "Ludwigshafen", "to": "Ueberlingen", "distance": 10.00, "climb": 50, "pause": 0},
    {"id": "bb85de98-1678-4870-bf28-c5ab08a4158b", "from": "Ueberlingen", "to": "Unteruhldingen", "distance": 9.00, "climb": 30, "pause": 0},
    {"id": "57a4d9f0-a8a2-42ee-b852-3da4cc365e20", "from": "Unteruhldingen", "to": "Immenstaad", "distance": 13.00, "climb": 50, "pause": 15},
    {"id": "f99bca5e-fa51-40f8-b0c3-46de188733f5", "from": "Immenstaad", "to": "Friedrichshafen", "distance": 10.20, "climb": 40, "pause": 0},
    {"id": "97f007ad-d32d-48aa-a99a-e89ba22d4b61", "from": "Friedrichshafen", "to": "Lindau", "distance": 25.00, "climb": 50, "pause": 0},
    {"id": "ba1ef24a-2427-43e6-b275-a64c4e86a53e", "from": "Lindau", "to": "Bregenz", "distance": 10.00, "climb": 20, "pause": 15},
    {"id": "c58255bc-cea6-4301-a765-2b97d953fdfc", "from": "Bregenz", "to": "Gaißau", "distance": 19.00, "climb": 30, "pause": 0},
    {"id": "be9db743-2b76-48c0-bfea-4f6948aa24ad", "from": "Gaißau", "to": "Rorschacher Berg", "distance": 9.00, "climb": 230, "pause": 0},
    {"id": "4032e99b-b6c6-47f1-9bf0-8991036fe1aa", "from": "Rorschacher Berg", "to": "Arborn", "distance": 11.00, "climb": 50, "pause": 15},
    {"id": "2001f218-9d46-43cc-9114-e0a802b37e25", "from": "Arborn", "to": "Romanshorn", "distance": 9.00, "climb": 20, "pause": 0},
    {"id": "3703b708-36ba-4c07-a6e2-3a92b948d043", "from": "Romanshorn", "to": "Kreuzlingen", "distance": 20.00, "climb": 90, "pause": 0},
    {"id": "ba48ab58-d510-48be-b599-05a275e89827", "from": "Kreuzlingen", "to": "Steckborn", "distance": 15.50, "climb": 120, "pause": 15},
    {"id": "931d918c-cb45-40e6-9780-704c7ae3ee96", "from": "Steckborn", "to": "Stein am Rhein", "distance": 12.00, "climb": 100, "pause": 0},
    {"id": "9dfdee6f-78a8-4820-978b-b418b5890785", "from": "Stein am Rhein", "to": "Buch", "distance": 10.00, "climb": 40, "pause": 0},
]);

events.set("BRM 600 - Talwind", [{
    "id": "32e6d13c-8244-4639-a0db-8b3ac1020f22",
    "from": "Buch",
    "to": "Tuttlingen",
    "distance": "52",
    "climb": "560",
    "pause": "30"
}, {
    "id": "63aa276d-212d-4f66-be7c-2ede5bf0fde0",
    "from": "Tuttlingen",
    "to": "Sigmaringen",
    "distance": "52",
    "climb": "450",
    "pause": "30"
}, {
    "id": "579ee789-d3a9-428b-8da3-7b95c1204395",
    "from": "Sigmaringen",
    "to": "Moessingen",
    "distance": "51",
    "climb": "570",
    "pause": "30"
}, {
    "id": "d2c99963-1b9b-48f4-9d0f-bf80c76e03ee",
    "from": "Moessingen",
    "to": "Horb",
    "distance": "36",
    "climb": "400",
    "pause": "30"
}, {
    "id": "9c46cee0-38f0-406e-8c2e-fd69b4c48fb0",
    "from": "Horb",
    "to": "Klosterreichenbach",
    "distance": "37",
    "climb": "650",
    "pause": "30"
}, {
    "id": "2a891bb4-ad11-4d07-b3e6-0f755c0d02ce",
    "from": "Klosterreichenbach",
    "to": "Gaggenau",
    "distance": "47",
    "climb": "360",
    "pause": "30"
}, {
    "id": "6a356a98-ba50-4303-bc2b-9136777858b4",
    "from": "Gaggenau",
    "to": "Haguenau",
    "distance": "52",
    "climb": "130",
    "pause": "30"
}, {
    "id": "03aa2aa3-ba6f-4a45-a1e1-ae17fe0ff565",
    "from": "Haguenau",
    "to": "Strassbourg",
    "distance": "37",
    "climb": "120",
    "pause": "60"
}, {
    "id": "7ed01fee-6e23-4209-938d-faace7f3e245",
    "from": "Strassbourg",
    "to": "Breisach",
    "distance": "68",
    "climb": "100",
    "pause": "30"
}, {
    "id": "60c9b20d-9474-439f-acd0-ebb4f0b7c112",
    "from": "Breisach",
    "to": "Basel",
    "distance": "55",
    "climb": "100",
    "pause": "30"
}, {
    "id": "d8ab03b5-880a-4326-ae17-94735a1202aa",
    "from": "Basel",
    "to": "Bad Saeckingen",
    "distance": "38",
    "climb": "160",
    "pause": "30"
}, {
    "id": "e24b1c07-d5df-4a75-8e80-0f543580155c",
    "from": "Bad Saeckingen",
    "to": "Koblenz",
    "distance": "28",
    "climb": "190",
    "pause": "30"
}, {
    "id": "6cef10ae-7fa7-4e8d-9174-d3c25c4c14fc",
    "from": "Koblenz",
    "to": "Schaffhausen",
    "distance": "45",
    "climb": "390",
    "pause": "30"
}, {
    "id": "866e1edc-fdd3-49b2-8f64-f634d3665a59",
    "from": "Schaffhausen",
    "to": "Buch",
    "distance": "15",
    "climb": "190",
    "pause": "0"
}]);

export default events;