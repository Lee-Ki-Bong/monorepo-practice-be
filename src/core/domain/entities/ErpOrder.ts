import { Column, Entity, Index } from "typeorm";

@Index("delivery_num", ["adminuser", "eoDeliveryNum"], {})
@Entity("erp_order", { schema: "makeshop" })
export class ErpOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "eo_ordernum", length: 26 })
  eoOrdernum: string;

  @Column("int", {
    primary: true,
    name: "eo_num",
    unsigned: true,
    default: () => "'1'",
  })
  eoNum: number;

  @Column("varchar", { name: "eo_delivery_num", length: 23 })
  eoDeliveryNum: string;

  @Column("enum", {
    name: "eo_status",
    enum: ["", "SENDING", "SENDED", "INVOICE"],
    default: () => "'SENDING'",
  })
  eoStatus: "" | "SENDING" | "SENDED" | "INVOICE";

  @Column("datetime", {
    name: "eo_lastdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  eoLastdate: Date;

  @Column("datetime", {
    name: "in_trans_ok_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  inTransOkDate: Date;

  @Column("varchar", { name: "eo_sub_id", length: 12 })
  eoSubId: string;

  @Column("varchar", { name: "eo_deli_num", nullable: true, length: 50 })
  eoDeliNum: string | null;

  @Column("char", { name: "eo_deli_com", nullable: true, length: 3 })
  eoDeliCom: string | null;
}
