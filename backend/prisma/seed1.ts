// import employee_seeder from "./seeder/employee_seeder";
//   await employee_seeder();


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
    const states = [
      "West Bengal", "Rajasthan", "Jammu and Kashmir", "Uttar Pradesh", "Bihar", "Assam", "Odisha",
      "Tamil Nadu", "Andhra Pradesh", "Madhya Pradesh", "Kerala", "Karnataka", "Maharashtra",
      "Gujarat", "Nagaland", "Punjab", "Himachal Pradesh", "Manipur", "Meghalaya", "Tripura",
      "Sikkim", "Goa", "Arunachal Pradesh", "Mizoram", "Chhattisgarh", "Jharkhand", "Uttarakhand",
      "Telangana", "Haryana", "Delhi", "Andaman Nicobar", "Chandigarh", "Dadra & Nagar Haveli",
      "Lakshadweep", "Puducherry", "Anglo Indian Nominated", "Jammu and Kashmir", "Ladakh"
    ];
  
    for (const stateName of states) {
      await prisma.indianstates.create({
        data: {
          name: stateName
        }
      });
    }


    ///////////////////////////////
    const ulbs = [
        { name: 'Ranchi (Nagar Nigam)' },
        { name: 'Dhanbad (Nagar Nigam)' },
        { name: 'Hazaribag (Nagar Parshad)' },
        { name: 'Adityapur (Nagar Parshad)' },
        { name: 'Mango' },
        { name: 'Jamshedpur (NAC)' },
        { name: 'Deoghar (Nagar Nigam)' },
        { name: 'Medininagar (Daltonganj) (Nagar Parshad)' },
        { name: 'Jhumri Talaiya (Nagar Parshad)' },
        { name: 'Giridih (Nagar Parshad)' },
        { name: 'Sahibganj (Nagar Parshad)' },
        { name: 'Phusro (Nagar Parshad)' },
        { name: 'Chas (Nagar Parshad)' },
        { name: 'Chaibasa (Nagar Parshad)' },
        { name: 'Chakradharpur (Nagar Parshad)' },
        { name: 'Garhwa (Nagar Panchayat)' },
        { name: 'Hussainabad (Nagar Panchayat)' },
        { name: 'Chatra (Nagar Parshad)' },
        { name: 'Madhupur (Nagar Parshad)' },
        { name: 'Godda (Nagar Panchayat)' },
        { name: 'Pakur (Nagar Panchayat)' },
        { name: 'Dumka (Nagar Parshad)' },
        { name: 'Jamtara (Nagar Panchayat)' },
        { name: 'Mihijam (Nagar Panchayat)' },
        { name: 'Chirkunda (Nagar Panchayat)' },
        { name: 'Khunti (Nagar Panchayat)' },
        { name: 'Lohardaga (Nagar Parshad)' },
        { name: 'Gumla (Nagar Panchayat)' },
        { name: 'Simdega (Nagar Panchayat)' },
        { name: 'Jugsalai (Municipality)' },
        { name: 'Majhiaown (Nagar Panchayat)' },
        { name: 'Latehar (Nagar Panchayat)' },
        { name: 'Kodarma (Nagar Panchayat)' },
        { name: 'Rajmahal (Nagar Panchayat)' },
        { name: 'Basukinath (Nagar Panchayat)' },
        { name: 'Bundu (Nagar Panchayat)' },
        { name: 'Saraikela (Nagar Panchayat)' },
        { name: 'Chakulia (Nagar Panchayat)' },
        { name: 'Vishrampur (Nagar Panchayat)' }
      ];
    
      for (const ulb of ulbs) {
        await prisma.ulb.create({
          data: ulb,
        });
      }
    
      console.log('ULBs inserted successfully');
    // //////////////////////////////////////////////////////////////////////////////////
    const languages = [
        { name: 'Assamese' },
        { name: 'Bengali' },
        { name: 'Bodo' },
        { name: 'Dogri' },
        { name: 'Gujarati' },
        { name: 'Hindi' },
        { name: 'Kannada' },
        { name: 'Kashmiri' },
        { name: 'Konkani' },
        { name: 'Maithili' },
        { name: 'Malayalam' },
        { name: 'Manipuri' },
        { name: 'Marathi' },
        { name: 'Nepali' },
        { name: 'Odia' },
        { name: 'Punjabi' },
        { name: 'Sanskrit' },
        { name: 'Santali' },
        { name: 'Sindhi' },
        { name: 'Tamil' },
        { name: 'Telugu' },
        { name: 'Urdu' },
      ];
    
      for (const language of languages) {
        await prisma.language.create({
          data: language,
        });
      }
    
      console.log('Languages inserted successfully');
    // //////////////////////////////////////////////////////////////////////////////////////////
    // ddc code 
   

