import { Column, Entity } from "typeorm";

@Entity("adminprice", { schema: "makeshop" })
export class Adminprice {
  @Column("varchar", { primary: true, name: "id", length: 12 })
  id: string;

  @Column("varchar", { primary: true, name: "date", length: 14 })
  date: string;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("varchar", { name: "content", length: 200 })
  content: string;
}
