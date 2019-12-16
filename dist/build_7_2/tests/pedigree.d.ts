/**
 * Pedigree members to be used in testing
 *
 */
import { PedigreeMember, Sex } from "../participant";
export declare const defaultProbandValues: {
  pedigreeId?: number;
  motherId?: number;
  fatherId?: number;
  sex: string;
  isProband?: boolean;
};
export declare const defaultMotherValues: {
  pedigreeId: number;
  motherId: number;
  fatherId: number;
  sex: Sex;
};
export declare const defaultMaternalGrandMotherValues: {
  pedigreeId: number;
  sex: Sex;
};
export declare const defaultMaternalAunt: {
  pedigreeId: number;
  motherId: number;
  sex: Sex;
};
export declare const defaultMaternalGrandFatherValues: {
  pedigreeId: number;
  sex: Sex;
};
export declare const defaultFatherValues: {
  pedigreeId: number;
  motherId: number;
  fatherId: number;
  sex: Sex;
};
export declare const defaultPaternalGrandMotherValues: {
  pedigreeId: number;
  sex: Sex;
};
export declare const defaultPaternalGrandFatherValues: {
  pedigreeId: number;
  sex: Sex;
};
export declare const defaultSiblingValues: {
  pedigreeId: number;
  motherId: number;
  fatherId: number;
  sex: Sex;
};
export declare const defaultOffspringValues: {
  pedigreeId: number;
  motherId: number;
  fatherId: number;
  sex: Sex;
};
export declare const defaultSpouseValues: {
  pedigreeId: number;
  sex: Sex;
};
export declare const defaultSiblingMValues: {
  pedigreeId: number;
  motherId: number;
  fatherId: number;
  sex: Sex;
};
export declare const defaultUnrelatedValues: {
  pedigreeId: number;
  sex: Sex;
  motherId: undefined;
  fatherId: undefined;
};
export declare const defaultPaternalUncleValues: {
  pedigreeId: number;
  fatherId: number;
  sex: Sex;
};
export declare const defaultFirstCousinValues: {
  pedigreeId: number;
  fatherId: number;
  sex: Sex;
};
export declare const defaultValues: {
  defaultProbandValues: {
    pedigreeId?: number | undefined;
    motherId?: number | undefined;
    fatherId?: number | undefined;
    sex: string;
    isProband?: boolean | undefined;
  };
  defaultMotherValues: {
    pedigreeId: number;
    motherId: number;
    fatherId: number;
    sex: Sex;
  };
  defaultMaternalGrandMotherValues: {
    pedigreeId: number;
    sex: Sex;
  };
  defaultMaternalAunt: {
    pedigreeId: number;
    motherId: number;
    sex: Sex;
  };
  defaultMaternalGrandFatherValues: {
    pedigreeId: number;
    sex: Sex;
  };
  defaultFatherValues: {
    pedigreeId: number;
    motherId: number;
    fatherId: number;
    sex: Sex;
  };
  defaultPaternalGrandMotherValues: {
    pedigreeId: number;
    sex: Sex;
  };
  defaultPaternalGrandFatherValues: {
    pedigreeId: number;
    sex: Sex;
  };
  defaultSiblingValues: {
    pedigreeId: number;
    motherId: number;
    fatherId: number;
    sex: Sex;
  };
  defaultOffspringValues: {
    pedigreeId: number;
    motherId: number;
    fatherId: number;
    sex: Sex;
  };
  defaultSpouseValues: {
    pedigreeId: number;
    sex: Sex;
  };
  defaultSiblingMValues: {
    pedigreeId: number;
    motherId: number;
    fatherId: number;
    sex: Sex;
  };
  defaultUnrelatedValues: {
    pedigreeId: number;
    sex: Sex;
    motherId: undefined;
    fatherId: undefined;
  };
  defaultPaternalUncleValues: {
    pedigreeId: number;
    fatherId: number;
    sex: Sex;
  };
  defaultFirstCousinValues: {
    pedigreeId: number;
    fatherId: number;
    sex: Sex;
  };
};
export declare const getPedigree: (values?: {
  pedigreeId?: number | undefined;
  motherId?: number | undefined;
  fatherId?: number | undefined;
  sex: string;
  isProband?: boolean | undefined;
}) => PedigreeMember;
