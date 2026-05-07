export interface PlacementRecord {
  sl_no: number;
  gender: string;
  ssc_p: number;
  ssc_b: string;
  hsc_p: number;
  hsc_b: string;
  hsc_s: string;
  degree_p: number;
  degree_t: string;
  workex: string;
  etest_p: number;
  specialisation: string;
  mba_p: number;
  status: string;
  salary: number | null;
}

export const placementData: PlacementRecord[] = [
  { sl_no: 1, gender: "M", ssc_p: 67.00, ssc_b: "Others", hsc_p: 91.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 58.00, degree_t: "Sci&Tech", workex: "No", etest_p: 55, specialisation: "Mkt&HR", mba_p: 58.8, status: "Placed", salary: 270000 },
  { sl_no: 2, gender: "M", ssc_p: 79.33, ssc_b: "Central", hsc_p: 78.33, hsc_b: "Others", hsc_s: "Science", degree_p: 77.48, degree_t: "Sci&Tech", workex: "Yes", etest_p: 86.5, specialisation: "Mkt&Fin", mba_p: 66.28, status: "Placed", salary: 200000 },
  { sl_no: 3, gender: "M", ssc_p: 65.00, ssc_b: "Central", hsc_p: 68.00, hsc_b: "Central", hsc_s: "Arts", degree_p: 64.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 75, specialisation: "Mkt&Fin", mba_p: 57.8, status: "Placed", salary: 250000 },
  { sl_no: 4, gender: "M", ssc_p: 56.00, ssc_b: "Central", hsc_p: 52.00, hsc_b: "Central", hsc_s: "Science", degree_p: 52.00, degree_t: "Sci&Tech", workex: "No", etest_p: 66, specialisation: "Mkt&HR", mba_p: 59.43, status: "Not Placed", salary: null },
  { sl_no: 5, gender: "M", ssc_p: 85.80, ssc_b: "Central", hsc_p: 73.60, hsc_b: "Central", hsc_s: "Commerce", degree_p: 73.30, degree_t: "Comm&Mgmt", workex: "No", etest_p: 96.8, specialisation: "Mkt&Fin", mba_p: 55.5, status: "Placed", salary: 425000 },
  { sl_no: 6, gender: "M", ssc_p: 55.00, ssc_b: "Others", hsc_p: 49.80, hsc_b: "Others", hsc_s: "Science", degree_p: 67.25, degree_t: "Sci&Tech", workex: "Yes", etest_p: 55, specialisation: "Mkt&Fin", mba_p: 51.58, status: "Not Placed", salary: null },
  { sl_no: 7, gender: "F", ssc_p: 46.00, ssc_b: "Others", hsc_p: 49.20, hsc_b: "Others", hsc_s: "Commerce", degree_p: 79.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 74.28, specialisation: "Mkt&Fin", mba_p: 53.29, status: "Not Placed", salary: null },
  { sl_no: 8, gender: "M", ssc_p: 82.00, ssc_b: "Central", hsc_p: 64.00, hsc_b: "Central", hsc_s: "Science", degree_p: 66.00, degree_t: "Sci&Tech", workex: "Yes", etest_p: 67, specialisation: "Mkt&Fin", mba_p: 62.14, status: "Placed", salary: 252000 },
  { sl_no: 9, gender: "M", ssc_p: 73.00, ssc_b: "Central", hsc_p: 79.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 72.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 91.34, specialisation: "Mkt&Fin", mba_p: 61.29, status: "Placed", salary: 231000 },
  { sl_no: 10, gender: "M", ssc_p: 58.00, ssc_b: "Central", hsc_p: 70.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 61.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 54, specialisation: "Mkt&Fin", mba_p: 52.21, status: "Not Placed", salary: null },
  { sl_no: 11, gender: "M", ssc_p: 58.00, ssc_b: "Central", hsc_p: 61.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 60.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 62, specialisation: "Mkt&HR", mba_p: 60.85, status: "Placed", salary: 260000 },
  { sl_no: 12, gender: "M", ssc_p: 69.60, ssc_b: "Central", hsc_p: 68.40, hsc_b: "Central", hsc_s: "Commerce", degree_p: 78.30, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 60, specialisation: "Mkt&Fin", mba_p: 63.7, status: "Placed", salary: 250000 },
  { sl_no: 13, gender: "F", ssc_p: 47.00, ssc_b: "Central", hsc_p: 55.00, hsc_b: "Others", hsc_s: "Science", degree_p: 65.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 62, specialisation: "Mkt&HR", mba_p: 65.04, status: "Not Placed", salary: null },
  { sl_no: 14, gender: "F", ssc_p: 77.00, ssc_b: "Central", hsc_p: 87.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 59.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 68, specialisation: "Mkt&Fin", mba_p: 68.63, status: "Placed", salary: 218000 },
  { sl_no: 15, gender: "M", ssc_p: 62.00, ssc_b: "Central", hsc_p: 47.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 50.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 76, specialisation: "Mkt&HR", mba_p: 54.96, status: "Not Placed", salary: null },
  { sl_no: 16, gender: "F", ssc_p: 65.00, ssc_b: "Central", hsc_p: 75.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 69.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 72, specialisation: "Mkt&Fin", mba_p: 64.66, status: "Placed", salary: 200000 },
  { sl_no: 17, gender: "M", ssc_p: 63.00, ssc_b: "Central", hsc_p: 66.20, hsc_b: "Central", hsc_s: "Commerce", degree_p: 65.60, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 60, specialisation: "Mkt&Fin", mba_p: 62.54, status: "Placed", salary: 300000 },
  { sl_no: 18, gender: "F", ssc_p: 55.00, ssc_b: "Central", hsc_p: 67.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 64.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 60, specialisation: "Mkt&Fin", mba_p: 67.28, status: "Not Placed", salary: null },
  { sl_no: 19, gender: "F", ssc_p: 63.00, ssc_b: "Central", hsc_p: 66.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 64.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 68, specialisation: "Mkt&HR", mba_p: 64.08, status: "Not Placed", salary: null },
  { sl_no: 20, gender: "M", ssc_p: 60.00, ssc_b: "Others", hsc_p: 67.00, hsc_b: "Others", hsc_s: "Arts", degree_p: 70.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 50.48, specialisation: "Mkt&Fin", mba_p: 77.89, status: "Placed", salary: 236000 },
  { sl_no: 21, gender: "M", ssc_p: 62.00, ssc_b: "Others", hsc_p: 65.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 66.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 50, specialisation: "Mkt&HR", mba_p: 56.7, status: "Placed", salary: 265000 },
  { sl_no: 22, gender: "F", ssc_p: 79.00, ssc_b: "Others", hsc_p: 76.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 85.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 95, specialisation: "Mkt&Fin", mba_p: 69.06, status: "Placed", salary: 393000 },
  { sl_no: 23, gender: "F", ssc_p: 69.80, ssc_b: "Others", hsc_p: 60.80, hsc_b: "Others", hsc_s: "Science", degree_p: 72.23, degree_t: "Sci&Tech", workex: "No", etest_p: 55.53, specialisation: "Mkt&HR", mba_p: 68.81, status: "Placed", salary: 360000 },
  { sl_no: 24, gender: "F", ssc_p: 77.40, ssc_b: "Others", hsc_p: 60.00, hsc_b: "Others", hsc_s: "Science", degree_p: 64.74, degree_t: "Sci&Tech", workex: "Yes", etest_p: 92, specialisation: "Mkt&Fin", mba_p: 63.62, status: "Placed", salary: 300000 },
  { sl_no: 25, gender: "M", ssc_p: 76.50, ssc_b: "Others", hsc_p: 97.70, hsc_b: "Others", hsc_s: "Science", degree_p: 78.86, degree_t: "Sci&Tech", workex: "No", etest_p: 97.4, specialisation: "Mkt&Fin", mba_p: 74.01, status: "Placed", salary: 360000 },
  { sl_no: 26, gender: "F", ssc_p: 52.58, ssc_b: "Others", hsc_p: 54.60, hsc_b: "Central", hsc_s: "Commerce", degree_p: 50.20, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 76, specialisation: "Mkt&Fin", mba_p: 65.33, status: "Not Placed", salary: null },
  { sl_no: 27, gender: "M", ssc_p: 71.00, ssc_b: "Others", hsc_p: 79.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 66.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 94, specialisation: "Mkt&Fin", mba_p: 57.55, status: "Placed", salary: 240000 },
  { sl_no: 28, gender: "M", ssc_p: 63.00, ssc_b: "Others", hsc_p: 67.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 66.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 68, specialisation: "Mkt&HR", mba_p: 57.69, status: "Placed", salary: 265000 },
  { sl_no: 29, gender: "M", ssc_p: 76.76, ssc_b: "Others", hsc_p: 76.50, hsc_b: "Others", hsc_s: "Commerce", degree_p: 67.50, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 73.35, specialisation: "Mkt&Fin", mba_p: 64.15, status: "Placed", salary: 350000 },
  { sl_no: 30, gender: "M", ssc_p: 62.00, ssc_b: "Central", hsc_p: 67.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 58.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 77, specialisation: "Mkt&Fin", mba_p: 51.29, status: "Not Placed", salary: null },
  { sl_no: 31, gender: "F", ssc_p: 64.00, ssc_b: "Central", hsc_p: 73.50, hsc_b: "Central", hsc_s: "Commerce", degree_p: 73.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 52, specialisation: "Mkt&HR", mba_p: 56.7, status: "Placed", salary: 250000 },
  { sl_no: 32, gender: "F", ssc_p: 67.00, ssc_b: "Central", hsc_p: 53.00, hsc_b: "Central", hsc_s: "Science", degree_p: 65.00, degree_t: "Sci&Tech", workex: "No", etest_p: 64, specialisation: "Mkt&HR", mba_p: 58.32, status: "Not Placed", salary: null },
  { sl_no: 33, gender: "F", ssc_p: 61.00, ssc_b: "Central", hsc_p: 81.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 66.40, degree_t: "Comm&Mgmt", workex: "No", etest_p: 50.89, specialisation: "Mkt&HR", mba_p: 62.21, status: "Placed", salary: 278000 },
  { sl_no: 34, gender: "F", ssc_p: 87.00, ssc_b: "Others", hsc_p: 65.00, hsc_b: "Others", hsc_s: "Science", degree_p: 81.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 88, specialisation: "Mkt&Fin", mba_p: 72.78, status: "Placed", salary: 260000 },
  { sl_no: 35, gender: "M", ssc_p: 62.00, ssc_b: "Others", hsc_p: 51.00, hsc_b: "Others", hsc_s: "Science", degree_p: 52.00, degree_t: "Others", workex: "No", etest_p: 68.44, specialisation: "Mkt&HR", mba_p: 62.77, status: "Not Placed", salary: null },
  { sl_no: 36, gender: "F", ssc_p: 69.00, ssc_b: "Central", hsc_p: 78.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 72.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 71, specialisation: "Mkt&HR", mba_p: 62.74, status: "Placed", salary: 300000 },
  { sl_no: 37, gender: "M", ssc_p: 51.00, ssc_b: "Central", hsc_p: 44.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 57.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 64, specialisation: "Mkt&Fin", mba_p: 51.45, status: "Not Placed", salary: null },
  { sl_no: 38, gender: "F", ssc_p: 79.00, ssc_b: "Central", hsc_p: 76.00, hsc_b: "Central", hsc_s: "Science", degree_p: 65.60, degree_t: "Sci&Tech", workex: "No", etest_p: 58, specialisation: "Mkt&HR", mba_p: 55.47, status: "Placed", salary: 320000 },
  { sl_no: 39, gender: "F", ssc_p: 73.00, ssc_b: "Others", hsc_p: 58.00, hsc_b: "Others", hsc_s: "Science", degree_p: 66.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 53.7, specialisation: "Mkt&HR", mba_p: 56.86, status: "Placed", salary: 240000 },
  { sl_no: 40, gender: "M", ssc_p: 81.00, ssc_b: "Others", hsc_p: 68.00, hsc_b: "Others", hsc_s: "Science", degree_p: 64.00, degree_t: "Sci&Tech", workex: "No", etest_p: 93, specialisation: "Mkt&Fin", mba_p: 62.56, status: "Placed", salary: 411000 },
  { sl_no: 41, gender: "F", ssc_p: 78.00, ssc_b: "Central", hsc_p: 77.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 80.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 60, specialisation: "Mkt&Fin", mba_p: 66.72, status: "Placed", salary: 287000 },
  { sl_no: 42, gender: "F", ssc_p: 74.00, ssc_b: "Others", hsc_p: 63.16, hsc_b: "Others", hsc_s: "Commerce", degree_p: 65.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 65, specialisation: "Mkt&HR", mba_p: 69.76, status: "Not Placed", salary: null },
  { sl_no: 43, gender: "M", ssc_p: 49.00, ssc_b: "Others", hsc_p: 39.00, hsc_b: "Central", hsc_s: "Science", degree_p: 65.00, degree_t: "Others", workex: "No", etest_p: 63, specialisation: "Mkt&Fin", mba_p: 51.21, status: "Not Placed", salary: null },
  { sl_no: 44, gender: "M", ssc_p: 87.00, ssc_b: "Others", hsc_p: 87.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 68.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 95, specialisation: "Mkt&HR", mba_p: 62.9, status: "Placed", salary: 300000 },
  { sl_no: 45, gender: "F", ssc_p: 77.00, ssc_b: "Others", hsc_p: 73.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 81.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 89, specialisation: "Mkt&Fin", mba_p: 69.7, status: "Placed", salary: 200000 },
  { sl_no: 46, gender: "F", ssc_p: 76.00, ssc_b: "Central", hsc_p: 64.00, hsc_b: "Central", hsc_s: "Science", degree_p: 72.00, degree_t: "Sci&Tech", workex: "No", etest_p: 58, specialisation: "Mkt&HR", mba_p: 66.53, status: "Not Placed", salary: null },
  { sl_no: 47, gender: "F", ssc_p: 70.89, ssc_b: "Others", hsc_p: 71.98, hsc_b: "Others", hsc_s: "Science", degree_p: 65.60, degree_t: "Comm&Mgmt", workex: "No", etest_p: 68, specialisation: "Mkt&HR", mba_p: 71.63, status: "Not Placed", salary: null },
  { sl_no: 48, gender: "M", ssc_p: 63.00, ssc_b: "Central", hsc_p: 60.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 57.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 78, specialisation: "Mkt&Fin", mba_p: 54.55, status: "Placed", salary: 204000 },
  { sl_no: 49, gender: "M", ssc_p: 63.00, ssc_b: "Others", hsc_p: 62.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 68.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 64, specialisation: "Mkt&Fin", mba_p: 62.46, status: "Placed", salary: 250000 },
  { sl_no: 50, gender: "F", ssc_p: 50.00, ssc_b: "Others", hsc_p: 37.00, hsc_b: "Others", hsc_s: "Arts", degree_p: 52.00, degree_t: "Others", workex: "No", etest_p: 65, specialisation: "Mkt&HR", mba_p: 56.11, status: "Not Placed", salary: null },
  { sl_no: 51, gender: "F", ssc_p: 75.20, ssc_b: "Central", hsc_p: 73.20, hsc_b: "Central", hsc_s: "Science", degree_p: 68.40, degree_t: "Comm&Mgmt", workex: "No", etest_p: 65, specialisation: "Mkt&HR", mba_p: 62.98, status: "Placed", salary: 200000 },
  { sl_no: 52, gender: "M", ssc_p: 54.40, ssc_b: "Central", hsc_p: 61.12, hsc_b: "Central", hsc_s: "Commerce", degree_p: 56.20, degree_t: "Comm&Mgmt", workex: "No", etest_p: 67, specialisation: "Mkt&HR", mba_p: 62.65, status: "Not Placed", salary: null },
  { sl_no: 53, gender: "F", ssc_p: 40.89, ssc_b: "Others", hsc_p: 45.83, hsc_b: "Others", hsc_s: "Commerce", degree_p: 53.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 71.2, specialisation: "Mkt&HR", mba_p: 65.49, status: "Not Placed", salary: null },
  { sl_no: 54, gender: "M", ssc_p: 80.00, ssc_b: "Others", hsc_p: 70.00, hsc_b: "Others", hsc_s: "Science", degree_p: 72.00, degree_t: "Sci&Tech", workex: "No", etest_p: 87, specialisation: "Mkt&HR", mba_p: 71.04, status: "Placed", salary: 450000 },
  { sl_no: 55, gender: "F", ssc_p: 74.00, ssc_b: "Central", hsc_p: 60.00, hsc_b: "Others", hsc_s: "Science", degree_p: 69.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 78, specialisation: "Mkt&HR", mba_p: 65.56, status: "Placed", salary: 216000 },
  { sl_no: 56, gender: "M", ssc_p: 60.40, ssc_b: "Central", hsc_p: 66.60, hsc_b: "Others", hsc_s: "Science", degree_p: 65.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 71, specialisation: "Mkt&HR", mba_p: 52.71, status: "Placed", salary: 220000 },
  { sl_no: 57, gender: "M", ssc_p: 63.00, ssc_b: "Others", hsc_p: 71.40, hsc_b: "Others", hsc_s: "Commerce", degree_p: 61.40, degree_t: "Comm&Mgmt", workex: "No", etest_p: 68, specialisation: "Mkt&Fin", mba_p: 66.88, status: "Placed", salary: 240000 },
  { sl_no: 58, gender: "M", ssc_p: 68.00, ssc_b: "Central", hsc_p: 76.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 74.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 80, specialisation: "Mkt&Fin", mba_p: 63.59, status: "Placed", salary: 360000 },
  { sl_no: 59, gender: "M", ssc_p: 74.00, ssc_b: "Central", hsc_p: 62.00, hsc_b: "Others", hsc_s: "Science", degree_p: 68.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 74, specialisation: "Mkt&Fin", mba_p: 57.99, status: "Placed", salary: 268000 },
  { sl_no: 60, gender: "M", ssc_p: 52.60, ssc_b: "Central", hsc_p: 65.58, hsc_b: "Others", hsc_s: "Science", degree_p: 72.11, degree_t: "Sci&Tech", workex: "No", etest_p: 57.6, specialisation: "Mkt&Fin", mba_p: 56.66, status: "Placed", salary: 265000 },
  { sl_no: 61, gender: "M", ssc_p: 74.00, ssc_b: "Central", hsc_p: 70.00, hsc_b: "Central", hsc_s: "Science", degree_p: 72.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 60, specialisation: "Mkt&Fin", mba_p: 57.24, status: "Placed", salary: 260000 },
  { sl_no: 62, gender: "M", ssc_p: 84.20, ssc_b: "Central", hsc_p: 73.40, hsc_b: "Central", hsc_s: "Commerce", degree_p: 66.89, degree_t: "Comm&Mgmt", workex: "No", etest_p: 61.6, specialisation: "Mkt&Fin", mba_p: 62.48, status: "Placed", salary: 300000 },
  { sl_no: 63, gender: "F", ssc_p: 86.50, ssc_b: "Others", hsc_p: 64.20, hsc_b: "Others", hsc_s: "Science", degree_p: 67.40, degree_t: "Sci&Tech", workex: "No", etest_p: 59, specialisation: "Mkt&Fin", mba_p: 59.69, status: "Placed", salary: 240000 },
  { sl_no: 64, gender: "M", ssc_p: 61.00, ssc_b: "Others", hsc_p: 70.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 64.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 68.5, specialisation: "Mkt&HR", mba_p: 59.5, status: "Not Placed", salary: null },
  { sl_no: 65, gender: "M", ssc_p: 80.00, ssc_b: "Others", hsc_p: 73.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 75.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 61, specialisation: "Mkt&Fin", mba_p: 58.78, status: "Placed", salary: 240000 },
  { sl_no: 66, gender: "M", ssc_p: 54.00, ssc_b: "Others", hsc_p: 47.00, hsc_b: "Others", hsc_s: "Science", degree_p: 57.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 89.69, specialisation: "Mkt&HR", mba_p: 57.1, status: "Not Placed", salary: null },
  { sl_no: 67, gender: "M", ssc_p: 83.00, ssc_b: "Others", hsc_p: 74.00, hsc_b: "Others", hsc_s: "Science", degree_p: 66.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 68.92, specialisation: "Mkt&HR", mba_p: 58.46, status: "Placed", salary: 275000 },
  { sl_no: 68, gender: "M", ssc_p: 80.92, ssc_b: "Others", hsc_p: 78.50, hsc_b: "Others", hsc_s: "Commerce", degree_p: 67.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 68.71, specialisation: "Mkt&Fin", mba_p: 60.99, status: "Placed", salary: 275000 },
  { sl_no: 69, gender: "F", ssc_p: 69.70, ssc_b: "Central", hsc_p: 47.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 72.70, degree_t: "Sci&Tech", workex: "No", etest_p: 79, specialisation: "Mkt&HR", mba_p: 59.24, status: "Not Placed", salary: null },
  { sl_no: 70, gender: "M", ssc_p: 73.00, ssc_b: "Central", hsc_p: 73.00, hsc_b: "Central", hsc_s: "Science", degree_p: 66.00, degree_t: "Sci&Tech", workex: "Yes", etest_p: 70, specialisation: "Mkt&Fin", mba_p: 68.07, status: "Placed", salary: 275000 },
  { sl_no: 71, gender: "M", ssc_p: 82.00, ssc_b: "Others", hsc_p: 61.00, hsc_b: "Others", hsc_s: "Science", degree_p: 62.00, degree_t: "Sci&Tech", workex: "No", etest_p: 89, specialisation: "Mkt&Fin", mba_p: 65.45, status: "Placed", salary: 360000 },
  { sl_no: 72, gender: "M", ssc_p: 75.00, ssc_b: "Others", hsc_p: 70.29, hsc_b: "Others", hsc_s: "Commerce", degree_p: 71.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 95, specialisation: "Mkt&Fin", mba_p: 66.94, status: "Placed", salary: 240000 },
  { sl_no: 73, gender: "M", ssc_p: 84.86, ssc_b: "Others", hsc_p: 67.00, hsc_b: "Others", hsc_s: "Science", degree_p: 78.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 95.5, specialisation: "Mkt&Fin", mba_p: 68.53, status: "Placed", salary: 240000 },
  { sl_no: 74, gender: "M", ssc_p: 64.60, ssc_b: "Central", hsc_p: 83.83, hsc_b: "Others", hsc_s: "Commerce", degree_p: 71.72, degree_t: "Comm&Mgmt", workex: "No", etest_p: 86, specialisation: "Mkt&Fin", mba_p: 59.75, status: "Placed", salary: 218000 },
  { sl_no: 75, gender: "M", ssc_p: 56.60, ssc_b: "Central", hsc_p: 64.80, hsc_b: "Central", hsc_s: "Commerce", degree_p: 70.20, degree_t: "Comm&Mgmt", workex: "No", etest_p: 84.27, specialisation: "Mkt&Fin", mba_p: 67.2, status: "Placed", salary: 336000 },
  { sl_no: 76, gender: "F", ssc_p: 59.00, ssc_b: "Central", hsc_p: 62.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 77.50, degree_t: "Comm&Mgmt", workex: "No", etest_p: 74, specialisation: "Mkt&HR", mba_p: 67, status: "Not Placed", salary: null },
  { sl_no: 77, gender: "F", ssc_p: 66.50, ssc_b: "Others", hsc_p: 70.40, hsc_b: "Central", hsc_s: "Arts", degree_p: 71.93, degree_t: "Comm&Mgmt", workex: "No", etest_p: 61, specialisation: "Mkt&Fin", mba_p: 64.27, status: "Placed", salary: 230000 },
  { sl_no: 78, gender: "M", ssc_p: 64.00, ssc_b: "Others", hsc_p: 80.00, hsc_b: "Others", hsc_s: "Science", degree_p: 65.00, degree_t: "Sci&Tech", workex: "Yes", etest_p: 69, specialisation: "Mkt&Fin", mba_p: 57.65, status: "Placed", salary: 500000 },
  { sl_no: 79, gender: "M", ssc_p: 84.00, ssc_b: "Others", hsc_p: 90.90, hsc_b: "Others", hsc_s: "Science", degree_p: 64.50, degree_t: "Sci&Tech", workex: "No", etest_p: 86.04, specialisation: "Mkt&Fin", mba_p: 59.42, status: "Placed", salary: 270000 },
  { sl_no: 80, gender: "F", ssc_p: 69.00, ssc_b: "Central", hsc_p: 62.00, hsc_b: "Central", hsc_s: "Science", degree_p: 66.00, degree_t: "Sci&Tech", workex: "No", etest_p: 75, specialisation: "Mkt&HR", mba_p: 67.99, status: "Not Placed", salary: null },
  { sl_no: 81, gender: "F", ssc_p: 69.00, ssc_b: "Others", hsc_p: 62.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 69.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 67, specialisation: "Mkt&HR", mba_p: 62.35, status: "Placed", salary: 240000 },
  { sl_no: 82, gender: "M", ssc_p: 81.70, ssc_b: "Others", hsc_p: 63.00, hsc_b: "Others", hsc_s: "Science", degree_p: 67.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 86, specialisation: "Mkt&Fin", mba_p: 70.2, status: "Placed", salary: 300000 },
  { sl_no: 83, gender: "M", ssc_p: 63.00, ssc_b: "Central", hsc_p: 67.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 74.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 82, specialisation: "Mkt&Fin", mba_p: 60.44, status: "Not Placed", salary: null },
  { sl_no: 84, gender: "M", ssc_p: 84.00, ssc_b: "Others", hsc_p: 79.00, hsc_b: "Others", hsc_s: "Science", degree_p: 68.00, degree_t: "Sci&Tech", workex: "Yes", etest_p: 84, specialisation: "Mkt&Fin", mba_p: 66.69, status: "Placed", salary: 300000 },
  { sl_no: 85, gender: "M", ssc_p: 70.00, ssc_b: "Central", hsc_p: 63.00, hsc_b: "Others", hsc_s: "Science", degree_p: 70.00, degree_t: "Sci&Tech", workex: "Yes", etest_p: 55, specialisation: "Mkt&Fin", mba_p: 62, status: "Placed", salary: 300000 },
  { sl_no: 86, gender: "F", ssc_p: 83.84, ssc_b: "Others", hsc_p: 89.83, hsc_b: "Others", hsc_s: "Commerce", degree_p: 77.20, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 78.74, specialisation: "Mkt&Fin", mba_p: 76.18, status: "Placed", salary: 400000 },
  { sl_no: 87, gender: "M", ssc_p: 62.00, ssc_b: "Others", hsc_p: 63.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 64.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 67, specialisation: "Mkt&Fin", mba_p: 57.03, status: "Placed", salary: 220000 },
  { sl_no: 88, gender: "M", ssc_p: 59.60, ssc_b: "Central", hsc_p: 51.00, hsc_b: "Central", hsc_s: "Science", degree_p: 60.00, degree_t: "Others", workex: "No", etest_p: 75, specialisation: "Mkt&HR", mba_p: 59.08, status: "Not Placed", salary: null },
  { sl_no: 89, gender: "F", ssc_p: 66.00, ssc_b: "Central", hsc_p: 62.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 73.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 58, specialisation: "Mkt&HR", mba_p: 64.36, status: "Placed", salary: 210000 },
  { sl_no: 90, gender: "F", ssc_p: 84.00, ssc_b: "Others", hsc_p: 75.00, hsc_b: "Others", hsc_s: "Science", degree_p: 69.00, degree_t: "Sci&Tech", workex: "Yes", etest_p: 62, specialisation: "Mkt&HR", mba_p: 62.36, status: "Placed", salary: 210000 },
  { sl_no: 91, gender: "F", ssc_p: 85.00, ssc_b: "Others", hsc_p: 90.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 82.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 92, specialisation: "Mkt&Fin", mba_p: 68.03, status: "Placed", salary: 300000 },
  { sl_no: 92, gender: "M", ssc_p: 52.00, ssc_b: "Central", hsc_p: 57.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 50.80, degree_t: "Comm&Mgmt", workex: "No", etest_p: 67, specialisation: "Mkt&HR", mba_p: 62.79, status: "Not Placed", salary: null },
  { sl_no: 93, gender: "F", ssc_p: 60.23, ssc_b: "Central", hsc_p: 69.00, hsc_b: "Central", hsc_s: "Science", degree_p: 66.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 72, specialisation: "Mkt&Fin", mba_p: 59.47, status: "Placed", salary: 230000 },
  { sl_no: 94, gender: "M", ssc_p: 52.00, ssc_b: "Central", hsc_p: 62.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 54.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 72, specialisation: "Mkt&HR", mba_p: 55.41, status: "Not Placed", salary: null },
  { sl_no: 95, gender: "M", ssc_p: 58.00, ssc_b: "Central", hsc_p: 62.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 64.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 53.88, specialisation: "Mkt&Fin", mba_p: 54.97, status: "Placed", salary: 260000 },
  { sl_no: 96, gender: "M", ssc_p: 73.00, ssc_b: "Central", hsc_p: 78.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 65.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 95.46, specialisation: "Mkt&Fin", mba_p: 62.16, status: "Placed", salary: 420000 },
  { sl_no: 97, gender: "F", ssc_p: 76.00, ssc_b: "Central", hsc_p: 70.00, hsc_b: "Central", hsc_s: "Science", degree_p: 76.00, degree_t: "Comm&Mgmt", workex: "Yes", etest_p: 66, specialisation: "Mkt&Fin", mba_p: 64.44, status: "Placed", salary: 300000 },
  { sl_no: 98, gender: "F", ssc_p: 70.50, ssc_b: "Central", hsc_p: 62.50, hsc_b: "Others", hsc_s: "Commerce", degree_p: 61.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 93.91, specialisation: "Mkt&Fin", mba_p: 69.03, status: "Not Placed", salary: null },
  { sl_no: 99, gender: "F", ssc_p: 69.00, ssc_b: "Central", hsc_p: 73.00, hsc_b: "Central", hsc_s: "Commerce", degree_p: 65.00, degree_t: "Comm&Mgmt", workex: "No", etest_p: 70, specialisation: "Mkt&Fin", mba_p: 57.31, status: "Placed", salary: 220000 },
  { sl_no: 100, gender: "M", ssc_p: 54.00, ssc_b: "Central", hsc_p: 82.00, hsc_b: "Others", hsc_s: "Commerce", degree_p: 63.00, degree_t: "Sci&Tech", workex: "No", etest_p: 50, specialisation: "Mkt&Fin", mba_p: 59.47, status: "Not Placed", salary: null },
];