const ddoData = [
    { ddoCode: 'HZBACH001', ddoName: 'R', ddoDesignation: 'R', ddoOffice: 'R' },
    { ddoCode: 'HZBACH002', ddoName: 'P.KR', ddoDesignation: 'B.D.O', ddoOffice: 'B.D.O CHOUPARAN' },
    { ddoCode: 'HZBACH003', ddoName: 'RAJENDRA KISHOR', ddoDesignation: 'ASST.DIRECTOR HORTICULTURE HZB', ddoOffice: 'ASST.DIRECTOR HORTICULTURE HZB' },
    { ddoCode: 'HZBACH004', ddoName: 'RAJENDRA KISHOR', ddoDesignation: 'D H O HZB', ddoOffice: 'D H O AGRI. HZB' },
    { ddoCode: 'HZBACH005', ddoName: 'RAJENDRA KISHOR', ddoDesignation: 'D H O HZB', ddoOffice: 'D H O AGRI- HZB' },
    { ddoCode: 'HZBACH006', ddoName: 'GOKUL MEHRA', ddoDesignation: 'JOINT AGRI. DIRECTOR HZB', ddoOffice: 'JOINT AGRI.DIRECTOR HZB' },
    { ddoCode: 'HZBACH007', ddoName: 'N P GUPTA', ddoDesignation: 'B D O BARHI', ddoOffice: 'B D O BARHI' },
    { ddoCode: 'HZBACH008', ddoName: 'S N RAM', ddoDesignation: 'B D O SADAR HZB', ddoOffice: 'B D O SADAR HZB' },
    { ddoCode: 'HZBACH009', ddoName: 'UMESH PRASAD', ddoDesignation: 'SDO AGRICULTURE HZB', ddoOffice: 'SDO AGRICULTURE HZB' },
    { ddoCode: 'HZBACH010', ddoName: 'M DAS', ddoDesignation: 'ASST.DIREC.AGRI PP NCD HZB', ddoOffice: 'ASST DIREC.AGRI PP NCD HZB' },
    // Add more data rows here...
    { ddoCode: 'HZBACH011', ddoName: 'M DAS', ddoDesignation: 'J P P O HZB', ddoOffice: 'J P P O HZB' },
    { ddoCode: 'HZBACH012', ddoName: 'DR P K PD', ddoDesignation: 'B D O CHOUPARAN', ddoOffice: 'B D O CHOUPARAN' },
    { ddoCode: 'HZBACH013', ddoName: 'B BHAKLA', ddoDesignation: 'S DA O AGRI FARM HZB', ddoOffice: 'S D A O AGRI FARM HZB' },
    { ddoCode: 'HZBACH014', ddoName: 'B BAXLA', ddoDesignation: 'D A O HZB', ddoOffice: 'D A O HZB' },
    { ddoCode: 'HZBACH018', ddoName: 'D PRASAD', ddoDesignation: 'ASST DIR. CANE DEVP. HZB', ddoOffice: 'ASST.DIR. CANE DEVP. HZB' },
    { ddoCode: 'HZBADJ001', ddoName: 'REG.CIVIL COUR.D.N.MISHRA', ddoDesignation: 'REGISTRAR CIVIL COURT', ddoOffice: 'CIVIL COURT HZB' },
    { ddoCode: 'HZBADJ002', ddoName: 'LALIT PRAKASH CHAUBEY', ddoDesignation: 'LALIT PRAKASH CHAUBEY', ddoOffice: 'CIVIL COURT' },
    { ddoCode: 'HZBADJ032', ddoName: 'DHRUVA CHANDRA MISHRA', ddoDesignation: 'REG.CIVIL COURT HZB', ddoOffice: 'REG.CIVIL COURT HZB' },
    { ddoCode: 'HZBAHY001', ddoName: 'KAILASHPATI THAKUR', ddoDesignation: 'DIST. ANIMAL HUSBANDRY OFFICER', ddoOffice: 'HAZARIBAG' },
    { ddoCode: 'HZBAHY002', ddoName: 'A', ddoDesignation: 'A', ddoOffice: 'A' },
    { ddoCode: 'HZBAHY003', ddoName: 'DR S K GUPTA', ddoDesignation: 'T V O BARKAGAON', ddoOffice: 'T V O BARKAGAON' },
    { ddoCode: 'HZBAHY004', ddoName: 'DR S S SINGH', ddoDesignation: 'MANAGER GOVT C FARM G KARMA', ddoOffice: 'MANAGER GOVT. C FARM G KARMA' },
    { ddoCode: 'HZBAHY006', ddoName: 'DR UDAY KUMAR', ddoDesignation: 'T V O BHURKUNDA', ddoOffice: 'T V O BHURKUNDA' },
    { ddoCode: 'HZBAHY007', ddoName: 'DR VIJAY KUMAR', ddoDesignation: 'T V O', ddoOffice: 'DR VIJAY KR. T V O CHITRAPUR' },
    { ddoCode: 'HZBAHY008', ddoName: 'SUMATI KUJUR', ddoDesignation: 'T V O GHUTWA', ddoOffice: 'T V O GHUTWA' },
    { ddoCode: 'HZBAHY009', ddoName: 'DR KUMAR I B SINHA', ddoDesignation: 'KR. I. B SINHA T V O PATRATU', ddoOffice: 'DR KUMAR I B SINHA T V O PATRATU' },
    { ddoCode: 'HZBAHY011', ddoName: 'DR P K JHA', ddoDesignation: 'T V O KEREDARI', ddoOffice: 'DR P K JHA T V O KEREDARI' },
    { ddoCode: 'HZBAHY012', ddoName: 'DR B KHALKHO', ddoDesignation: 'T V O MORANGI', ddoOffice: 'DR B KHALKO T V O MORANGI' },
    { ddoCode: 'HZBAHY013', ddoName: 'DR ASHOK KR ARUN', ddoDesignation: 'DR A K ARUN TVO PADMA', ddoOffice: 'DR A K ARUN TVO PADMA' },
    { ddoCode: 'HZBAHY014', ddoName: 'DR U MAHTO', ddoDesignation: 'REG. DIRECTOR HUS. HZB', ddoOffice: 'REG. DIRECTOR HUS. HZB' },
    { ddoCode: 'HZBAHY017', ddoName: 'DR U K SINGH', ddoDesignation: 'DR U K SINGH TVO JHUMRA', ddoOffice: 'DR U K SINGH TVO JHUMRA' },
    { ddoCode: 'HZBAHY018', ddoName: 'DR SURENDRA KUMAR', ddoDesignation: 'DR S KUMAR ASST KUKUT OFF HZB', ddoOffice: 'DR S KUMAR ASST KUKUT OFF HZB' },
    { ddoCode: 'HZBAHY020', ddoName: 'DR P K JHA', ddoDesignation: 'DR P K JHA TVO KEREDARI', ddoOffice: 'DR P K JHA TVO KEREDARI' },
    { ddoCode: 'HZBAHY021', ddoName: 'DR K P THAKUR', ddoDesignation: 'ASST FOODER DEV. OFF DUMRIDD', ddoOffice: 'ASST FODDER DEV. OFF DUMRI' },
    { ddoCode: 'HZBAHY022', ddoName: 'DR K P THAKUR', ddoDesignation: 'KEY VILLAGE OFF HZB', ddoOffice: 'KEY VILLAGE OFF HZB' },
    { ddoCode: 'HZBAHY023', ddoName: 'DR MADHU KUMARI', ddoDesignation: 'T V O SULTANA', ddoOffice: 'T V O SULTANA' },
    { ddoCode: 'HZBAHY024', ddoName: 'MANAGER', ddoDesignation: 'MANAGER SADH POSAN G KARMA', ddoOffice: 'MANAGER SAND POSAN G KARMA' },
    { ddoCode: 'HZBAHY025', ddoName: 'K P THAKUR', ddoDesignation: 'D A H O HZB', ddoOffice: 'D A H O HZB' },
    { ddoCode: 'HZBAHY026', ddoName: 'K P THAKUR', ddoDesignation: 'D A H O HZB', ddoOffice: 'D A H O HZB' },
    { ddoCode: 'HZBAHY027', ddoName: 'K P THAKUR', ddoDesignation: 'D A H O HZB', ddoOffice: 'D A H O HZB' },
    { ddoCode: 'HZBAHY028', ddoName: 'K P THAKUR', ddoDesignation: 'D A H O HZB', ddoOffice: 'D A H O HZB' },
    { ddoCode: 'HZBAHY029', ddoName: 'K P THAKUR', ddoDesignation: 'D A H O HZB', ddoOffice: 'D A H O HZB' },
    { ddoCode: 'HZBAHY030', ddoName: 'K P THAKUR', ddoDesignation: 'D A H O ZB', ddoOffice: 'D A H O HZB' },
    { ddoCode: 'HZBAHY031', ddoName: 'K P THAKUR', ddoDesignation: 'D A H O HZB', ddoOffice: 'D A H O HZB' },
    { ddoCode: 'HZBAHY033', ddoName: 'DR B S VERMA', ddoDesignation: 'DR B S VERMA TVO CHOUPARAN', ddoOffice: 'DR B S VERMA TVO CHOUPARAN' },
    { ddoCode: 'HZBAHY034', ddoName: 'S N SINGH', ddoDesignation: 'V S HZB', ddoOffice: 'V S HZB' },
    { ddoCode: 'HZBAHY037', ddoName: 'N K MODI', ddoDesignation: 'S D A H O HZB', ddoOffice: 'S D A H O HZB' },
    { ddoCode: 'HZBAHY038', ddoName: 'N K MODI', ddoDesignation: 'S D A H O HZB', ddoOffice: 'S D A H O HZB' },
    { ddoCode: 'HZBAHY039', ddoName: 'N K MODI', ddoDesignation: 'S D A H O HZB', ddoOffice: 'S D A H O ZB' },
    { ddoCode: 'HZBAHY040', ddoName: 'N K MODI', ddoDesignation: 'S D A H O HZB', ddoOffice: 'S D A H O HZB' },
    { ddoCode: 'HZBAHY041', ddoName: 'N K MODI', ddoDesignation: 'S D A H O HZB', ddoOffice: 'S D A H O HZB' },
    { ddoCode: 'HZBAHY042', ddoName: 'N K MODI', ddoDesignation: 'S D A H O HZB', ddoOffice: 'S D A H O HZB' },
    { ddoCode: 'HZBAHY044', ddoName: 'N K MODI', ddoDesignation: 'S D A H O HZB', ddoOffice: 'S D A H O HZB' },
    { ddoCode: 'HZBAHY045', ddoName: 'SAROJ KUMAR', ddoDesignation: 'SAROJ KUMAR TVO CHANDWAR', ddoOffice: 'SAROJ KUMAR TVO CHANDWAR HZB' },
    { ddoCode: 'HZBAHY046', ddoName: 'K P THAKUR', ddoDesignation: 'D A H O HZB', ddoOffice: 'D A H O HZB' },
    { ddoCode: 'HZBAHY048', ddoName: 'DR SHRAWAN KUMAR', ddoDesignation: 'DR SHARWAN KR TVO BARHI', ddoOffice: 'DR SHARWAN KR TVO BARHI' },
    { ddoCode: 'HZBAHY050', ddoName: 'R K TIRKI', ddoDesignation: 'C I ANIMAL HUS. SCHOOL G KARMA', ddoOffice: 'C I ANIMAL HUS. SCHOOL G KARMA' },
    { ddoCode: 'HZBAHY053', ddoName: 'DR N MODI', ddoDesignation: 'T V O ICHAK', ddoOffice: 'T V O ICHAK' },
    { ddoCode: 'HZBAHY054', ddoName: 'ASST FODDAR DEV. OFF. DUMRI', ddoDesignation: 'ASST. FODDER DEV. DUMRI CAMP H', ddoOffice: 'ASST FODDAR DEV. OFF DUMRI CAMP HZB' },
// addd more here
{ ddoCode: 'HZBAHY055', ddoName: 'DR. BIJAY KISHORE BARA', ddoDesignation: 'TOURING VETERINARY OFFICER', ddoOffice: 'CLASS-1 VETERINARY HOSPITAL, MANDU, RAMGARH' },
{ ddoCode: 'HZBAHY056', ddoName: 'DR.RAKESH RANJAN', ddoDesignation: 'T V O WEST BOKARO', ddoOffice: 'T V O WEST BOKARO' },
{ ddoCode: 'HZBAHY058', ddoName: 'DR. VIJAYANT KUMAR', ddoDesignation: 'TVO GOLA', ddoOffice: 'TVO GOLA' },
{ ddoCode: 'HZBAHY060', ddoName: 'DR. PRAVIN KR. JHA T.V.O. KUJU', ddoDesignation: 'TVO KUJU', ddoOffice: 'TVO KUJU' },
{ ddoCode: 'HZBAHY070', ddoName: 'TVO RAMGARH', ddoDesignation: 'TVO RAMGARH', ddoOffice: 'TVO RAMGARH' },
{ ddoCode: 'HZBAHY072', ddoName: 'DR.MAHESH KR.BURNWAL', ddoDesignation: 'TVO CHITRPUR', ddoOffice: 'TVO CHITRPUR' },
{ ddoCode: 'HZBAHY074', ddoName: 'DR, SHAILENDRA KUMAR TIWARY', ddoDesignation: 'TVO BARGAON', ddoOffice: 'TVO BARGAON' },
{ ddoCode: 'HZBAHY075', ddoName: 'DR BASANT KUMAR', ddoDesignation: 'TVO PATRATU', ddoOffice: 'TVO PATRATU' },
{ ddoCode: 'HZBBLD001', ddoName: 'W', ddoDesignation: 'W', ddoOffice: 'W' },
{ ddoCode: 'HZBBLD002', ddoName: 'E.E.B.DIV.HZBA.PD.SHWA', ddoDesignation: 'E.E.BUILD.DIV.HZB', ddoOffice: 'BUILD.DIV.HZB' },
{ ddoCode: 'HZBBLD005', ddoName: 'A.KUMAR', ddoDesignation: 'SUP.ENG.B.CON.DEP.BUILDING CIR', ddoOffice: 'S.E.B.C.D.B.CIRCLE HZB' },
{ ddoCode: 'HZBCOP001', ddoName: 'IRFAN UJJAIR', ddoDesignation: 'JOINT REGST.CO-OP.SOCITIES HZB', ddoOffice: 'JT.REGIST.CO-OP.SOCITIES HZB' },
{ ddoCode: 'HZBCOP002', ddoName: 'DEVENDRA SINGH', ddoDesignation: 'ASTT.REGIST.CO-OP.SOCITIES HZB', ddoOffice: 'ASST.REGIST.CO-OP.SOCITIES HZB' },
{ ddoCode: 'HZBCOP003', ddoName: 'CHANDESHWAR KAPAR', ddoDesignation: 'DIST.CO-OP.OFFICER HZB', ddoOffice: 'DIST.CO-OP.OFFICER HZB' },
{ ddoCode: 'HZBCOP004', ddoName: 'CHANSHAKHAR KAPAR', ddoDesignation: 'DISTRICT AUDIT OFFICER HZB', ddoOffice: 'DISTRICT AUDIT OFFICE HZB' },
{ ddoCode: 'HZBCSP001', ddoName: 'CHOHNTI PANNA', ddoDesignation: 'R D O NCD HZB', ddoOffice: 'R D O -CUM-DY DIRECTOR FOOD & CIVIL SUPPLY HZB' },
{ ddoCode: 'HZBCSP002', ddoName: 'IBRAR HASAN', ddoDesignation: 'DIST CONS. FORM HZB.', ddoOffice: 'DIST CONS. FORM HZB' },
{ ddoCode: 'HZBCSP003', ddoName: 'B BHUSAN', ddoDesignation: 'D S O HZB', ddoOffice: 'D S O ZB' },
{ ddoCode: 'HZBCSP004', ddoName: 'R P SINGH', ddoDesignation: 'S D O BARHI', ddoOffice: 'S D O BARHI' },
{ ddoCode: 'HZBCSS001', ddoName: 'A', ddoDesignation: 'A', ddoOffice: 'A' },
{ ddoCode: 'HZBCSS002', ddoName: 'C.PANA', ddoDesignation: 'DY.DIRCT.STATISTICS.HZB', ddoOffice: 'DY.DIRCT.STATISTICS.N.C.HZB' },
{ ddoCode: 'HZBCSS003', ddoName: 'SURESH CHAUDHARY', ddoDesignation: 'CENSUS SURVEY & STAT.HZB', ddoOffice: 'C.S.&.STAT.HZB' },
{ ddoCode: 'HZBCSS004', ddoName: 'SURESH KR.CHOUDHRY', ddoDesignation: 'ASSIT.DIR.E.N.C.DIV.HZB', ddoOffice: 'ASSIT.DIR.E.N.C.DIV HZB' },
{ ddoCode: 'HZBCUD001', ddoName: 'A', ddoDesignation: 'A', ddoOffice: '' },
{ ddoCode: 'HZBDAD001', ddoName: 'NARENDRA PRASAD GUPTA', ddoDesignation: 'B.D.O.', ddoOffice: 'PADMA' },
{ ddoCode: 'HZBDAD002', ddoName: 'SMT P.KUMARI GUPTA', ddoDesignation: 'DEPTY.DIR.PANCHYAT NCD HZB', ddoOffice: 'DEPT.DIR.PANCHYAT NCD HZB' },
{ ddoCode: 'HZBDAD004', ddoName: 'N.PD GUPTA', ddoDesignation: 'B.D.O PADMA', ddoOffice: 'B.D.O PADMA' },
{ ddoCode: 'HZBDAD005', ddoName: 'N.PD.GUPTA', ddoDesignation: 'B.D.O PADMA', ddoOffice: 'B.D.O PADMA' },
{ ddoCode: 'HZBDAD006', ddoName: 'P KR. PD.', ddoDesignation: 'B D O', ddoOffice: 'B D O CHOUPARAN' },
{ ddoCode: 'HZBDAD007', ddoName: 'NANDU RAM', ddoDesignation: 'SEC. TO COMM. N CD HZB', ddoOffice: 'SEC. TO COMM NCD HZB' },
{ ddoCode: 'HZBDAD011', ddoName: 'R K GUPTA', ddoDesignation: 'SR. DY. COLLECTOR HZB', ddoOffice: 'SR DY COLLECTOR HZB' },
{ ddoCode: 'HZBDAD013', ddoName: 'N P GUPTA', ddoDesignation: 'B D O BARHI', ddoOffice: 'B D O BARHI' },
{ ddoCode: 'HZBDAD014', ddoName: 'M.LAL RAJAK', ddoDesignation: 'B.D.O.BARKATHA', ddoOffice: 'B.D.O.BARKATHA' },
{ ddoCode: 'HZBDAD015', ddoName: 'B.BHUSAN PD', ddoDesignation: 'B.D.O.CHRCHU HZB', ddoOffice: 'B.D.O.CHURCHU' },
{ ddoCode: 'HZBDAD016', ddoName: 'B.BHUSAN PD', ddoDesignation: 'B.D.O CHURCHU HZB', ddoOffice: 'B.D.O CHURCHU HZB' },
{ ddoCode: 'HZBDAD017', ddoName: 'AMAR KUMAR', ddoDesignation: 'B D O KEREDARI', ddoOffice: 'B D O KEREDARI' },
{ ddoCode: 'HZBDAD018', ddoName: 'R P SINGH', ddoDesignation: 'S D O BARHI', ddoOffice: 'S D O BARHI' },
{ ddoCode: 'HZBDAD020', ddoName: 'S N RAM', ddoDesignation: 'B D O SADAR HZB', ddoOffice: 'B D O SADAR HZB' },
{ ddoCode: 'HZBDAD021', ddoName: 'BHISHAM KUMAR', ddoDesignation: 'B.D.O. KATKAMSADHI', ddoOffice: 'B.D.O.KATKAMSANDHI' },
{ ddoCode: 'HZBDAD023', ddoName: 'B CHOUDHAY', ddoDesignation: 'DY DIRECTOR RAJBASA NCD HZB', ddoOffice: 'DY DIRECTOR RAJBASA NCD HZB' },
{ ddoCode: 'HZBDAD024', ddoName: 'A K SINHA', ddoDesignation: 'E D C SADAR HZB', ddoOffice: 'EDC SADAR HZB' },
{ ddoCode: 'HZBDAD025', ddoName: 'SRI ANIL KUMAR', ddoDesignation: 'B.D.O BISHNUGARH', ddoOffice: 'B.D.O.BISHNUGARH' },
{ ddoCode: 'HZBDAD026', ddoName: 'R K GUPTA', ddoDesignation: 'SR. DY COLLECTOR HZB', ddoOffice: 'SR. DY COLLECTOR HZB' },
{ ddoCode: 'HZBDAD027', ddoName: 'ANIL TIRKI', ddoDesignation: 'B D O BARKAGAON', ddoOffice: 'B D O BARKAGAON' },
{ ddoCode: 'HZBDAD030', ddoName: 'SMT REKHA RANI', ddoDesignation: 'D P O HZB', ddoOffice: 'D P O HZB' },
{ ddoCode: 'HZBDAD033', ddoName: 'DY.COMMISSIONER HZB', ddoDesignation: 'D.C.HZB', ddoOffice: 'OFFICE OF THE D.C.HZB' },
{ ddoCode: 'HZBDAD034', ddoName: 'REENA KUJUR', ddoDesignation: 'EX MAGI. RAMGARH', ddoOffice: 'S D O RAMGARH' },
{ ddoCode: 'HZBDAD035', ddoName: 'POOJA KUMARI', ddoDesignation: 'B D O RAMGARH', ddoOffice: 'B D O RAMGARH' },
{ ddoCode: 'HZBDAD036', ddoName: 'SANJAY KUMAR KONGARI', ddoDesignation: 'B D O MANDU', ddoOffice: 'BLOCK OFFICE MANDU' },
{ ddoCode: 'HZBDAD037', ddoName: 'MANOJ KUMAR GUPTA', ddoDesignation: 'B D O PATRATU', ddoOffice: 'B D O PATRATU' },
// Add more 
{ ddoCode: 'HZBDAD038', ddoName: 'SANJAY SANDIL', ddoDesignation: 'B.D.O GOLA RAMGARH', ddoOffice: 'B.D.O GOLA RAMGARH' },
    { ddoCode: 'HZBDAD039', ddoName: 'ABHAY KUMAR SINHA', ddoDesignation: 'N D C HZB', ddoOffice: 'N D C HZB' },
    { ddoCode: 'HZBDDV001', ddoName: 'ASHOK KUMAR SINHA', ddoDesignation: 'DISTRICT DIARY DEV.OFFICER HZB', ddoOffice: 'DISTRICT DIARY OFFICE HZB' },
    { ddoCode: 'HZBEDN001', ddoName: 'DR.T.MAHTO', ddoDesignation: 'PRINCIPAL', ddoOffice: 'ZILA.SCHOOL.HZB' },
    { ddoCode: 'HZBEDN002', ddoName: 'OM PRAKASH', ddoDesignation: 'HM G.M.S.DUMRAUN', ddoOffice: 'H.M.G.M.S. DUMRAUN' },
    { ddoCode: 'HZBEDN003', ddoName: 'OM PRAKASH', ddoDesignation: 'HM G.M.S.DUMRAUN', ddoOffice: 'HM G.M.S.DUMRAUN' },
    { ddoCode: 'HZBEDN004', ddoName: 'K NAYAK', ddoDesignation: 'H M', ddoOffice: 'H M GOVT M S IGUNIYA' },
    { ddoCode: 'HZBEDN005', ddoName: 'SITA PD', ddoDesignation: 'HM', ddoOffice: 'HM G.B.M.B.CHOUPRAN' },
    { ddoCode: 'HZBEDN006', ddoName: 'R.B.NAYAK', ddoDesignation: 'H.M URDU M.S.DADIKALA', ddoOffice: 'H.M.URDU.M.S.DADIKAL' },
    { ddoCode: 'HZBEDN007', ddoName: 'R.B.NAYAK', ddoDesignation: 'HM G.M.S KERADARI', ddoOffice: 'HM G.M.S KERADARI' },
    { ddoCode: 'HZBEDN008', ddoName: 'REVA MISTRI', ddoDesignation: 'HM ADRAS.M.S BARKAGWA', ddoOffice: 'HM A.M.S.BARKAGWA' },
    { ddoCode: 'HZBEDN009', ddoName: 'R.B.NAYAK', ddoDesignation: 'HM M.S.JARJARA', ddoOffice: 'HM.M.S.JARJARA' },
    { ddoCode: 'HZBEDN010', ddoName: 'R.B.NAYAK', ddoDesignation: 'HM M.S.AMBAJIT', ddoOffice: 'HM M.S AMBAJIT' },
    { ddoCode: 'HZBEDN011', ddoName: 'R.B.NAYAK', ddoDesignation: 'HM M.S.BUNDU KERADARI', ddoOffice: 'HM M.S.BUNDU KERADARI' },
    { ddoCode: 'HZBEDN012', ddoName: 'R.B.NAYAK', ddoDesignation: 'HM G.M.S.BARKAGWAN', ddoOffice: 'HM G.M.S.BARKAGWAN' },
    { ddoCode: 'HZBEDN013', ddoName: 'R.B.NAYAK', ddoDesignation: 'HM M.S.JUGRA BARKAGWAN', ddoOffice: 'HM M.S.JUGRA BARKAGWAN' },
    { ddoCode: 'HZBEDN014', ddoName: 'S.PD.SINGH', ddoDesignation: 'HM M.S.HARLI', ddoOffice: 'HM.M.S.HARLI' },
    { ddoCode: 'HZBEDN015', ddoName: 'K.NAYAK', ddoDesignation: 'HM G.M.S.CHOUPRAN', ddoOffice: 'HM G.M.S.CHOUPRAN' },
    { ddoCode: 'HZBEDN016', ddoName: 'S.P.SINGH', ddoDesignation: 'HM G.M.S.PETO KERADARI', ddoOffice: 'HM G.M.S.PETO KERADARI' },
    { ddoCode: 'HZBEDN017', ddoName: 'S.PD.SINGH', ddoDesignation: 'HM G.M.S GARIKALA KERADARI', ddoOffice: 'HM G.M.S GARIKAL KERADARI' },
    { ddoCode: 'HZBEDN018', ddoName: 'R.B.NAYAK', ddoDesignation: 'HM.G.M.S GOSIAN BALIA BARKAGWA', ddoOffice: 'HM G.M.S GOSIAN BALIA BARKAGWAN' },
    { ddoCode: 'HZBEDN019', ddoName: 'R.D.GOPE', ddoDesignation: 'HM G.M.S.GARWA BARHI- 1', ddoOffice: 'HM G.M.S.GARWA BARHI-1' },
    { ddoCode: 'HZBEDN020', ddoName: 'R.D.GOPE', ddoDesignation: 'HM G.M.S KORHAR BARHI-1', ddoOffice: 'HM G.M.S KORHAR BARHI-1' },
    { ddoCode: 'HZBEDN021', ddoName: 'N.GOPE', ddoDesignation: 'HM G.M.S.GARYA BARKATHA', ddoOffice: 'HM G.M.S.GARYA BARKATHA' },
    { ddoCode: 'HZBEDN022', ddoName: 'I AHMAD', ddoDesignation: 'HM G.M.S.KORRA BOYS M.S.HZB', ddoOffice: 'H M KORRA BOYS M S HZB' },
    { ddoCode: 'HZBEDN023', ddoName: 'N.LAL ROY', ddoDesignation: 'HM.G.M.S.KHAMBHWA', ddoOffice: 'HM G.M.S.KHAMBHWA BISHNUGARH' },
    { ddoCode: 'HZBEDN024', ddoName: 'N.LAL.ROY', ddoDesignation: 'HM G.M.S.TATIJHARIYA HZB', ddoOffice: 'HM G.M.STATIJHARIYA HZB' },
    { ddoCode: 'HZBEDN026', ddoName: 'SMT I.N.TOPO', ddoDesignation: 'D.S.E HZBE.', ddoOffice: 'D.S.E. HZB' },
    { ddoCode: 'HZBEDN027', ddoName: 'UMA SINHA', ddoDesignation: 'HM G.M.S.KANCHANPUR KATKAM', ddoOffice: 'H M M S KANCHANPUR KATKAM' },
    { ddoCode: 'HZBEDN028', ddoName: 'NARAMADESHWAR GURU', ddoDesignation: 'HM G.M.S.PANDEYBARA', ddoOffice: 'HM G.M.S.PANDEYBARA' },
    { ddoCode: 'HZBEDN029', ddoName: 'GOPLE BHAGAT', ddoDesignation: 'B.E.E.O.BARHI', ddoOffice: 'B.E.E.O.BARHI' },
    { ddoCode: 'HZBEDN030', ddoName: 'N.GURU', ddoDesignation: 'HM.M.S.RAMPUR', ddoOffice: 'HM.M.S.RAMPUR CHOUPRAN' },
    { ddoCode: 'HZBEDN031', ddoName: 'C.BHARTI', ddoDesignation: 'B.E.E.O.KATKAMSANDI', ddoOffice: 'B.E.E.O KATKAMSANDI' },
    { ddoCode: 'HZBEDN032', ddoName: 'C.PANDIT', ddoDesignation: 'B.E.E.O.KATKAMSANDI-2', ddoOffice: 'B.E.E.O.KATKAMSANDI-02' },
    { ddoCode: 'HZBEDN033', ddoName: 'SMT PUNAM SINGH', ddoDesignation: 'PRINCIPAL G G PLUS 2 H S HZB', ddoOffice: 'PRINCIPAL GOVT. GIRLS PLUS 2 H S HZB' },
    { ddoCode: 'HZBEDN034', ddoName: 'SMT PUNAM SINGH', ddoDesignation: 'PRINCIPAL GOVT GIRLS H S HZB', ddoOffice: 'PRINCIPAL GOVT GIRLS H S HZB' },
    { ddoCode: 'HZBEDN035', ddoName: 'POONAM KUMARI', ddoDesignation: 'PRINICIPAL GOVT T T COLLEGE HZ', ddoOffice: 'PRINCIPAL GOVT. T T COLLEGE HZB' },
    { ddoCode: 'HZBEDN036', ddoName: 'SRI R.N.KUMAR', ddoDesignation: 'HM G.M.S.BISHNUGARH', ddoOffice: 'HM G.M.S.BISHNUGARH' },
    { ddoCode: 'HZBEDN037', ddoName: 'GANESH RAM', ddoDesignation: 'H M GOVT M S BASADIH CHURCHU', ddoOffice: 'H M GOVT M S BASADIH CHURCHU' },
    { ddoCode: 'HZBEDN038', ddoName: 'GANESH RAM', ddoDesignation: 'H M GOVT M S KURRA CHURCHU', ddoOffice: 'H M GOVT M S KURRA CHURCHU' },
    { ddoCode: 'HZBEDN039', ddoName: 'GANESH RAM', ddoDesignation: 'H M GOVT M S BHURKUNDA CHURCHU', ddoOffice: 'H M GOVT M S BHURKUNDA CHURCHU' },
    { ddoCode: 'HZBEDN040', ddoName: 'OM PARKASH', ddoDesignation: 'H M GOVT GIRLS M S ICHAK', ddoOffice: 'H M GOVT GIRLS M S ICHAK' },
    { ddoCode: 'HZBEDN041', ddoName: 'OM PARKASH', ddoDesignation: 'H M GOVT M S DARIYA ICHAK', ddoOffice: 'H M GOVT. M S DARIYA ICHAK' },
    { ddoCode: 'HZBEDN042', ddoName: 'UMA SINHA', ddoDesignation: 'HM KRANCH GIRLS M.S.KORRA MUN', ddoOffice: 'HM K.G.M.S.KORRA MUNCIPPLTY HZB' },
    { ddoCode: 'HZBEDN043', ddoName: 'NUZHAT PARVEEN', ddoDesignation: 'H M GOVT M S SULTANA', ddoOffice: 'H M GOVT M S SULTANA' },
    { ddoCode: 'HZBEDN044', ddoName: 'NUZHAT PARVEEN', ddoDesignation: 'H M GOVT M S SALGAWAN', ddoOffice: 'H M GOVT M S SALGAWAN' },
    { ddoCode: 'HZBEDN045', ddoName: 'KISHOR KUMAR VARMA', ddoDesignation: 'B.E.E.O.CHOUPRAN-1', ddoOffice: 'B.E.E.O CHOUPRAN-1' },
    { ddoCode: 'HZBEDN046', ddoName: 'HARINARYAN PD', ddoDesignation: 'B.E.E.O.KERADARI', ddoOffice: 'B.E.E.O KERADARI' },
    { ddoCode: 'HZBEDN047', ddoName: 'OM PARKASH', ddoDesignation: 'H M M S BONGA ICHAK', ddoOffice: 'H M M S BONGA ICHAK' },
    { ddoCode: 'HZBEDN048', ddoName: 'OM PARKASH', ddoDesignation: 'H M', ddoOffice: 'H M GOVT. M S NAWADIH BARHI -1' },
    { ddoCode: 'HZBEDN049', ddoName: 'T.RAM.MAHTO', ddoDesignation: 'HM M/S.GIDDI A. BOYS, CHURCHU', ddoOffice: 'HM M/S.GIDDI A. BOYS, CHURCHU' },
    { ddoCode: 'HZBEDN050', ddoName: 'UMA SINHA', ddoDesignation: 'HM G.M.S.BODDAM BAZAR HZB', ddoOffice: 'HM G.M.S.BODDAM BAZAR HZB' },
    { ddoCode: 'HZBEDN051', ddoName: 'UMA SINHA', ddoDesignation: 'HM G.GIRLS.M.S.NAWABGANG HZB'},
    // add more data
];

const createDDOEntries = async () => {
    const promises = ddoData.map(async (row) => {
        await prisma.ddo.create({ data: row });
    });

    await Promise.all(promises);
};

createDDOEntries()
    .then(() => {
        console.log('Data inserted successfully');
    })
    .catch((error) => {
        console.error('Error inserting data:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

    
  }
  
  
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
