import { Column, Entity } from "typeorm";

@Entity("modern_fassto_api", { schema: "makeshop" })
export class ModernFasstoApi {
  @Column("varchar", { primary: true, name: "adminuser", length: 13 })
  adminuser: string;

  @Column("varchar", { primary: true, name: "ordernum", length: 26 })
  ordernum: string;

  @Column("int", { name: "num", nullable: true })
  num: number | null;

  @Column("varchar", { name: "slipNo", length: 20 })
  slipNo: string;

  @Column("datetime", { name: "regdate", nullable: true })
  regdate: Date | null;
}
