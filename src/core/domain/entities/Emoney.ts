import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_uid", ["uid"], {})
@Index("mtype", ["adminuser", "mtype"], {})
@Index("userno", ["adminuser", "id"], {})
@Entity("emoney", { schema: "makeshop" })
export class Emoney {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { name: "ordernum", length: 255 })
  ordernum: string;

  @Column("varchar", { name: "id", nullable: true, length: 20 })
  id: string | null;

  @Column("varchar", {
    name: "subid",
    nullable: true,
    length: 12,
    default: () => "'SYSTEM'",
  })
  subid: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("int", { name: "amount", default: () => "'0'" })
  amount: number;

  @Column("char", { name: "mtype", length: 2 })
  mtype: string;

  @Column("int", { name: "useremoney", default: () => "'0'" })
  useremoney: number;

  @Column("enum", {
    name: "vtype",
    enum: ["", "SHOW", "HIDE"],
    default: () => "'SHOW'",
  })
  vtype: "" | "SHOW" | "HIDE";

  @Column("varchar", { name: "reg_date", length: 14, default: () => "'0'" })
  regDate: string;
}
