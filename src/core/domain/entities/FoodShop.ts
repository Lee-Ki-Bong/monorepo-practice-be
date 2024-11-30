import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("_food_shop", { schema: "makeshop" })
export class FoodShop {
  @PrimaryGeneratedColumn({ type: "int", name: "fs_uid", unsigned: true })
  fsUid: number;

  @Column("varchar", { name: "fs_name", length: 40 })
  fsName: string;

  @Column("varchar", { name: "fs_address", length: 100 })
  fsAddress: string;

  @Column("mediumtext", { name: "fs_menu", nullable: true })
  fsMenu: string | null;

  @Column("mediumtext", { name: "fs_memo", nullable: true })
  fsMemo: string | null;

  @Column("varchar", { name: "tip", nullable: true, length: 10 })
  tip: string | null;

  @Column("varchar", { name: "tip2", length: 10 })
  tip2: string;
}
