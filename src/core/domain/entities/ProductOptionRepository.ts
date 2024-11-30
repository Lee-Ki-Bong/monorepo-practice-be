import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_rid", ["rid"], {})
@Entity("product_option_repository", { schema: "makeshop" })
export class ProductOptionRepository {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "rid", unsigned: true })
  rid: number;

  @Column("enum", {
    name: "type",
    enum: ["", "BASIC", "ADDITION"],
    default: () => "'BASIC'",
  })
  type: "" | "BASIC" | "ADDITION";

  @Column("enum", { name: "basic", enum: ["", "Y", "N"], default: () => "'N'" })
  basic: "" | "Y" | "N";

  @Column("varchar", { name: "title", length: 20 })
  title: string;

  @Column("mediumtext", { name: "options" })
  options: string;

  @Column("datetime", {
    name: "reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  regDate: Date;
}
