import { Column, Entity } from "typeorm";

@Entity("naver_info", { schema: "makeshop" })
export class NaverInfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "ncuserno", length: 120 })
  ncuserno: string;

  @Column("varchar", { name: "ncmallid", length: 120 })
  ncmallid: string;

  @Column("enum", {
    name: "nctype",
    enum: ["", "join", "compare", "leave", "cancel"],
    default: () => "'join'",
  })
  nctype: "" | "join" | "compare" | "leave" | "cancel";

  @Column("datetime", {
    name: "date_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateRegist: Date;

  @Column("datetime", {
    name: "mod_regist",
    default: () => "'0000-00-00 00:00:00'",
  })
  modRegist: Date;
}
