import { Column, Entity } from "typeorm";

@Entity("omango", { schema: "makeshop" })
export class Omango {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("enum", {
    primary: true,
    name: "type",
    enum: ["", "omango", "alibaba", "8gram"],
    default: () => "'omango'",
  })
  type: "" | "omango" | "alibaba" | "8gram";

  @Column("int", { name: "uid", unsigned: true, default: () => "'0'" })
  uid: number;

  @Column("varchar", { name: "category", nullable: true, length: 255 })
  category: string | null;

  @Column("varchar", { name: "brand", nullable: true, length: 100 })
  brand: string | null;

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
