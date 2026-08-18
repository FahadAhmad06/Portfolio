import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

let serviceAccountAuth;

export async function getSheet() {
  if (!process.env.GOOGLE_SHEET_ID) {
    throw new Error("Missing GOOGLE_SHEET_ID in .env");
  }

  if (!serviceAccountAuth) {
    serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : '',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  }
  
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
  
  await doc.loadInfo(); // loads document properties and worksheets
  return doc;
}

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
