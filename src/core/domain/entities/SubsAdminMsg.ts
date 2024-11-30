import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_subs_amid", ["subsAmid"], {})
@Entity("subs_admin_msg", { schema: "makeshop" })
export class SubsAdminMsg {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "subs_id",
    unsigned: true,
    default: () => "'0'",
  })
  subsId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "subs_amid", unsigned: true })
  subsAmid: number;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("mediumtext", { name: "adm_msg" })
  admMsg: string;

  @Column("varchar", { name: "color", length: 6 })
  color: string;

  @Column("varchar", { name: "adm_msg_ref", length: 12 })
  admMsgRef: string;

  @Column("varchar", { name: "sub_id_ing", length: 12 })
  subIdIng: string;

  @Column("smallint", { name: "status", unsigned: true, default: () => "'0'" })
  status: number;

  @Column("varchar", { name: "msg_label", length: 250 })
  msgLabel: string;

  @Column("smallint", {
    name: "back_color",
    unsigned: true,
    default: () => "'0'",
  })
  backColor: number;

  @Column("datetime", {
    name: "date_insert",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateInsert: Date;

  @Column("datetime", {
    name: "date_update",
    default: () => "'0000-00-00 00:00:00'",
  })
  dateUpdate: Date;
}
