import { Column, Entity } from "typeorm";

@Entity("gong", { schema: "makeshop" })
export class Gong {
  @Column("varchar", { primary: true, name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "startdate", length: 14 })
  startdate: string;

  @Column("int", { primary: true, name: "gongcode", default: () => "'1'" })
  gongcode: number;

  @Column("varchar", { name: "enddate", length: 14 })
  enddate: string;

  @Column("varchar", { name: "gongname", length: 200 })
  gongname: string;

  @Column("varchar", { name: "production", nullable: true, length: 20 })
  production: string | null;

  @Column("varchar", { name: "addcode", nullable: true, length: 100 })
  addcode: string | null;

  @Column("int", { name: "quantity", nullable: true, default: () => "'0'" })
  quantity: number | null;

  @Column("int", { name: "startprice", default: () => "'0'" })
  startprice: number;

  @Column("int", { name: "endprice", default: () => "'0'" })
  endprice: number;

  @Column("int", { name: "count", default: () => "'0'" })
  count: number;

  @Column("int", { name: "downprice", default: () => "'0'" })
  downprice: number;

  @Column("int", { name: "originprice", nullable: true, default: () => "'0'" })
  originprice: number | null;

  @Column("int", { name: "listcnt", nullable: true, default: () => "'0'" })
  listcnt: number | null;

  @Column("varchar", { name: "image", nullable: true, length: 50 })
  image: string | null;

  @Column("varchar", { name: "image2", nullable: true, length: 50 })
  image2: string | null;

  @Column("varchar", { name: "image3", nullable: true, length: 50 })
  image3: string | null;

  @Column("int", { name: "money", nullable: true })
  money: number | null;

  @Column("int", { name: "end", nullable: true, default: () => "'3'" })
  end: number | null;

  @Column("char", {
    name: "gubun",
    nullable: true,
    length: 1,
    default: () => "'O'",
  })
  gubun: string | null;

  @Column("longtext", { name: "content", nullable: true })
  content: string | null;
}
