import { Column, Entity } from "typeorm";

@Entity("subs_product_jump", { schema: "makeshop" })
export class SubsProductJump {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "subs_id",
    unsigned: true,
    default: () => "'0'",
  })
  subsId: number;

  @Column("int", {
    primary: true,
    name: "subs_pid",
    unsigned: true,
    default: () => "'0'",
  })
  subsPid: number;

  @Column("date", {
    primary: true,
    name: "spj_date",
    default: () => "'0000-00-00'",
  })
  spjDate: string;

  @Column("varchar", { name: "user_id", length: 40 })
  userId: string;

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", {
    name: "spj_reason",
    length: 10,
    default: () => "'USER'",
  })
  spjReason: string;

  @Column("varchar", { name: "spj_comment", length: 255 })
  spjComment: string;

  @Column("datetime", {
    name: "spj_date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  spjDateInsert: Date;
}
