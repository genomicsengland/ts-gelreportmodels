import { JsonObject, JsonProperty } from "json2typescript";
// import JSONHelper from "../../utils/JSONHelper";
import { Coordinates } from './Coordinates';


@JsonObject
export class UniparentalDisomyFragment {
  /** Coordinates can be specified to indicate the part of the chromosome affected */
  @JsonProperty("coordinates", Coordinates, true)
  coordinates?: string = undefined;

  /** indicates whether the UPD event involves `isodisomy`, `heterodisomy` or `both` */
  @JsonProperty("uniparentalDisomyType", String)
  uniparentalDisomyType: string = "";
}

@JsonObject
export class IdentityByDescent {
  @JsonProperty("relatedSample", String)
  relatedSample: string = "";
  @JsonProperty("ibd0", Number)
  ibd0: number = 0;
  @JsonProperty("ibd1", Number)
  ibd1: number = 0;
  @JsonProperty("ibd2", Number)
  ibd2: number = 0;
  @JsonProperty("pihat", Number)
  pihat: number = 0;
}

@JsonObject
export class UniparentalDisomyEvidences {
  @JsonProperty("ibds", [IdentityByDescent], true)
  ibds?: IdentityByDescent[] = undefined;
}

@JsonObject
export class UniparentalDisomy {
  /** The assembly */
  @JsonProperty("assembly", String)
  assembly: string = "";

  /** Chromosome where two homologues were inherited from one parent */
  @JsonProperty("chromosome", String)
  chromosome: string = "";

  /** indicates Whether the UPD event involves an entire chromosome or part of a chromosome */
  @JsonProperty("complete", Boolean, true)
  complete?: boolean = undefined;

  /** The parent who contributed two chromosomes was the mother (maternal) or the father (paternal) */
  @JsonProperty("origin", String)  // UniparentalDisomyOrigin
  origin: string = "";

  /** List of all of the UPD fragments for this UPD event */
  @JsonProperty("uniparentalDisomyFragments", [UniparentalDisomyFragment], true)
  uniparentalDisomyFragments?: UniparentalDisomyFragment[] = undefined;

  /** Participant affected by this UPD */
  @JsonProperty("participantId", String)
  participantId: string = "";

  @JsonProperty("uniparentalDisomyEvidences", UniparentalDisomyEvidences, true)
  uniparentalDisomyEvidences?: UniparentalDisomyEvidences = undefined;
}

@JsonObject
export class UniparentalDisomyDetails {

  /**
   * Reference assembly
   */
   @JsonProperty("assembly", String)
   assembly: string = "";

  /**
   * Chromosome where two homologues were inherited from one parent
   */
   @JsonProperty("chromosome", String)
   chromosome: string = "";

  /**
   * indicates whether UPD event involves an entire chromosome
   */
  @JsonProperty("complete", Boolean, true)
  complete?: boolean = undefined;

  /**
  The parent who contributed two chromosomes was the mother (maternal) or the father (paternal)
  */
  @JsonProperty("origin", String)  // UniparentalDisomyOrigin
  origin: string = "";

  /**
  List of all of the UPD fragments for this UPD event
  */
  @JsonProperty("uniparentalDisomyFragments", UniparentalDisomyFragment, true)
  uniparentalDisomyFragments?: UniparentalDisomyFragment = undefined;
}
