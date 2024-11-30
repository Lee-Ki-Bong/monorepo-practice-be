import { Column, Entity, Index } from "typeorm";

@Index("delicompletedate_key", ["adminuser", "delicompleteDate"], {})
@Index("delidate_key", ["adminuser", "deliDate"], {})
@Index("delienddate_key", ["adminuser", "deliendDate"], {})
@Index("delinumdate_key", ["adminuser", "delinumDate"], {})
@Index("dnum_key", ["adminuser", "delinum"], {})
@Index("receiver_key", ["adminuser", "receiver"], {})
@Index("receivermobile_key", ["adminuser", "receiverMobile"], {})
@Index("receiverphone_key", ["adminuser", "receiverPhone"], {})
@Entity("oo_delivery_temp", { schema: "makeshop" })
export class OoDeliveryTemp {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "delivery_num", length: 23 })
  deliveryNum: string;

  @Column("varchar", { name: "tempid", length: 32 })
  tempid: string;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { name: "post", nullable: true, length: 10 })
  post: string | null;

  @Column("varchar", { name: "address", length: 100 })
  address: string;

  @Column("varchar", { name: "address2", length: 100 })
  address2: string;

  @Column("int", { name: "deli_price", unsigned: true, default: () => "'0'" })
  deliPrice: number;

  @Column("int", { name: "add_deli_price", default: () => "'0'" })
  addDeliPrice: number;

  @Column("varchar", { name: "receiver", length: 32 })
  receiver: string;

  @Column("varchar", { name: "receiver_mobile", length: 30 })
  receiverMobile: string;

  @Column("varchar", { name: "receiver_phone", length: 30 })
  receiverPhone: string;

  @Column("enum", {
    name: "deli_type",
    enum: ["", "KOR", "EMS", "HAND"],
    default: () => "'KOR'",
  })
  deliType: "" | "KOR" | "EMS" | "HAND";

  @Column("varchar", { name: "ems_code", length: 10 })
  emsCode: string;

  @Column("varchar", { name: "delinum", length: 20 })
  delinum: string;

  @Column("char", { name: "delicom", length: 3 })
  delicom: string;

  @Column("datetime", {
    name: "delinum_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  delinumDate: Date;

  @Column("datetime", {
    name: "deli_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  deliDate: Date;

  @Column("datetime", {
    name: "delicomplete_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  delicompleteDate: Date;

  @Column("datetime", {
    name: "deliend_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  deliendDate: Date;

  @Column("enum", {
    name: "deli_print",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  deliPrint: "" | "Y" | "N";

  @Column("enum", {
    name: "auto_deli",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  autoDeli: "" | "Y" | "N";

  @Column("varchar", { name: "chk_sum", length: 32 })
  chkSum: string;

  @Column("varchar", { name: "deli_msg", length: 200 })
  deliMsg: string;

  @Column("enum", {
    name: "display",
    enum: ["", "SHOW", "HIDDEN"],
    default: () => "'SHOW'",
  })
  display: "" | "SHOW" | "HIDDEN";

  @Column("datetime", {
    name: "hope_deli_s_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  hopeDeliSDate: Date;

  @Column("datetime", {
    name: "hope_deli_e_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  hopeDeliEDate: Date;

  @Column("mediumtext", { name: "admin_memo", nullable: true })
  adminMemo: string | null;

  @Column("char", { name: "box_type", length: 3 })
  boxType: string;

  @Column("tinyint", { name: "termdeli_cycle", default: () => "'0'" })
  termdeliCycle: number;
}
