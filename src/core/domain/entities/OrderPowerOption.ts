import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("brandcode", ["adminuser", "brandcode"], {})
@Index("idx_auto_oid", ["oid"], {})
@Entity("order_power_option", { schema: "makeshop" })
export class OrderPowerOption {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", {
    primary: true,
    name: "num",
    unsigned: true,
    default: () => "'0'",
  })
  num: number;

  @Column("varchar", { name: "brandcode", length: 12 })
  brandcode: string;

  @PrimaryGeneratedColumn({ type: "int", name: "oid", unsigned: true })
  oid: number;

  @Column("varchar", { name: "title", length: 200 })
  title: string;

  @Column("varchar", { name: "value", length: 200 })
  value: string;

  @Column("int", { name: "price", default: () => "'0'" })
  price: number;

  @Column("int", { name: "reserve", default: () => "'0'" })
  reserve: number;

  @Column("int", {
    name: "recmd_reserve",
    nullable: true,
    default: () => "'0'",
  })
  recmdReserve: number | null;

  @Column("varchar", { name: "opt_key", length: 4 })
  optKey: string;

  @Column("enum", {
    name: "state",
    enum: ["", "DELETE", "DONE"],
    default: () => "'DONE'",
  })
  state: "" | "DELETE" | "DONE";
}
