import { Column, Entity, Index } from "typeorm";

@Index("adminuser_id", ["adminuser", "id"], {})
@Index("adminuser_ordernum", ["adminuser", "ordernum"], {})
@Entity("tempcrmphonelist", { schema: "makeshop" })
export class Tempcrmphonelist {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "id", length: 20 })
  id: string;

  @Column("varchar", { primary: true, name: "phone", length: 30 })
  phone: string;

  @Column("varchar", { name: "end_phone", length: 4 })
  endPhone: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("enum", {
    primary: true,
    name: "stype",
    enum: ["", "order", "user"],
    default: () => "'order'",
  })
  stype: "" | "order" | "user";

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;
}