// Analytics helper functions
export function getPlacementStats(data: PlacementRecord[]) {
  const totalStudents = data.length;
  const placedStudents = data.filter(d => d.status === "Placed").length;
  const placementPercentage = ((placedStudents / totalStudents) * 100).toFixed(1);
  
  const salaries = data.filter(d => d.salary !== null).map(d => d.salary as number);
  const avgPackage = salaries.length > 0 
    ? Math.round(salaries.reduce((a, b) => a + b, 0) / salaries.length) 
    : 0;
  const highestPackage = salaries.length > 0 ? Math.max(...salaries) : 0;
  const lowestPackage = salaries.length > 0 ? Math.min(...salaries) : 0;

  return {
    totalStudents,
    placedStudents,
    notPlacedStudents: totalStudents - placedStudents,
    placementPercentage: parseFloat(placementPercentage),
    avgPackage,
    highestPackage,
    lowestPackage,
  };
}

export function getDegreeWisePlacements(data: PlacementRecord[]) {
  const degreeGroups: Record<string, { placed: number; notPlaced: number }> = {};
  
  data.forEach(record => {
    if (!degreeGroups[record.degree_t]) {
      degreeGroups[record.degree_t] = { placed: 0, notPlaced: 0 };
    }
    if (record.status === "Placed") {
      degreeGroups[record.degree_t].placed++;
    } else {
      degreeGroups[record.degree_t].notPlaced++;
    }
  });

  return Object.entries(degreeGroups).map(([name, data]) => ({
    name,
    placed: data.placed,
    notPlaced: data.notPlaced,
    total: data.placed + data.notPlaced,
  }));
}

