import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_nhn_parcel_etc_uid", ["nhnParcelEtcUid"], {})
@Entity("nhn_parcel_etc", { schema: "makeshop" })
export class NhnParcelEtc {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "nhn_parcel_etc_uid",
    unsigned: true,
  })
  nhnParcelEtcUid: number;

  @Column("varchar", { primary: true, name: "nhn_adminuser", length: 12 })
  nhnAdminuser: string;

  @Column("varchar", { name: "nhn_parcel_company", length: 30 })
  nhnParcelCompany: string;

  @Column("varchar", { name: "nhn_parcel_msg", length: 200 })
  nhnParcelMsg: string;

  @Column("enum", {
    name: "nhn_parcel_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  nhnParcelUse: "" | "Y" | "N";

  @Column("mediumtext", { name: "nhn_parcel_set_uid", nullable: true })
  nhnParcelSetUid: string | null;

  @Column("datetime", {
    name: "nhn_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  nhnModDate: Date;

  @Column("datetime", {
    name: "nhn_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  nhnRegDate: Date;
}
