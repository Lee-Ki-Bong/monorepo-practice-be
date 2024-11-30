import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_adminmsg_uid", ["adminmsgUid"], {})
@Index("label_idx", ["adminuser", "msgLabel"], {})
@Index("mdate_idx", ["adminuser", "modifyDate"], {})
@Index("sid_idx", ["adminuser", "subIdIng"], {})
@Index("w_idx", ["subIdIng", "status"], {})
@Index("wdate_idx", ["adminuser", "writeDate"], {})
@Entity("oo_admin_msg", { schema: "makeshop" })
export class OoAdminMsg {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "adminmsg_uid", unsigned: true })
  adminmsgUid: number;

  @Column("varchar", { name: "sub_id", length: 12 })
  subId: string;

  @Column("datetime", {
    name: "write_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  writeDate: Date;

  @Column("datetime", {
    name: "modify_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  modifyDate: Date;

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

  @Column("smallint", { name: "status", unsigned: true, default: () => "'1'" })
  status: number;

  @Column("varchar", { name: "msg_label", nullable: true, length: 250 })
  msgLabel: string | null;

  @Column("varchar", { name: "back_color", nullable: true, length: 6 })
  backColor: string | null;
}