export function getSpecialisationWisePlacements(data: PlacementRecord[]) {
  const groups: Record<string, { placed: number; notPlaced: number }> = {};
  
  data.forEach(record => {
    if (!groups[record.specialisation]) {
      groups[record.specialisation] = { placed: 0, notPlaced: 0 };
    }
    if (record.status === "Placed") {
      groups[record.specialisation].placed++;
    } else {
      groups[record.specialisation].notPlaced++;
    }
  });

  return Object.entries(groups).map(([name, data]) => ({
    name,
    placed: data.placed,
    notPlaced: data.notPlaced,
  }));
}

export function getSalaryDistribution(data: PlacementRecord[]) {
  const ranges = [
    { range: "< 2L", min: 0, max: 200000 },
    { range: "2L-2.5L", min: 200000, max: 250000 },
    { range: "2.5L-3L", min: 250000, max: 300000 },
    { range: "3L-3.5L", min: 300000, max: 350000 },
    { range: "3.5L-4L", min: 350000, max: 400000 },
    { range: "> 4L", min: 400000, max: Infinity },
  ];

  return ranges.map(r => ({
    range: r.range,
    count: data.filter(d => d.salary !== null && d.salary >= r.min && d.salary < r.max).length,
  }));
}

export function getGenderWisePlacements(data: PlacementRecord[]) {
  const male = data.filter(d => d.gender === "M");
  const female = data.filter(d => d.gender === "F");

  return [
    {
      name: "Male",
      placed: male.filter(d => d.status === "Placed").length,
      notPlaced: male.filter(d => d.status === "Not Placed").length,
    },
    {
      name: "Female",
      placed: female.filter(d => d.status === "Placed").length,
      notPlaced: female.filter(d => d.status === "Not Placed").length,
    },
  ];
}

