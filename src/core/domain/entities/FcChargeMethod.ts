import { Column, Entity } from "typeorm";

@Entity("fc_charge_method", { schema: "makeshop" })
export class FcChargeMethod {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("float", { name: "methodc", precision: 12, default: () => "'0'" })
  methodc: number;

  @Column("float", { name: "methodv", precision: 12, default: () => "'0'" })
  methodv: number;

  @Column("float", { name: "methodbv", precision: 12, default: () => "'0'" })
  methodbv: number;

  @Column("float", { name: "methods", precision: 12, default: () => "'0'" })
  methods: number;

  @Column("float", { name: "methodb", precision: 12, default: () => "'0'" })
  methodb: number;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("varchar", { name: "change_id", length: 12 })
  changeId: string;

  @Column("varchar", { name: "ip", nullable: true, length: 15 })
  ip: string | null;
}
