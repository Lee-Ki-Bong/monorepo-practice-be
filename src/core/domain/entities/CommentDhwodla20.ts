import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comment_dhwodla20", { schema: "makeshop" })
export class CommentDhwodla20 {
  @PrimaryGeneratedColumn({ type: "int", name: "idx" })
  idx: number;

  @Column("varchar", { name: "name", length: 12 })
  name: string;

  @Column("mediumtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "IP", length: 100 })
  ip: string;

  @Column("datetime", { name: "date", default: () => "'0000-00-00 00:00:00'" })
  date: Date;

  @Column("int", { primary: true, name: "memo_idx", default: () => "'0'" })
  memoIdx: number;
}
