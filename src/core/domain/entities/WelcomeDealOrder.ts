import { Column, Entity, Index } from "typeorm";

@Index("search", ["adminuser", "id"], {})
@Entity("welcome_deal_order", { schema: "makeshop" })
export class WelcomeDealOrder {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { primary: true, name: "num", default: () => "'0'" })
  num: number;

  @Column("varchar", { name: "id", length: 20 })
  id: string;
}
