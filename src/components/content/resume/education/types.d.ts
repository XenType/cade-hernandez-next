type EducationInstitution = "MCC" | "UTA";

interface EducationInstitutionProps {
  onClick: (institution: EducationInstitution) => void;
  selected?: boolean;
}
