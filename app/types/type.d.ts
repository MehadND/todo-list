// stepper reducer
interface StepperState {
  steps: number;
}

// Basic-info reducer types
interface IBasicInfoReducer {
  basicData: IBasicData;
  maritalstates: IMartialStates[];
  occupationGroups: IOccupationGroup[];
  pending: boolean;
  error: string | null | undefined;
}

interface IBasicData {
  customer: ICustomerData;
  startDate: string;
}
interface ICustomerData {
  birthday: string;
  maritalStatus: string;
  occupationGroup: string;
  gender: 'MALE' | 'FEMALE';
}

interface IMartialStates {
  id: number;
  maritalStatus: string;
}

interface IOccupationGroup {
  id: number;
  occupationGroup: string;
}

// wishes-and-specifications reducer types
interface IInsuranceBenefits {
  search: string;
  subscription: ISubscription;
  selectedSubscription: null | TSubscriptionType;
  filteredTree: IBenefitNode[];
  benefits: INewBenefit[];
  tree: IBenefitNode[];
  benefitsTypes: IBenefitTypes[];
  pending: boolean;
  error: string | null | undefined;
}

type TSubscriptionType = 'basis' | 'komfort' | 'premium';

interface INewBenefit {
  benefitQuestion: string;
  benefitName: string;
  benefitTypeId: number;
  benefitId: number;
  parentBenefitId?: number;

  checked?: boolean;
  value?: number | undefined | boolean | string;
  veryImportantPoint?: boolean;
}

interface IBenefitNode {
  benefit: INewBenefit;
  children?: IBenefitNode[];
}

interface IBenefitTypes {
  benefitType: string;
  benefitTypeId: number;
}

interface ISubscription {
  basis: ISubscriptionItem[];
  komfort: ISubscriptionItem[];
  premium: ISubscriptionItem[];
}

interface ISubscriptionItem {
  benefitId: string | number;
  value: string | number;
  veryImportantPoint: boolean;
}

// tariff (results) reducer types
interface ITariffReducer {
  insuranceNameData: IInsuranceName[];
  tariff: ITariff[];
  pending: boolean;
  error: string | null | undefined;
  filters: {
    fulfillmentPercentage: number;
    searchEnable: boolean;
    searchText: string;
    searchAllTariff: boolean;
    veryImportantPoint: boolean;
    sortBy: SortKeys;
    sortOrder: SortOrder;
  };
  configs: IConfigs;
  tariffDescription: null | undefined | any;
  currentTariffId: string;
}

interface IConfigs {
  showEssentialCreditPoints: boolean;
  showDesiredCreditPoints: boolean;
  showEvaluation: boolean;
  showTariffDetails: boolean;
  showPosts: boolean;
  featuredPost: FeaturedPost;
}

interface ITariff {
  beds: number;
  bigPointsFulfilled: number;
  descriptions: {
    [key: number]: string;
    PVN: string;
  };
  displayString: string;
  effectiveFee: number;
  employeeFee: number;
  fee: number;
  headPhysician: boolean;
  id: string;
  insuranceId: number;
  insuranceNameData?: IInsuranceName;
  percentFulfilled: number;
  retention: {
    retentionType: string;
    retention: number;
  };
  resultAmbulant: number;
  resultCurative: number;
  resultHealer: number;
  resultInpatient: number;
  resultProvision: number;
  resultPsychotherapeutics: number;
  resultScaleOfTariff: number;
  resultTooth: number;
  tooth: {
    refundTooth: number;
    refundToothTherapy: number;
    refundToothOrthontic: number;
  };
  warnings: boolean;
  mergedData?: IMergedItemTypes[];
  removedTariff?: boolean;
  showAllComponents: boolean;
}

interface IInsuranceName {
  insuranceId: number;
  insuranceName: string;
  longname: string;
  symbol: string;
}

interface IMergedItemTypes {
  name: string;
  id: string;
  price: number;
  tariffOpened: boolean;
  referencedComponent: boolean;
}

interface ITariffItem {
  beds: number;
  bigPointsFulfilled: number;
  descriptions: {
    [key: number]: string;
    PVN: string;
  };
  displayString: string;
  effectiveFee: number;
  employeeFee: number;
  fee: number;
  headPhysician: boolean;
  id: string | any;
  insuranceId: number;
  insuranceNameData?: IInsuranceName;
  percentFulfilled: number;
  retention: {
    retentionType: string;
    retention: number;
  };
  resultAmbulant: number;
  resultCurative: number;
  resultHealer: number;
  resultInpatient: number;
  resultProvision: number;
  resultPsychotherapeutics: number;
  resultScaleOfTariff: number;
  resultTooth: number;
  tooth: {
    refundTooth: number;
    refundToothTherapy: number;
    refundToothOrthontic: number;
  };
  warnings: boolean;
  mergedData?: MergedItemTypes[];
  removedTariff?: boolean;
  showAllComponents: boolean;
}

interface IRequestedBenefits {
  id: number;
  value?: number | undefined | boolean | string;
  veryImportantPoint: boolean;
}

// Tariff-specification reducer types
interface ITariffSpecificationReducer {
  tariffSpecificationInfo: ITariffSpecificationInfo;
}

interface ITariffSpecificationInfo {
  calclulateSicknessDailyAllowance: boolean;
  daySicknessDailyAllowance1: string;
  rateSicknessDailyAllowance1: string;
  Krakentagegeld: IKrakentagegeld[] | any;
  calclulateHospitalDailyBenefits: boolean;
  rateHospitalDailyBenefits: string;
  calculateReliefValue: boolean;
  reliefValue: string;
  calclulateCure: boolean;
  rateCure: string;
}

interface IKrakentagegeld {
  daySicknessDailyAllowance2?: string;
  rateSicknessDailyAllowance2?: string;
  daySicknessDailyAllowance3?: string;
  rateSicknessDailyAllowance3?: string;
  id?: string;
}
