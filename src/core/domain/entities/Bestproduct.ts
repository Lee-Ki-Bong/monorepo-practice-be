import { Column, Entity, Index } from "typeorm";

@Index("date", ["adminuser", "date"], {})
@Entity("bestproduct", { schema: "makeshop" })
export class Bestproduct {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "brandcode", length: 12 })
  brandcode: string;

  @Column("int", { name: "uid", nullable: true })
  uid: number | null;

  @Column("int", { name: "amountsum", default: () => "'0'" })
  amountsum: number;

  @Column("enum", { name: "type", enum: ["", "A", "U"], default: () => "'A'" })
  type: "" | "A" | "U";

  @Column("varchar", { name: "date", length: 14 })
  date: string;
}
