export interface PersonalQuestion {
  type: string;
  question: string;
  id: string;
  choices: string[];
  maxChoice: string;
  disqualify: boolean;
  other: boolean;
}

export interface ProfileQuestion {
  type: string;
  question: string;
  id: string;
  choices: string[];
  maxChoice: string;
  disqualify: boolean;
  other: boolean;
}

export interface CustomisedQuestion {
  type: string;
  question: string;
  id: string;
  choices: string[];
  maxChoice: string;
  disqualify: boolean;
  other: boolean;
}

type PerSonalInformationProp = {
  internalUse: boolean;
  show: boolean;
};

export interface PersonalInformation {
  firstName: PerSonalInformationProp;
  lastName: PerSonalInformationProp;
  emailId: PerSonalInformationProp;
  phoneNumber: PerSonalInformationProp;
  nationality: PerSonalInformationProp;
  currentResidence: PerSonalInformationProp;
  idNumber: PerSonalInformationProp;
  dateOfBirth: PerSonalInformationProp;
  gender: PerSonalInformationProp;
  personalQuestions: PersonalQuestion[];
}

type ProfileProp = {
  mandatory: boolean;
  show: boolean;
};

export interface Profile {
  education: ProfileProp;
  experience: ProfileProp;
  resume: ProfileProp;
  profileQuestions: ProfileQuestion[];
}

export interface ApplicationForm {
  id: string;
  type: string;
  attributes: {
    personalInformation: PersonalInformation;
    coverImage: string;
    profile: Profile;
    customisedQuestions: CustomisedQuestion[];
  };
}

export interface ApplicationFormDataResponse {
  data: ApplicationForm;
}
