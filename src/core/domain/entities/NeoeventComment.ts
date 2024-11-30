import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("display", ["adminuser", "display"], {})
@Index("ea_uid", ["adminuser", "evNo", "userId", "eaUid"], {})
@Index("ec_pid", ["adminuser", "evNo", "ecPid"], {})
@Index("idx_auto_ec_uid", ["ecUid"], {})
@Index("reg_date", ["adminuser", "regDate"], {})
@Index("user_id", ["adminuser", "userId"], {})
@Entity("neoevent_comment", { schema: "makeshop" })
export class NeoeventComment {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", {
    primary: true,
    name: "ev_no",
    length: 20,
    default: () => "'0'",
  })
  evNo: string;

  @PrimaryGeneratedColumn({ type: "int", name: "ec_uid", unsigned: true })
  ecUid: number;

  @Column("int", { name: "ec_pid", unsigned: true, default: () => "'0'" })
  ecPid: number;

  @Column("varchar", { name: "user_id", length: 20 })
  userId: string;

  @Column("int", { name: "ea_uid", unsigned: true, default: () => "'0'" })
  eaUid: number;

  @Column("varchar", { name: "attach", length: 255 })
  attach: string;

  @Column("longtext", { name: "comment", nullable: true })
  comment: string | null;

  @Column("int", { name: "reply_count", unsigned: true, default: () => "'0'" })
  replyCount: number;

  @Column("enum", {
    name: "display",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  display: "" | "Y" | "N";

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
