import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser", ["adminuser"], { unique: true })
@Entity("category_search_configs", { schema: "makeshop" })
export class CategorySearchConfigs {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "adminuser", unique: true, length: 12 })
  adminuser: string;

  @Column("char", { name: "display", length: 1, default: () => "'N'" })
  display: string;

  @Column("char", {
    name: "display_use_color",
    length: 1,
    default: () => "'N'",
  })
  displayUseColor: string;

  @Column("char", {
    name: "display_use_async",
    length: 1,
    default: () => "'Y'",
  })
  displayUseAsync: string;
}
