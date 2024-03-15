// import employee_seeder from "./seeder/employee_seeder";
//   await employee_seeder();

// import { PrismaClient} from "@prisma/client";

import { PrismaClient } from "@prisma/client";
// import {  modules } from "@prisma/client";

import readXlsxFile from "read-excel-file/node";

// import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();


const ddoSeeder = async () => {
  const file_path = "./prisma/data/ddo_code.xlsx";

  readXlsxFile(file_path).then(async (rows) => {
    const n = rows.length;
    for (let i = 1; i < n; i++) {
      const row = rows[i];
      const record = {

        ddoCode: row[0] == null ? "": row[0].toString(),
        ddoName: row[1] == null ? "": row[1].toString(),
        ddoDesignation: row[2] == null ? "": row[2].toString(),
        ddoOffice: row[3] == null ? "": row[3].toString(),
      };

      await prisma.ddo.create({ data: record });
    }
  });
};


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
       

    await ddoSeeder();
    
    
  }
  
  
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
