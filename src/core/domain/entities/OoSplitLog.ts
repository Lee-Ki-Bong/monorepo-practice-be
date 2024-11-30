import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_split_uid", ["splitUid"], {})
@Entity("oo_split_log", { schema: "makeshop" })
export class OoSplitLog {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @PrimaryGeneratedColumn({ type: "int", name: "split_uid", unsigned: true })
  splitUid: number;

  @Column("int", { name: "parent_num", unsigned: true, default: () => "'0'" })
  parentNum: number;

  @Column("int", { name: "split_num", unsigned: true, default: () => "'0'" })
  splitNum: number;
}
