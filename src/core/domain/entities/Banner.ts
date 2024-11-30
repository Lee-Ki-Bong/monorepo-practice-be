import { Column, Entity } from "typeorm";

@Entity("banner", { schema: "makeshop" })
export class Banner {
  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { primary: true, name: "url", length: 200 })
  url: string;

  @Column("char", {
    name: "border",
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  border: string | null;

  @Column("char", {
    name: "ssltype",
    nullable: true,
    length: 1,
    default: () => "'H'",
  })
  ssltype: string | null;

  @Column("varchar", {
    name: "target",
    nullable: true,
    length: 8,
    default: () => "'_blank'",
  })
  target: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 100 })
  image: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;
}
