import { Any, JsonObject, JsonProperty } from "json2typescript";
import { Coordinates } from "./";

@JsonObject
export class Aneuploidy {
   /** International System for Human Cytogenetic Nomenclature (e.g.: "46,XY", "46,XY,-5,-12,+t(5pl2p),+t(5ql2q)") */
  @JsonProperty("iscn", String, true)
  iscn?: string = undefined;

  /** The assembly */
  @JsonProperty("assembly", String)
  assembly: string = "";

  /** Chromosome involved in the aneuploidy */
  @JsonProperty("chromosome", String)
  chromosome: string = "";

  /** Wheter the aneuploidy is for the whole chromosme or just a fragment */
  @JsonProperty("complete", Boolean)
  complete: boolean = false;

  /** Coordinates can be specified to indicate the part of the chromosome affected */
  @JsonProperty("coordinates", Any, true)
  coordinates?: Coordinates = undefined;

  /** Number of copies */
  @JsonProperty("numberOfCopies", Number)
  numberOfCopies: number = 0;
}


@JsonObject
export class Karyotype {
  /** International System for Human Cytogenetic Nomenclature (e.g.: "46,XY", "46,XY,-5,-12,+t(5pl2p),+t(5ql2q)") */
  @JsonProperty("iscn", String, true)
  iscn?: string = undefined;

  /** Full description of the karyotype */
  @JsonProperty("description", String, true)
  description?: string = undefined;

  /** List of aneuploidies */
  @JsonProperty("aneuploidies", [Aneuploidy], true)
  aneuploidies?: Aneuploidy[] = undefined;

  /** Number of copies */
  @JsonProperty("numberOfChromosomes", Number)
  numberOfChromosomes: number = 0;

  /** Kariotypic sex */
  @JsonProperty("personKaryotipicSex", String)
  personKaryotipicSex: string = "";

  /** Participant identifier */
  @JsonProperty("participantId", String)
  participantId: string = "";
}