export function getWorkExpImpact(data: PlacementRecord[]) {
  const withExp = data.filter(d => d.workex === "Yes");
  const withoutExp = data.filter(d => d.workex === "No");

  return [
    {
      name: "With Experience",
      placed: withExp.filter(d => d.status === "Placed").length,
      notPlaced: withExp.filter(d => d.status === "Not Placed").length,
      avgSalary: Math.round(
        withExp.filter(d => d.salary).map(d => d.salary as number).reduce((a, b) => a + b, 0) /
        withExp.filter(d => d.salary).length || 0
      ),
    },
    {
      name: "Without Experience",
      placed: withoutExp.filter(d => d.status === "Placed").length,
      notPlaced: withoutExp.filter(d => d.status === "Not Placed").length,
      avgSalary: Math.round(
        withoutExp.filter(d => d.salary).map(d => d.salary as number).reduce((a, b) => a + b, 0) /
        withoutExp.filter(d => d.salary).length || 0
      ),
    },
  ];
}

export function getHSCStreamPlacements(data: PlacementRecord[]) {
  const streams: Record<string, { placed: number; notPlaced: number }> = {};
  
  data.forEach(record => {
    if (!streams[record.hsc_s]) {
      streams[record.hsc_s] = { placed: 0, notPlaced: 0 };
    }
    if (record.status === "Placed") {
      streams[record.hsc_s].placed++;
    } else {
      streams[record.hsc_s].notPlaced++;
    }
  });

  return Object.entries(streams).map(([name, data]) => ({
    name,
    placed: data.placed,
    notPlaced: data.notPlaced,
  }));
}
