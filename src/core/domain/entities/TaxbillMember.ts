import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_tbm_id", ["tbmId"], {})
@Entity("taxbill_member", { schema: "makeshop" })
export class TaxbillMember {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "tbm_id", unsigned: true })
  tbmId: number;

  @Column("char", { name: "tbm_link_code", length: 3 })
  tbmLinkCode: string;

  @Column("varchar", { name: "tbm_userid", length: 30 })
  tbmUserid: string;

  @Column("varchar", { name: "tbm_frn_no", length: 20 })
  tbmFrnNo: string;

  @Column("varchar", { name: "tbm_biz_no", length: 20 })
  tbmBizNo: string;

  @Column("varchar", { name: "tbm_passwd", length: 100 })
  tbmPasswd: string;

  @Column("varchar", { name: "tbm_certpw", length: 100 })
  tbmCertpw: string;

  @Column("varchar", { name: "tbm_charge_name", length: 30 })
  tbmChargeName: string;

  @Column("varchar", { name: "tbm_email", length: 100 })
  tbmEmail: string;

  @Column("varchar", { name: "tbm_tel_no", length: 30 })
  tbmTelNo: string;

  @Column("varchar", { name: "tbm_hp_no", length: 30 })
  tbmHpNo: string;

  @Column("varchar", { name: "tbm_zipcode", length: 10 })
  tbmZipcode: string;

  @Column("varchar", { name: "tbm_addr1", length: 100 })
  tbmAddr1: string;

  @Column("varchar", { name: "tbm_addr2", length: 100 })
  tbmAddr2: string;

  @Column("enum", {
    name: "tbm_status",
    enum: ["", "Y", "N", "D"],
    default: () => "'Y'",
  })
  tbmStatus: "" | "Y" | "N" | "D";

  @Column("datetime", {
    name: "tbm_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tbmRegDate: Date;

  @Column("datetime", {
    name: "tbm_mod_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tbmModDate: Date;
}
