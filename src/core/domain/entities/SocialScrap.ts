import { Column, Entity } from "typeorm";

@Entity("social_scrap", { schema: "makeshop" })
export class SocialScrap {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("enum", {
    primary: true,
    name: "scrap_type",
    enum: ["", "CL", "TW", "FB", "M2", "WS", "KA", "KS", "LI"],
    default: () => "'CL'",
  })
  scrapType: "" | "CL" | "TW" | "FB" | "M2" | "WS" | "KA" | "KS" | "LI";

  @Column("enum", {
    name: "scrap_use",
    enum: ["", "YES", "NO"],
    default: () => "'NO'",
  })
  scrapUse: "" | "YES" | "NO";

  @Column("enum", {
    name: "scrap_access",
    enum: ["", "ALL", "MEMBER"],
    default: () => "'ALL'",
  })
  scrapAccess: "" | "ALL" | "MEMBER";

  @Column("varchar", { name: "scrap_auth_key", nullable: true, length: 40 })
  scrapAuthKey: string | null;

  @Column("varchar", { name: "scrap_img", length: 5, default: () => "'clog'" })
  scrapImg: string;

  @Column("enum", {
    name: "scrap_productimg",
    enum: ["", "maximage", "minimage", "tinyimage"],
    default: () => "'maximage'",
  })
  scrapProductimg: "" | "maximage" | "minimage" | "tinyimage";
}
