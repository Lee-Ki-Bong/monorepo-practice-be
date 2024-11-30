import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_tbn_id", ["tbnId"], {})
@Entity("taxbill_nice", { schema: "makeshop" })
export class TaxbillNice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "tbn_id", unsigned: true })
  tbnId: number;

  @Column("int", { primary: true, name: "tb_id", default: () => "'0'" })
  tbId: number;

  @Column("varchar", { primary: true, name: "ordernum", length: 32 })
  ordernum: string;

  @Column("int", { name: "tba_id", default: () => "'0'" })
  tbaId: number;

  @Column("varchar", { name: "tbn_userid", length: 30 })
  tbnUserid: string;

  @Column("varchar", { name: "tbn_billno", length: 50 })
  tbnBillno: string;

  @Column("datetime", {
    name: "tbn_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  tbnRegDate: Date;

  @Column("varchar", { name: "tbn_mod_code", length: 5 })
  tbnModCode: string;

  @Column("varchar", { name: "tbn_mod_text", length: 255 })
  tbnModText: string;

  @Column("varchar", { primary: true, name: "tbn_tax_type", length: 10 })
  tbnTaxType: string;
}
