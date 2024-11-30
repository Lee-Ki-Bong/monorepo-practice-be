import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_num", ["num"], {})
@Entity("fc_notice", { schema: "makeshop" })
export class FcNotice {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "num" })
  num: number;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("varchar", { name: "subject", nullable: true, length: 100 })
  subject: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "attach1", nullable: true, length: 100 })
  attach1: string | null;

  @Column("varchar", { name: "change_id", length: 12 })
  changeId: string;

  @Column("char", { name: "classify", length: 1, default: () => "'1'" })
  classify: string;

  @Column("varchar", { name: "secret_pw", length: 12 })
  secretPw: string;
}
