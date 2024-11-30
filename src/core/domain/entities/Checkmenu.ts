import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uid", ["uid"], {})
@Entity("checkmenu", { schema: "makeshop" })
export class Checkmenu {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { primary: true, name: "url", length: 200 })
  url: string;

  @Column("varchar", {
    primary: true,
    name: "ref",
    length: 200,
    default: () => "'0'",
  })
  ref: string;

  @Column("int", { name: "cnt", unsigned: true, default: () => "'0'" })
  cnt: number;
}
