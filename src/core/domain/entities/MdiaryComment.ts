import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mcomment_index_admin_mbuid", ["adminuser", "mboardUid"], {})
@Entity("mdiary_comment", { schema: "makeshop" })
export class MdiaryComment {
  @PrimaryGeneratedColumn({ type: "int", name: "mcomment_uid", unsigned: true })
  mcommentUid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "mboard_uid",
    unsigned: true,
    default: () => "'0'",
  })
  mboardUid: number;

  @Column("varchar", { name: "user_id", nullable: true, length: 20 })
  userId: string | null;

  @Column("varchar", { name: "hname", length: 30 })
  hname: string;

  @Column("varchar", { name: "password", length: 10 })
  password: string;

  @Column("varchar", { name: "ip", length: 15 })
  ip: string;

  @Column("mediumtext", { name: "comment" })
  comment: string;

  @Column("datetime", {
    name: "mcomment_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  mcommentRegisterDate: Date;
}
