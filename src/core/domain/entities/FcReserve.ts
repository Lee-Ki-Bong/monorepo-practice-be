import { Column, Entity } from "typeorm";

@Entity("fc_reserve", { schema: "makeshop" })
export class FcReserve {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("int", { name: "rid", unsigned: true, default: () => "'0'" })
  rid: number;

  @Column("enum", {
    primary: true,
    name: "r_type",
    enum: ["", "SP", "CP"],
    default: () => "'SP'",
  })
  rType: "" | "SP" | "CP";

  @Column("varchar", { name: "uids", nullable: true, length: 255 })
  uids: string | null;

  @Column("tinyint", { name: "uids_cnt", width: 1, default: () => "'0'" })
  uidsCnt: boolean;

  @Column("varchar", { name: "cp_rdate", nullable: true, length: 22 })
  cpRdate: string | null;

  @Column("varchar", { name: "cp_ndate", length: 6 })
  cpNdate: string;

  @Column("datetime", {
    name: "r_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  rDate: Date;

  @Column("enum", {
    name: "r_status",
    enum: ["", "Y", "R", "N"],
    default: () => "'N'",
  })
  rStatus: "" | "Y" | "R" | "N";

  @Column("mediumtext", { name: "r_text", nullable: true })
  rText: string | null;
}
