import { Column, Entity } from "typeorm";

@Entity("facebook_categories", { schema: "makeshop" })
export class FacebookCategories {
  @Column("int", {
    primary: true,
    name: "id",
    unsigned: true,
    default: () => "'0'",
  })
  id: number;

  @Column("varchar", { name: "name1", length: 50 })
  name1: string;

  @Column("varchar", { name: "name2", nullable: true, length: 50 })
  name2: string | null;

  @Column("varchar", { name: "name3", nullable: true, length: 50 })
  name3: string | null;

  @Column("varchar", { name: "name4", nullable: true, length: 50 })
  name4: string | null;

  @Column("varchar", { name: "name5", nullable: true, length: 50 })
  name5: string | null;
}
