export type EducationItem = {
  institution: string;
  credential: string;
  period: string;
  note: string;
};

export const education: EducationItem[] = [
  {
    institution: "University of the Witwatersrand",
    credential: "BSc(Eng), Electrical and Information Engineering",
    period: "2023 to 2026 (expected)",
    note: "Fourth year. Member of the Wits HPC team.",
  },
  {
    institution: "Reddam House Bedfordview",
    credential: "National Senior Certificate (IEB), Bachelor's pass",
    period: "2020 to 2022",
    note: "Deputy chairperson of the diversity portfolio in 2022.",
  },
  {
    institution: "Auckland Park Academy of Excellence",
    credential: "Grades 8 and 9",
    period: "2018 to 2019",
    note: "Where the first robots and science fair entries were built.",
  },
];
