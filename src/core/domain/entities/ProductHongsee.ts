import { Column, Entity } from "typeorm";

@Entity("product_hongsee", { schema: "makeshop" })
export class ProductHongsee {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "uid",
    unsigned: true,
    default: () => "'0'",
  })
  uid: number;

  @Column("int", { name: "video", unsigned: true, default: () => "'0'" })
  video: number;
}
